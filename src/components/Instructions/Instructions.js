import React from 'react';
import {withRouter} from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { API_URL } from '../../config';
import { handleResponse } from '../helpers';
import './Instructions.css';

/*
Instruction component is created when the particpant accepts terms and conditions and proceeds to the experiment. 
It loads the participant id, and the block configurations that will be played during the game. 
*/

class Instructions extends React.Component {
    constructor(props) {
        super(props);

        const prolific_id = this.props.location.state.participant_info.prolific_id
        // console.log('instructions',prolific_id) 
        // console.log(this.props.location.state)

        var currentDate = new Date();
        var date        = currentDate.getDate();
        var month       = currentDate.getMonth(); //Be careful! January is 0 not 1
        var year        = currentDate.getFullYear();
        var dateString  = date + "-" +(month + 1) + "-" + year;
    

        this.state = {
            date: dateString,
            participant_id : 1, // default
            game_id : '',       // to be determined 
            block_number : 0, 
            currentInstructionText: 1,
            TotalBlock: 6, // 1 for test purpose to skip the task otherwise 5 
            newblock_frame : true, 
            readyToProceed: false,
            redirect: false,
            prolific_id: prolific_id, 
            date_time: this.props.location.state.date_time
        }

    this.handleInstructionsLocal = this.handleInstructionsLocal.bind(this) // bind the method to avoid error on frames collapsed
    this.fetchParticipantInfo.bind(this); 
    this.fetchParticipantGameId.bind(this); 
       
    }; 

    // Mount the component to call the BACKEND and GET the information
    componentWillMount() {
    document.body.style.background = "fff";  
    this.fetchParticipantInfo();
    } 
    
    fetchParticipantInfo () {
         fetch(`${API_URL}/participants_data/last_participant_id`) 
           .then(handleResponse)
           .then((data) => {
             const participant_id_ = parseInt(data['new_participant_id'])
             
             this.setState({
                     participant_id : participant_id_,
                 });
             this.fetchParticipantGameId(participant_id_)
         })
           .catch((error) => {
            console.log(error)
         });
        }

    // Based on the participant ID, determine the game_id and then fetch the game specifications 
    fetchParticipantGameId() {

        fetch(`${API_URL}/participants_game/`+this.state.participant_id +'/'+this.state.prolific_id +'/'+this.state.date) 
           .then(handleResponse)
           .then((data) => {
             const game_id_ = parseInt(data['game_id'])
             this.setState({
                     game_id : game_id_,
                 });
         })
           .catch((error) => {
            console.log(error)
         });
        }

    // Transition between the instruction screens   
    handleInstructionsLocal(event){
        var curText     = this.state.currentInstructionText;
        var whichButton = event.currentTarget.id;
    
        if(whichButton==="left" && curText > 1){
        this.setState({currentInstructionText: curText-1});
        }
        else if(whichButton==="right" && curText < 5){
      
        this.setState({currentInstructionText: curText+1});
        }
        if(whichButton==="right" && curText === 3){
        this.setState({readyToProceed: true});
        }
    }

    // change the router type to pass the props to the child component 
    redirectToTarget = () => {

    this.props.history.push({
       pathname: `/BlockFourArm`, //Block 
       state: {participant_info: this.state, newblock_frame:this.state.newblock_frame} 
     })
    
    }


    render() {
        let mytext
        if (this.state.currentInstructionText===1) {
            mytext = <div className='textbox'> <p></p><p>You will play a ‘slot machine’ game.</p>
            <p><span className="bold">Your goal is to win as many points as you can</span>.</p>
            <p> Your final payoff will depend on your choices. At the end of the experiment, we will calculate the cumulative number of points you won and translate them into real money.</p> 
            <p>You could earn between <span className="bold">1.0 &#163;</span> and <span className="bold">2.0 &#163;</span> as a bonus.</p> 
            <p>The game will be divided in 4 short blocks and will last approximately <span className="bold">40 min.</span></p></div>;
        }

        else if (this.state.currentInstructionText===2) {
        mytext = <div className='textbox'> <p></p> <p>Let's start with the practice session.</p>
                    <p>At each trial, you will choose between two slot machines depicted by colored shapes.</p> 
                <div className="translate"/>
                <p><span className="bold">Be aware</span>:</p>
                <p>each slot machine is identified by its colored shape, and not by its position on the screen.</p>
                <div className="symbolframe">    
                    <img className="introsymbol"  src={require('../../images/symbol_shape_0_grate_None_color_3.png')} alt='introsymbol'/> 
                    <img className="introsymbol"  src={require('../../images/symbol_shape_2_grate_None_color_0.png')} alt='introsymbol'/> 
                </div>
                <p> The number of points won (between 1 and 99) will appear below the colored shape that you have chosen.</p>
                <p>For this traing round you will also observe the payoff from the machine that you have not chosen.</p>
                <p>However, you will only win the points of the slot machine that you have chosen.</p>
                </div>
            }

        else if (this.state.currentInstructionText===3) {
            mytext = <div className='textbox'> <p></p> <p> The average payoffs of the two slot machines change over time.</p>
            <p>The game consists in finding out which of the two slot machines is <span className="bold">currently</span> more rewarding.</p>
            <p><span className="bold">Be aware:</span> the outcome of each slot machine varies around its average value from trial to trial.</p> 
            <p>For example, a slot machine can bring more than 50 points on average but less than 50 points on a particular trial, and vice versa.</p>
            </div>;
        }
        else if (this.state.currentInstructionText===4) {
            mytext = <div className='textbox'> <p></p> <p>There is <span className="bold">always</span> a slot machine that gives <span className="bold">currently</span> more points on average then the other one.</p>
            <p> This will be the case during a certain period of time (what we call an episode).</p>
            <p>You do not know how long the episode would last but you can get a sense of it by trying to remember the outcomes of the slot machines in the nearest past.</p>
            </div>;
        }

        return (
            <div>
            <div className="center translate">
            <div className="InstructText">
            <center> 
            <p className='title'><span className="bold">INSTRUCTIONS</span></p>
            </center>
                <center> 
                <div className="instructionsButtonContainer">

                    {this.state.currentInstructionText > 1 ? // id helps get which button was clicked to handle the 

                        <Button id="left" className="buttonInstructions" onClick={this.handleInstructionsLocal}> 
                            <span className="bold">&#8592;</span>
                        </Button>
                        :
                        null

                    }

                    {this.state.currentInstructionText < 4 ?
                        <Button id="right" className="buttonInstructions" onClick={this.handleInstructionsLocal}>
                            <span className="bold">&#8594;</span>
                        </Button>
                        :
                        null
                    }

                    <div>
                        {mytext}
                    </div>
                    {this.state.readyToProceed ?
                    <div className="buttonInstruction">
                    <center>
                        <label className='textbox'> When you are ready, start the training</label><br/>
                        <Button className="buttonInstructionStart" onClick={()=>this.redirectToTarget()}>
                            <span className="bold">START</span>
                        </Button>
                    </center>
                    
                    </div>
                    : null}

            </div>
        </center>
        </div>
        </div>
        </div>
        ) 
    }
}

export default withRouter(Instructions);

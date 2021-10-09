import React from 'react';
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import { API_URL } from '../../config';
import { handleResponse } from '../helpers';

import { CSSTransitionGroup } from 'react-transition-group';


import Score from '../Score/Score';

import './BlockFourArm.css'


class BlockFourArm extends React.Component {
  constructor(props){
    super(props);
    const participant_info = this.props.location.state.participant_info

    console.log(participant_info)

    const block_info = {
      
      block_feedback: '',  
      trial_numb    : 0,
      block_number  : '', 
      block_type    : '',
      TotalTrial    : ''
    }

    this.state = {
      participant_info : participant_info,
      block_info       : block_info,
      newblock_frame   : this.props.location.state.newblock_frame,
      pool_symbols     : {},
      score : -1,
      load_bonus: false
    }

    this.fetchBlock.bind(this);
    this.fetchSymbols.bind(this);
    this.redirectToScore.bind(this); 
    this.redirectToEnd.bind(this); 
    this._isMounted = false;
    this._handleGoBack.bind(this);   
  }

  
  restartTraining () {
    this.setState({newblock_frame : true, participant_info : {...this.state.participant_info, block_number:0},})
    this.fetchBlock(this.state.participant_info.blocks_ids[0])
    this._isMounted && this.fetchSymbols(0);
  }



  redirectToTarget () {
      if((this.state.participant_info.block_number < 2) && (this.state.participant_info.block_number <= (this.state.participant_info.TotalBlock)))
          {           
          
          console.log('2 arm blocks')

          if (this.state.newblock_frame){ // frame true 
          this.setState({newblock_frame : false})
          this.props.history.push({
           pathname: `/BoardTwoArm`,
           state: {participant_info: this.state.participant_info,
                   block_info      : this.state.block_info,
                   pool_symbols    : this.state.pool_symbols
                 }
          })}
          else // frame false 
          {
            if (this._isMounted)
            {
              
              // console.log(this.state.participant_info.block_number)
              const newblocknumber = this.state.participant_info.block_number + 1
              // console.log(newblocknumber)

              if (newblocknumber === this.state.participant_info.TotalBlock+1){ 
                console.log('Fetching the score')
                this.fetchScore()
                }

              else {
                this.fetchBlock(this.state.participant_info.game_id,newblocknumber+1) //this.state.participant_info.block_number
              
                this.fetchSymbols(this.state.participant_info.game_id,newblocknumber+1); 
              
                this.setState({newblock_frame : true, participant_info : {...this.state.participant_info, block_number:newblocknumber},}) // what gets updated 
              }
            }
          }
        }
        else if ((this.state.participant_info.block_number >= 2) && this.state.participant_info.block_number <= (this.state.participant_info.TotalBlock)) {
          console.log('4 arm blocks ')

          if (this.state.newblock_frame){ // frame true 
            this.setState({newblock_frame : false})
            this.props.history.push({
            pathname: `/BoardFourArm`,
            state: {participant_info: this.state.participant_info,
                   block_info      : this.state.block_info,
                   pool_symbols    : this.state.pool_symbols
                 }
          })}
          else // frame false 
          {
            if (this._isMounted)
            {
              
              // console.log(this.state.participant_info.block_number)
              const newblocknumber = this.state.participant_info.block_number + 1
              // console.log(newblocknumber)

              if (newblocknumber === this.state.participant_info.TotalBlock+1){ 
                console.log('Fetching the score')
                this.fetchScore()
                }

              else {
                this.fetchBlock(this.state.participant_info.game_id,newblocknumber+1) //this.state.participant_info.block_number
              
                this.fetchSymbols(this.state.participant_info.game_id,newblocknumber+1); 
              
                this.setState({newblock_frame : true, participant_info : {...this.state.participant_info, block_number:newblocknumber},}) // what gets updated 
              }
            }
          }
        }
      }




  // When the task is over 
  fetchScore() {
  if (this._isMounted) {

    fetch(`${API_URL}/participants_data/score/`+ this.state.participant_info.participant_id +'/'+ this.state.participant_info.game_id +'/'+this.state.participant_info.prolific_id)
            .then(handleResponse)
            .then((data) => {
              const bonus = data['bonus']
              // console.log(bonus)

              this.setState({
                  score : bonus,
                  loading : false,
                  load_bonus: true,
                  newblock_frame : true,
                  participant_info : {...this.state.participant_info, block_number:this.state.participant_info.TotalBlock+1}
                });
            })
            .catch((error) => {
                this.setState({ error : error.errorMessage, loading: false, load_bonus: false });
                 });
}
}

redirectToScore() {
if (this.state.load_bonus === false) {
  this.fetchScore() 
}
  
else if  (this.state.load_bonus === true){
   return (
        <Score
          score      = {this.state.score}  
          onClicked  = {this.redirectToEnd}
        />
      );}
 }

redirectToEnd = () => { // TO BE CHANGED 

  // Post the bonus amount together with the prolific id and participant ids in the ParticipantsDataBonus table: 
  let body = { 
              'participant_id'  : this.state.participant_info.participant_id,
              'prolific_id'     : this.state.participant_info.prolific_id,
              'date'            : this.state.participant_info.date,
              'bonus'           : this.state.score}
              
    // console.log(body) 
    fetch(`${API_URL}/participants_data_bonus/create/`+this.state.participant_info.participant_id +'/'+this.state.participant_info.prolific_id, {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(body)
     })

    // Adding cash data and pushing them here: across all sessions 
    // Extract data from the localStorage and push them to the DB as well
    let cashed_ = {}
    if (sessionStorage.hasOwnProperty('cashed')) {
        cashed_ = sessionStorage.getItem('cashed');

        try {
          cashed_ = JSON.parse(cashed_);
          // console.log('parsed cash',cashed_)
        } catch (e) {
          console.log('Cannot parse cashed', cashed_)
        }
    }

    // Push cashed data to the DB
    var date_time_end = new Date().toLocaleString();

    let body_cashed = {
      'log'          : cashed_,  // this.state.cashed, 
      'date_time'    : date_time_end,
      'date_time_end': date_time_end, 
      'log_type'     : 'game' 
    }
    
    console.log('Block body_cashed', body_cashed)

    try {

    fetch(`${API_URL}/attempts/save/`+ this.state.participant_info.participant_id + `/` + this.state.participant_info.game_id + `/` + this.state.participant_info.prolific_id, {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(body_cashed)
    })
    }
    catch(e) {
      console.log('cannot post cashed data: data would be lost')
    }


    // console.log('Clearing cash') 
    sessionStorage.removeItem('cashed')

    alert("You will be redirected to the validation page. Please, confirm leaving the page. Thank you!")
    // window.location.replace('https://app.prolific.co/submissions/complete?cc=1A496EDB')
    window.location = 'https://app.prolific.co/submissions/complete?cc=XXXXXXX'


  } 
  componentDidMount() {  
  this._isMounted = true;
  document.body.style.background= '#fff';   
  this._isMounted && this.fetchBlock(this.state.participant_info.game_id,this.state.participant_info.block_number+1);
  this._isMounted && this.fetchSymbols(this.state.participant_info.game_id,this.state.participant_info.block_number+1);
  window.history.pushState(window.state, null, window.location.href);
  window.addEventListener('popstate', e => this._handleGoBack(e));
  window.onbeforeunload = this._handleRefresh
  }

  _handleRefresh(evt){
    return false // error message when refresh occurs
  }

  _handleGoBack(event){
    window.history.go(1);
  }

  componentWillUnmount()
  {
   this._isMounted = false;
  }  


  fetchSymbols(game_id_,block_number_) {

    // console.log('fetching the symbols') // change to fetch all the blocks before ... 

    fetch(`${API_URL}/games/`+game_id_+'/'+block_number_) 
      .then(handleResponse)
      .then((data) => {
        
        // console.log(data['symbols'])
        // exclude the none images  for first 2 training blocks 
        if (block_number_ < 3){

          console.log('Filtering symbols')
          var filtered = Object.assign({},...
          Object.entries(data['symbols']).filter(([k,v]) => v!=='None').map(([k,v]) => ({[k]:v}))
        );

//        const required_pool_of_symbols = Object.keys(data['symbols']).map((key, index) => (require('../../images/' + data['symbols'][key])))
          const required_pool_of_symbols = Object.keys(filtered).map((key, index) => (require('../../images/' + filtered[key])))
          
          this.setState({
            pool_symbols : required_pool_of_symbols,
            loading      : false 

          });
        }
        else{
          console.log('Taking all four symbols')
          const required_pool_of_symbols = Object.keys(data['symbols']).map((key, index) => (require('../../images/' + data['symbols'][key])))
        
          this.setState({
            pool_symbols : required_pool_of_symbols,
            loading      : false 

          });
        }


  })
        

      .catch((error) => {
        this.setState({ error : error.errorMessage, loading: false });
         });
       }

// This is to get the data for a specific block from the Back 
  async fetchBlock(game_id_,block_number_) {
//    console.log(block_number_)
    this.setState({ loading: true });
    const fetchResult = fetch(`${API_URL}/game_blocks/`+game_id_+'/'+block_number_)
      .then(handleResponse)

      .then((data) => {

         console.log(data)

        if(block_number_ < 3){
          console.log('Fetching a block with 2 arms')


          var block_info = {
          block_number   : data.block_number,
          block_feedback : data.block_feedback, // they were coded as 0 = Partial  and 1 = Complete  
          block_type     : data.block_type,
          reward_1       : Object.keys(data['reward_1']).map((key, index) => (data['reward_1'][key])).map(Number),
          reward_2       : Object.keys(data['reward_2']).map((key, index) => (data['reward_2'][key])).map(Number),
          th_reward_1    : Object.keys(data['th_reward_1']).map((key, index) => (data['th_reward_1'][key])).map(Number),
          th_reward_2    : Object.keys(data['th_reward_2']).map((key, index) => (data['th_reward_2'][key])).map(Number),
          position       : Object.keys(data['position1']).map((key, index) => (data['position1'][key])).map(Number), // just need one position for that as before 
          trial_numb     : 0,
          TotalTrial     : 6 // Object.keys(data['reward_1']).length
        }

        console.log('coucou block',block_info) 

        this.setState({
          block_info: block_info,
        });

        }else{
          console.log('Fetching a block with 4 arms')

          const block_info = {
          block_number   : data.block_number,
          block_feedback : data.block_feedback, // they were coded as 0 = Partial  and 1 = Complete  
          block_type     : data.block_type,
          reward_1       : Object.keys(data['reward_1']).map((key, index) => (data['reward_1'][key])).map(Number),
          reward_2       : Object.keys(data['reward_2']).map((key, index) => (data['reward_2'][key])).map(Number),
          reward_3       : Object.keys(data['reward_1']).map((key, index) => (data['reward_3'][key])).map(Number),
          reward_4       : Object.keys(data['reward_2']).map((key, index) => (data['reward_4'][key])).map(Number),
          
          th_reward_1    : Object.keys(data['th_reward_1']).map((key, index) => (data['th_reward_1'][key])).map(Number),
          th_reward_2    : Object.keys(data['th_reward_2']).map((key, index) => (data['th_reward_2'][key])).map(Number),
          th_reward_3    : Object.keys(data['th_reward_1']).map((key, index) => (data['th_reward_3'][key])).map(Number),
          th_reward_4    : Object.keys(data['th_reward_2']).map((key, index) => (data['th_reward_4'][key])).map(Number),
          
          position1       : Object.keys(data['position1']).map((key, index) => (data['position1'][key])).map(Number), // just need one position for that as before 
          position2       : Object.keys(data['position2']).map((key, index) => (data['position2'][key])).map(Number), // just need one position for that as before 
          position3       : Object.keys(data['position3']).map((key, index) => (data['position3'][key])).map(Number), // just need one position for that as before 
          position4       : Object.keys(data['position4']).map((key, index) => (data['position4'][key])).map(Number), // just need one position for that as before 

          reward_upleft   : Object.keys(data['reward_upleft']).map((key, index) => (data['reward_upleft'][key])), // just need one position for that as before 
          reward_upright  : Object.keys(data['reward_upright']).map((key, index) => (data['reward_upright'][key])), // just need one position for that as before 
          reward_lowright : Object.keys(data['reward_lowright']).map((key, index) => (data['reward_lowright'][key])), // just need one position for that as before 
          reward_lowleft  : Object.keys(data['reward_lowleft']).map((key, index) => (data['reward_lowleft'][key])), // just need one position for that as before 

          trial_numb     : 0,
          TotalTrial     : 3 // Object.keys(data['reward_1']).length
          }
       
        this.setState({
          block_info: block_info,
        });
      }

    })


        .catch((error) => {
          this.setState({ error : error.errorMessage, loading: false });
      });
    const response = await fetchResult;
    return response
  }


render()
  { 
    let text
    if ((this.state.participant_info.block_number === 0) && (this.state.newblock_frame) && (this.state.block_info.block_feedback===1)) // first block is the complete feedback one
    { 
      // text = <div className='textbox'> <p>This is a <span className="bold">partial</span> feedback block: you will <span className = "bold">only</span> see points of the <span className = "bold">chosen</span> slot machine.</p> 
      text = <div className='textbox'> <p>This is a <span className="bold">complete</span> feedback block: you will see <span className="bold">both</span> points of the <span className = "bold">chosen</span> and of the <span className = "bold">unchosen</span> slot machines.</p> 
      
              <div className="translate"/>
                <img className="introsymbol"  src={require('../../images/symbol_shape_0_grate_None_color_3.png')} alt='introsymbol' /> 
                <img className="introsymbol"  src={require('../../images/symbol_shape_2_grate_None_color_0.png')} alt='introsymbol' /> 
            </div>

    return (
      <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}>

      <div>
      <center> 
      <div className="instructionsButtonContainer">
        <div>
          {text}           
        </div> 
        <center>
          <Button className="buttonInstructionsBlock" onClick={()=>this.redirectToTarget()}>
            &#8594;
          </Button>
        </center>
      </div>
      </center> 
      </div>
      </CSSTransitionGroup>);
    } 

    else if ((this.state.participant_info.block_number===0)  && (this.state.newblock_frame) && (this.state.block_info.block_feedback===0))
    {
      text = <div className='textbox'> <p>This is a <span className="bold">partial</span> feedback block: you will <span className="bold">only</span> see the points of the <span className="bold">chosen</span> slot machine.</p> 
                <div className="translate"/>
                <img className="introsymbol" src={require('../../images/symbol_shape_0_grate_None_color_3.png')} alt='introsymbol'/> 
                <img className="introsymbol" src={require('../../images/symbol_shape_2_grate_None_color_0.png')} alt='introsymbol'/> 
                </div>
      
        return (
          <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}>

          <div>
          <center> 
          <div className="BlockButtonContainer">
            <div>
              {text}           
            </div> 
            <center>
              <Button className="buttonInstructionsBlock" onClick={()=>this.redirectToTarget()}>
              &#8594;
              </Button>
            </center>
          </div>
          </center>
          </div>
          </CSSTransitionGroup>
          );
    }
    else if ((this.state.participant_info.block_number===0) && (this.state.newblock_frame===false))
          {
      text = <div className='textbox'> 
                <p>Did you notice that the most rewarding colored shape was not the same throughout the session?</p>
                <p>At the beginning it was <span className="bold red"> the red circle </span> but in the middle of the session it changed,</p> 
                <p>and <span className="bold blue">the blue star </span> became more rewarding?!</p>
                <p>It is important that you track these changes !</p>
                <p>It is also important to track outcomes <span className='bold italic'>in time</span> and avoid switching too much</p>
                <p>because even a good shape can occasionally give few points !</p>
                <p></p> 
                <p>Let's do another training session with <span className="bold">partial feedback</span> now: you will <span className="bold">only</span> see the feedback of the <span className="bold">chosen</span> slot machine.</p> 
                <div className="translate"/>
                <img className="introsymbol"  src={require('../../images/symbol_shape_1_grate_None_color_2.png')} alt='introsymbol'/> 
                <img className="introsymbol"  src={require('../../images/symbol_shape_3_grate_None_color_1.png')} alt='introsymbol'/> 
                </div>
      
        return (
          <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}>

          <div>
          <center> 
          <div className="instructionsButtonContainer">
            <div>
              {text}           
            </div>
            <center>
              <Button className="buttonInstructionsBlock" onClick={()=>this.redirectToTarget()}>
              &#8594;
              </Button>
            </center>
          </div>
          </center>
          </div>
          </CSSTransitionGroup>);
    }

    else if ((this.state.participant_info.block_number===1) && (this.state.newblock_frame===false))
    {
      text = <div className='textbox'><p> Well done so far!</p>
                  <p></p>
                  <p> We will complicate things a little bit now. </p>
                  <p> Instead of <span className="bold">two</span> slot machines, you will play a game with <span className="bold">four</span> slot machines! </p>
                  <p> As in the last training session you will only see the outcome of the <span className="bold">chosen</span> slot machine.</p>
                  <p> Finding the most rewarding slot machine will be harder, so pay attention! </p>

                <div className="translate"/>
                <img className="intro4symbol"  src={require('../../images/instruct_4bandits.png')} alt='intro4symbol'/> 
                </div>


      return (
        <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}>
        <div>
        <center> 
        <div>
          <div className="restarttraining">
            {text}  <div className="translate"/>
          </div>
          <center>
            <Button className="buttonInstructionsBlock" onClick={()=>this.redirectToTarget()}>
            &#8594;
            </Button>
          </center>
        </div>
        </center>
        </div>
        </CSSTransitionGroup>);
    }
        else if ((this.state.participant_info.block_number===2) && (this.state.newblock_frame===false))
    {
      text = <div className='textbox'><p> Great you finished the training!</p>
                  <p></p>
                  <p> You will now start the main task where you can earn a bonus based on your performance.</p>
                  <p> You will play <span className="bold">four</span> games with <span className="bold">four</span> slot machines in each</p>
                  <p> As in the last training session you will only see the outcome of the <span className="bold">chosen</span> slot machine.</p>
                  <p> Please ensure you are not interrupted during the game! </p>
                  <p> Good luck! </p></div>
                  
      return (
        <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}>
        <div>
        <center> 
        <div>
          <div className="restarttraining">
            {text}  <div className="translate"/>
          </div>
          <center>
            <Button className="buttonInstructionsBlock" onClick={()=>this.redirectToTarget()}>
            &#8594;
            </Button>
          </center>
        </div>
        </center>
        </div>
        </CSSTransitionGroup>);
    }

    else if (
      (this.state.participant_info.block_number===this.state.participant_info.TotalBlock+1) && (this.state.load_bonus===true)
     
      )
    {
      return(

          <div>{this.redirectToScore()}</div>       
        )
    }

    else
    {
      const end_of_block_text  = (this.state.block_info.block_type==="training") ? 'End of training block': 'End of block ' + (this.state.participant_info.block_number-2)
      
      if (this.state.newblock_frame) 
        {
//           text = <div><p>The next block is <span className="bold">{feedback_type_text}</span> feedback block!</p></div>
          text = <div><p>Please, start the next block when ready!</p></div>
        }
      else
        { 
          text = <div><p>{end_of_block_text}</p></div> //'End of block ' + (this.state.participant_info.block_number+1)
        }
        return (
          <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={800}
      transitionAppear
      transitionAppearTimeout={800}>

      <div>
      <center>
      <div className="restarttraining">
        {text}           
      </div>
        <center>
        <Button className="buttonInstructionStart" onClick={()=>this.redirectToTarget()}>
          &#8594;
        </Button>
        </center>
    </center>
    </div>
    </CSSTransitionGroup>);
    }    
  }

}

export default withRouter(BlockFourArm);
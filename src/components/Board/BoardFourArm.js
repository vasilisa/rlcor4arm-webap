import React from 'react';
import './Board.css';
import BrickFourArm from '../Brick/BrickFourArm.js'
import { API_URL } from '../../config';
// import { handleResponse } from '../helpers';
import {withRouter} from 'react-router-dom';
import {Container,Col,Row} from 'react-bootstrap'; 



class BoardFourArm extends React.Component {
  constructor(props){
    super(props);

    const participant_info = this.props.location.state.participant_info
    const block_info       = this.props.location.state.block_info
    const pool_symbols     = this.props.location.state.pool_symbols

    
    // console.log(pool_symbols)

    const current_symbols  = ['','','','']



// Define position of the four symbols  clockwise 
// 1 = Upper Left 
// 2 = Upper Right 
// 3 = Lower Right 
// 4 = Lower Left 

    current_symbols[0]    = pool_symbols[block_info.position1[0]-1] // find a symbol at position 1  left up
    current_symbols[1]    = pool_symbols[block_info.position2[0]-1] // find a symbol at position 2  right up 
    current_symbols[2]    = pool_symbols[block_info.position3[0]-1] // find a symbol at position 3  right low 
    current_symbols[3]    = pool_symbols[block_info.position4[0]-1] // find a symbol at position 4  left low

    // console.log(current_symbols)


    
    this.state = {
      clickable        : true, // freezing when subject has chosen a symbol
      animation        : true, // relaunch fading animation after each trial
      feedback         : Array(4).fill(null), // Array(2).fill(null) 
      noFeedback       : ['null', 'null','null','null'],
      symbolHighlight  : ['null', 'null','null','null'],
      participant_info : participant_info,
      block_info       : block_info,        
      error            : '',
      chosen_rewards   : [],
      unchosen_rewards : [],
      block_perf       : 0.0,
      chosen_symbols   : [],
      chosen_positions : [],
      reaction_times   : [],
      current_symbols  : current_symbols,
      pool_symbols     : pool_symbols,  
      completed        : 'no',
      cashed           : {} // concatenated data to be stored in cash browser  
    };

    this.redirectToBlock.bind(this)
    var time_date_first          = new Date()
    this.prev_reaction_time_date = time_date_first.getTime()
    // this._handleGoBack.bind(this);  TO IMPLEMENT LATER   
    // this._handleRefresh.bind(this);
  };


  componentDidMount() {
    this.hydrateStateWithLocalStorage();
 }

  hydrateStateWithLocalStorage() {

      // if the key exists in localStorage
      if (sessionStorage.hasOwnProperty('cashed')) {
        let cashed_ = sessionStorage.getItem('cashed');

        try {
          cashed_ = JSON.parse(cashed_);
          this.setState({'cashed': cashed_ });
        } catch (e) {
          // handle empty string
          this.setState({'cashed': cashed_ });
        }

      }
      console.log('Board retreived cash', this.state.cashed)
    }
    

  renderBrick(i) {
    return (
      <BrickFourArm // TO BE ADJUSTED 
        symbol          = {this.state.current_symbols[i]}
        feedback        = {this.state.feedback[i]}
        animation       = {this.state.animation}
        noFeedback      = {this.state.noFeedback[i]}
        symbolHighlight = {this.state.symbolHighlight[i]}
        symbolClicked   = {() => this.handleClick(i)}
      />
    );
  }


  handleClick(i) {

    // console.log('i',i) // 0 if the left brick clicked and 1 if the right one  
    // update symbol without Mutation
    const newcount     = this.state.block_info.trial_numb + 1
    const end_of_block = (newcount === this.state.block_info.TotalTrial ? true : false ) ? true : false 

    const idx = [0,1,2,3]
    const index = idx.indexOf(i);
    // console.log('Chosen posiion bandit',i)
    // console.log('Unchosen bandits position',index)

    if (index > -1) {
      idx.splice(index, 1);
    }
    // console.log('Index of unchosen bandits',idx)

    
    if (this.state.clickable) {

      const feedback        = this.state.feedback.slice();
      const noFeedback      = this.state.noFeedback.slice();
      const symbolHighlight = this.state.symbolHighlight.slice();

      var chosen_symbol   = []
      var chosen_r_th     = []
      var chosen_r        = []
      var unchosen_r_th   = []
      var unchosen_r      = []
      var chosen_r_check  = []
      var position        = [] 


      // chosen option feedback 
      if (i==0) { 
            // upper left is chosen find the bandit at this position 1 
            feedback[i] = this.state.block_info.reward_1[this.state.block_info.trial_numb]*(this.state.block_info.position1[this.state.block_info.trial_numb] === "1") 
            + this.state.block_info.reward_2[this.state.block_info.trial_numb]*(this.state.block_info.position1[this.state.block_info.trial_numb] === "2")
            + this.state.block_info.reward_3[this.state.block_info.trial_numb]*(this.state.block_info.position1[this.state.block_info.trial_numb] === "3")
            + this.state.block_info.reward_4[this.state.block_info.trial_numb]*(this.state.block_info.position1[this.state.block_info.trial_numb] === "4")

            chosen_symbol = 1*(this.state.block_info.position1[this.state.block_info.trial_numb] === "1") 
            + 2*(this.state.block_info.position1[this.state.block_info.trial_numb] === "2")
            + 3*(this.state.block_info.position1[this.state.block_info.trial_numb] === "3")
            + 4*(this.state.block_info.position1[this.state.block_info.trial_numb] === "4")

            // check with reward_upleft 
            chosen_r_check = this.state.block_info.reward_upleft[this.state.block_info.trial_numb]
            position       = 'upleft' 

        }
        else if (i==1){
            feedback[i] = this.state.block_info.reward_1[this.state.block_info.trial_numb]*(this.state.block_info.position2[this.state.block_info.trial_numb] === "1") + 
            this.state.block_info.reward_2[this.state.block_info.trial_numb]*(this.state.block_info.position2[this.state.block_info.trial_numb] === "2") + 
            this.state.block_info.reward_3[this.state.block_info.trial_numb]*(this.state.block_info.position2[this.state.block_info.trial_numb] === "3") + 
            this.state.block_info.reward_4[this.state.block_info.trial_numb]*(this.state.block_info.position2[this.state.block_info.trial_numb] === "4")

            chosen_symbol = 1*(this.state.block_info.position2[this.state.block_info.trial_numb] === "1") 
            + 2*(this.state.block_info.position2[this.state.block_info.trial_numb] === "2")
            + 3*(this.state.block_info.position2[this.state.block_info.trial_numb] === "3")
            + 4*(this.state.block_info.position2[this.state.block_info.trial_numb] === "4")

            // check with reward_upleft 
            chosen_r_check = this.state.block_info.reward_upright[this.state.block_info.trial_numb]
            position       = 'upright' 


        } 
        else if (i==2){
            feedback[i] = this.state.block_info.reward_1[this.state.block_info.trial_numb]*(this.state.block_info.position3[this.state.block_info.trial_numb] === "1") + 
            this.state.block_info.reward_2[this.state.block_info.trial_numb]*(this.state.block_info.position3[this.state.block_info.trial_numb] === "2") + 
            this.state.block_info.reward_3[this.state.block_info.trial_numb]*(this.state.block_info.position3[this.state.block_info.trial_numb] === "3") + 
            this.state.block_info.reward_4[this.state.block_info.trial_numb]*(this.state.block_info.position3[this.state.block_info.trial_numb] === "4") 
        
            chosen_symbol = 1*(this.state.block_info.position3[this.state.block_info.trial_numb] === "1") 
            + 2*(this.state.block_info.position3[this.state.block_info.trial_numb] === "2")
            + 3*(this.state.block_info.position3[this.state.block_info.trial_numb] === "3")
            + 4*(this.state.block_info.position3[this.state.block_info.trial_numb] === "4")

            // check with reward_upleft 
            chosen_r_check = this.state.block_info.reward_lowleft[this.state.block_info.trial_numb]
            position       = 'lowleft' 

        }
        else if (i==3){
            feedback[i] = this.state.block_info.reward_1[this.state.block_info.trial_numb]*(this.state.block_info.position4[this.state.block_info.trial_numb] === "1") + 
            this.state.block_info.reward_2[this.state.block_info.trial_numb]*(this.state.block_info.position4[this.state.block_info.trial_numb] === "2") + 
            this.state.block_info.reward_3[this.state.block_info.trial_numb]*(this.state.block_info.position4[this.state.block_info.trial_numb] === "3") + 
            this.state.block_info.reward_4[this.state.block_info.trial_numb]*(this.state.block_info.position4[this.state.block_info.trial_numb] === "4") 

            chosen_symbol = 1*(this.state.block_info.position4[this.state.block_info.trial_numb] === "1") 
            + 2*(this.state.block_info.position4[this.state.block_info.trial_numb] === "2")
            + 3*(this.state.block_info.position4[this.state.block_info.trial_numb] === "3")
            + 4*(this.state.block_info.position4[this.state.block_info.trial_numb] === "4")

            chosen_r_check = this.state.block_info.reward_lowright[this.state.block_info.trial_numb]
            position       = 'lowright' 

        }

    // complete feedback 
    if (this.state.block_info.block_feedback==="1") {
        noFeedback[idx]      = ''
        noFeedback[i]        = ''
        symbolHighlight[i]   = ''
        symbolHighlight[idx] = 'null'

      }
      else{  // partial feedback 
      
      // feedback  [idx]      = null // unchosen option this will work for the partial feedback
      noFeedback[idx]      = 'null'
      noFeedback[i]        = ''
      symbolHighlight[i]   = ''
      symbolHighlight[idx] = 'null'
    
    }
  
      console.log(feedback)

      this.setState({        
        feedback  : feedback,
        clickable : false,
        animation : false,
        noFeedback : noFeedback,
        symbolHighlight: symbolHighlight
      })


      console.log('Chosen symbol',chosen_symbol)

      if (chosen_symbol==1){
        chosen_r_th   = this.state.block_info.th_reward_1[this.state.block_info.trial_numb] 
        chosen_r      = this.state.block_info.reward_1[this.state.block_info.trial_numb] // this is redundant to feedback but to check that responses are the same 

        unchosen_r_th = [this.state.block_info.th_reward_2[this.state.block_info.trial_numb], 
        this.state.block_info.th_reward_3[this.state.block_info.trial_numb],
        this.state.block_info.th_reward_4[this.state.block_info.trial_numb]]

        unchosen_r    = [this.state.block_info.reward_2[this.state.block_info.trial_numb],
        this.state.block_info.reward_3[this.state.block_info.trial_numb],
        this.state.block_info.reward_4[this.state.block_info.trial_numb]]

      }
      else if (chosen_symbol==2){
        chosen_r_th   = this.state.block_info.th_reward_2[this.state.block_info.trial_numb] 
        chosen_r      = this.state.block_info.reward_2[this.state.block_info.trial_numb] // this is redundant to feedback but to check that responses are the same 


        unchosen_r_th = [this.state.block_info.th_reward_1[this.state.block_info.trial_numb], 
        this.state.block_info.th_reward_3[this.state.block_info.trial_numb],
        this.state.block_info.th_reward_4[this.state.block_info.trial_numb]]

        unchosen_r    = [this.state.block_info.reward_1[this.state.block_info.trial_numb],
        this.state.block_info.reward_3[this.state.block_info.trial_numb],
        this.state.block_info.reward_4[this.state.block_info.trial_numb]]

      }
      else if (chosen_symbol==3){

        chosen_r_th   = this.state.block_info.th_reward_3[this.state.block_info.trial_numb] 
        chosen_r      = this.state.block_info.reward_3[this.state.block_info.trial_numb] // this is redundant to feedback but to check that responses are the same 

        unchosen_r_th = [this.state.block_info.th_reward_1[this.state.block_info.trial_numb], 
        this.state.block_info.th_reward_2[this.state.block_info.trial_numb],
        this.state.block_info.th_reward_4[this.state.block_info.trial_numb]]

        unchosen_r    = [this.state.block_info.reward_1[this.state.block_info.trial_numb],
        this.state.block_info.reward_2[this.state.block_info.trial_numb],
        this.state.block_info.reward_4[this.state.block_info.trial_numb]]


      }
      else if (chosen_symbol==4){
        chosen_r_th   = this.state.block_info.th_reward_4[this.state.block_info.trial_numb] 
        chosen_r      = this.state.block_info.reward_4[this.state.block_info.trial_numb] // this is redundant to feedback but to check that responses are the same 

        unchosen_r_th = [this.state.block_info.th_reward_1[this.state.block_info.trial_numb], 
        this.state.block_info.th_reward_2[this.state.block_info.trial_numb],
        this.state.block_info.th_reward_3[this.state.block_info.trial_numb]]



        unchosen_r    = [this.state.block_info.reward_1[this.state.block_info.trial_numb],
        this.state.block_info.reward_2[this.state.block_info.trial_numb],
        this.state.block_info.reward_3[this.state.block_info.trial_numb]]



      }
      else{
        return null
      }

      // console.log('Chosen reward theoretical',chosen_r_th)
      // console.log('Unchosen reward theoretical',unchosen_r_th)

      // console.log('Chosen reward',chosen_r)
      // console.log('Chosen reward check',chosen_r_check)
      // console.log('Unchosen reward',unchosen_r)

      // console.log('Observed chosen feedback',feedback[i])
      // console.log('Observed unchosen feedback',feedback[idx])


      var array_unch = unchosen_r_th.map(Number)

      const sum_unch = array_unch.reduce((a, b) => a + b, 0)
       

      let block_perf = this.state.block_perf + ((chosen_r_th-(sum_unch/idx.length))/this.state.block_info.position1.length) 
      // console.log(block_perf)
      
      let reaction_times           = this.state.reaction_times;
      var date                     = new Date()
      let reaction_time            = date.getTime() - this.prev_reaction_time_date
      this.prev_reaction_time_date = date.getTime()


      // Add current trial info to the array 
      let chosen_rewards   = this.state.chosen_rewards; 
      let chosen_positions = this.state.chosen_positions;
      let chosen_symbols = this.state.chosen_symbols;
      let unchosen_rewards = this.state.unchosen_rewards; 

      chosen_rewards.push(feedback[i])
      chosen_symbols.push(chosen_symbol)  
      chosen_positions.push(position)
      unchosen_rewards.push(feedback[idx])
      reaction_times.push(reaction_time)

      this.setState({        
        chosen_positions : chosen_positions,
        chosen_symbols   : chosen_symbols,
        chosen_rewards   : chosen_rewards,
        unchosen_rewards : unchosen_rewards, 
        reaction_times   : reaction_times,
        block_perf       : block_perf 
      }) 

      // new symbols
      const current_symbols = this.state.current_symbols.slice();
      current_symbols[0]    = this.state.pool_symbols[this.state.block_info.position1[newcount] - 1]
      current_symbols[1]    = this.state.pool_symbols[this.state.block_info.position2[newcount] - 1]
      current_symbols[2]    = this.state.pool_symbols[this.state.block_info.position3[newcount] - 1]
      current_symbols[3]    = this.state.pool_symbols[this.state.block_info.position4[newcount] - 1]


      // start new block or update reset feedbacks for next trial (without mutation)
      if (end_of_block){
        setTimeout(() => this.redirectToBlock()
                , 1000);        
      }
      else {
        setTimeout(() => this.setState({
          clickable  : true,
          feedback   : Array(4).fill(null),
          noFeedback : Array(4).fill('null'),
          symbolHighlight: Array(4).fill('null'),
          animation  : true,
          block_info : {...this.state.block_info, trial_numb:newcount},
          current_symbols : current_symbols,        
        }), 1000);     
      }
    }
  }

  redirectToBlock ()

  // Compute the block relative performance: 

  {
    let block_id   = this.state.block_info.block_number

    var date_time_now = new Date().toLocaleString();

    // console.log(this.state.participant_info.game_id)
    
    let body     = {        'block_number'     : this.state.participant_info.block_number+1, 
                            'chosen_positions' : this.state.chosen_positions,
                            'chosen_symbols'   : this.state.chosen_symbols,
                            'chosen_rewards'   : this.state.chosen_rewards,
                            'unchosen_rewards' : this.state.unchosen_rewards,
                            'reaction_times'   : this.state.reaction_times,
                            'block_perf'       : this.state.block_perf,
                            'completed'        :'yes',
                            'date'             : this.state.participant_info.date,
                            'date_time'        : date_time_now, 
                            'game_id'          : this.state.participant_info.game_id}
    
    fetch(`${API_URL}/participants_data/create/` + this.state.participant_info.participant_id + `/` + block_id + `/` + this.state.participant_info.prolific_id, {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(body)
     })

    // Push data to the cash browser 
    // for each key in cashed object append the values
    var cashed_update = this.state.cashed
    // console.log('This state cash', this.state.cashed)
    if (Object.keys(cashed_update).length === 0 && cashed_update.constructor === Object || cashed_update === '' || cashed_update ===undefined) {
      // console.log('cash is empty: first session', this.state.cashed)
      
      const keys = ['block_number','chosen_positions','chosen_symbols','chosen_rewards', 
                    'unchosen_rewards',
                    'reaction_times',
                    'block_perf'] 
      
      for (const key of keys) {
        cashed_update[key] = [body[key]] // wrap into an array here 
      }

      // cashed_update = body
    }
    else {
    try {
      const keys = Object.keys(cashed_update)
      
      for (const key of keys) {
        
        let val  = cashed_update[key]
        let val2 = body[key]

        val.push(val2)
        cashed_update[key] = val
      }

    } catch (e) {
      // console.log('Failed to append')
      cashed_update = this.state.cashed
    }

    } 

    // Push new data to local storage 
    sessionStorage.setItem("cashed", JSON.stringify(cashed_update));

    this.props.history.push({
      pathname: `/BlockFourArm`,
      state: {participant_info:this.state.participant_info, newblock_frame : false}
    })    
  }


  render() {

    let status;
    return (
      <div> 
        <div  className="status">{status}</div>
        <div  className="allBricks">
        <Container>
          <Row>
            <Col>{this.renderBrick(0)}</Col>
            <Col>{this.renderBrick(1)}</Col>
            <Col>{this.renderBrick(2)}</Col>
            <Col>{this.renderBrick(3)}</Col>
          </Row>
        </Container>
        </div>
      </div>

        
      );
  }

}

export default withRouter(BoardFourArm);






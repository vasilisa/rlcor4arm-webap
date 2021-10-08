import React from 'react';
import './Board.css';
import Brick from '../Brick/Brick.js'
import { API_URL } from '../../config';
// import { handleResponse } from '../helpers';
import {withRouter} from 'react-router-dom';


class Board extends React.Component {
  constructor(props){
    super(props);

    const participant_info = this.props.location.state.participant_info
    const block_info       = this.props.location.state.block_info
    const pool_symbols     = this.props.location.state.pool_symbols

    // console.log(block_info)
    const current_symbols  = ['','']

    
    // Define intitial left and right symbols: 
    current_symbols[0]    = pool_symbols[block_info.position[0]-1] // 1 if on the right symbol 1, 0 if on the left 
    current_symbols[1]    = pool_symbols[2-block_info.position[0]] // 

    
    this.state = {
      clickable        : true, // freezing when subject has chosen a symbol
      animation        : true, // relaunch fading animation after each trial
      feedback         : Array(2).fill(null),
      noFeedback       : ['null', 'null'],
      symbolHighlight  : ['null', 'null'],
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
      <Brick
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

    // console.log(i) // 0 if the left brick clicked and 1 if the right one  
    // update symbol without Mutation
    const newcount     = this.state.block_info.trial_numb + 1
    const end_of_block = (newcount === this.state.block_info.TotalTrial ? true : false ) ? true : false 
    
    if (this.state.clickable) {

      const feedback        = this.state.feedback.slice();
      const noFeedback      = this.state.noFeedback.slice();
      const symbolHighlight = this.state.symbolHighlight.slice();
      
    // complete feedback 
    if (this.state.block_info.block_feedback==="2") {
        if (this.state.block_info.position[this.state.block_info.trial_numb] === "1") {
         // symbol 1 is on the left
          feedback[i]   = this.state.block_info.reward_1[this.state.block_info.trial_numb]*(i===0) + this.state.block_info.reward_2[this.state.block_info.trial_numb]*(i===1)
          feedback[1-i] = this.state.block_info.reward_2[this.state.block_info.trial_numb]*(i===0) + this.state.block_info.reward_1[this.state.block_info.trial_numb]*(i===1)
        }
        else {

          // symbol 1 is on the right 
          feedback[i]   = this.state.block_info.reward_1[this.state.block_info.trial_numb]*(i===1) + this.state.block_info.reward_2[this.state.block_info.trial_numb]*(i===0)
          feedback[1-i] = this.state.block_info.reward_2[this.state.block_info.trial_numb]*(i===1) + this.state.block_info.reward_1[this.state.block_info.trial_numb]*(i===0)
       
        }

        noFeedback[1 - i]    = ''
        noFeedback[i]        = ''
        symbolHighlight[i]   = ''
        symbolHighlight[1-i] = 'null'

      }
      else  // partial feedback 
      {
        if (this.state.block_info.position[this.state.block_info.trial_numb] === "1") {

          feedback[i]   = this.state.block_info.reward_1[this.state.block_info.trial_numb]*(i===0) + this.state.block_info.reward_2[this.state.block_info.trial_numb]*(i===1)
       
        }
        else {
          feedback[i]   = this.state.block_info.reward_1[this.state.block_info.trial_numb]*(i===1) + this.state.block_info.reward_2[this.state.block_info.trial_numb]*(i===0)
          
        }

      feedback[1 - i]      = null // unchosen option this will work for the partial feedback
      noFeedback[1 - i]    = 'null'
      noFeedback[i]        = ''
      symbolHighlight[i]   = ''
      symbolHighlight[1-i] = 'null'
    
    }
  
      this.setState({        
        feedback  : feedback,
        clickable : false,
        animation : false,
        noFeedback : noFeedback,
        symbolHighlight: symbolHighlight
      })

    
      // save information
      let position         = (i === 0) ? 'left' : 'right'; 
      let chosen_positions = this.state.chosen_positions;
      chosen_positions.push(position)

      // chosen_symbol :  
      let chosen_symbols = this.state.chosen_symbols;
      if (this.state.block_info.position[this.state.block_info.trial_numb] === "1" & (i === 0)) {
          var chosen_symbol = 1
        }
      else if (this.state.block_info.position[this.state.block_info.trial_numb] === "2" & (i === 1)) {
          var chosen_symbol = 1
        }
      else {
        var chosen_symbol = 2
      }

      // THIS IS TO BE MOVED BELOW 
      chosen_symbols.push(chosen_symbol)  
      // console.log('Chosen_symbol',chosen_symbols)

      const chosen_r_th   = chosen_symbol===1 ? this.state.block_info.th_reward_1[this.state.block_info.trial_numb] : this.state.block_info.th_reward_2[this.state.block_info.trial_numb];
      const unchosen_r_th = chosen_symbol===1 ? this.state.block_info.th_reward_2[this.state.block_info.trial_numb] : this.state.block_info.th_reward_1[this.state.block_info.trial_numb];
      
      
      const chosen_r   = chosen_symbol===1 ? this.state.block_info.reward_1[this.state.block_info.trial_numb] : this.state.block_info.reward_2[this.state.block_info.trial_numb];
      const unchosen_r = chosen_symbol===1 ? this.state.block_info.reward_2[this.state.block_info.trial_numb] : this.state.block_info.reward_1[this.state.block_info.trial_numb];
      
      // console.log('Chosen reward theoretical',chosen_r_th)
      // console.log('Unchosen reward theoretical',unchosen_r_th)

      // console.log('Chosen reward',chosen_r)
      // console.log('Unchosen reward',unchosen_r)

      // console.log('Observed chosen feedback',feedback[i])
      // console.log('Observed unchosen feedback',feedback[1-i])
      
      let block_perf = this.state.block_perf + ((chosen_r_th-unchosen_r_th)/this.state.block_info.position.length) 

      let reaction_times           = this.state.reaction_times;
      var date                     = new Date()
      let reaction_time            = date.getTime() - this.prev_reaction_time_date
      this.prev_reaction_time_date = date.getTime()
      reaction_times.push(reaction_time)

      let chosen_rewards   = this.state.chosen_rewards; 
      chosen_rewards.push(feedback[i])

      let unchosen_rewards = this.state.unchosen_rewards; 
      unchosen_rewards.push(feedback[1-i])

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
      current_symbols[0]    = this.state.pool_symbols[this.state.block_info.position[newcount] - 1]
      current_symbols[1]    = this.state.pool_symbols[2-this.state.block_info.position[newcount]]


      // start new block or update reset feedbacks for next trial (without mutation)
      if (end_of_block){
        setTimeout(() => this.redirectToBlock()
                , 1000);        
      }
      else {
        setTimeout(() => this.setState({
          clickable  : true,
          feedback   : Array(2).fill(null),
          noFeedback : Array(2).fill('null'),
          symbolHighlight: Array(2).fill('null'),
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
                            'date_time'        : this.state.participant_info.date_time, 
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
      pathname: `/Block`,
      state: {participant_info:this.state.participant_info, newblock_frame : false}
    })    
  }

  render() {

    let status;
    return (
      <div> 
        <div  className="status">{status}</div>
        <div  className="allBricks">
        <span className='brick1'>  {this.renderBrick(0)} </span>
        <span className='brick2'>  {this.renderBrick(1)} </span>
        </div>
      </div>
          );
  }
}

export default withRouter(Board);







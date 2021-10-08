import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


function Score(props) {

 console.log(props.score) 
 let text 
    
      if (props.score==='2.0') {

        text = <div className='SurveyIntroText'>
                <p><span className = "bold">Impressive!</span> You won a bonus of <span className = "bold">2.0 &#163;</span> in addition to your regular payment!</p>
                <p><span className = "bold">Note</span>, that you will only get your bonus if you complete the final survey!</p>
                </div>
      
      return (
        <div>
        <center> 
        <div className="instructionsButtonContainer">
          <div>
            {text}           
          </div> 
            <center>
            <Button className="buttonStart" onClick={()=>props.onClicked()}>
            START
            </Button>
            </center>
          </div>
          </center>
          </div>);
      }
      else if (props.score==='1.0') {

        text = <div className='SurveyIntroText'>
                <p><span className = "bold">Well done!</span> You won a bonus of <span className = "bold">1.0 &#163;</span> in addition to your regular payment!</p>
                <p> Note, that you will only get your bonus if you complete the final survey.</p>
                </div>
      
      
        return (
        <div>
        <center> 
        <div className="instructionsButtonContainer">
          <div>
            {text}           
          </div> 
            <center>
            <Button className="buttonInstructionStart" onClick={()=>props.onClicked()}>
            START
            </Button>
            </center>
          </div>
          </center>
          </div>);
    }
      else {

        text = <div className='SurveyIntroText'>
                <p><span className = "bold">Unfortunately</span>, you did not win a bonus this time. Please, click FINISH to complete the study.</p>
                </div>

        return (
        <div>
        <center> 
        <div className="instructionsButtonContainer">
          <div>
            {text}           
          </div> 
            <center>
            <Button className="buttonInstructionStart" onClick={()=>props.onClicked()}>
            <span className = "bold">FINISH</span>
            </Button>
            </center>
          </div>
          </center>
          </div>);
      }
  }

Score.propTypes = {
  score: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired
};

export default Score;


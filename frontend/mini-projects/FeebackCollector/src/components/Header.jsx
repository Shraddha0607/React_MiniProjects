import {useContext} from 'react'
import { FeedbackContext } from '../store/FeedbackContext'
import UserProgressContext from '../store/UserProgressContext';

function Header() {
    const feedbackCtx = useContext(FeedbackContext);
    // const userProgressCtx = useContext(UserProgressContext);

    // console.log(userProgressCtx, " is the user progress form");

  return (
    <header>
      {/* <h1> Welcome in feedback journey.</h1> */}
      <button  >Give Feedback</button>
      <button onClick={feedbackCtx.addFeedback} >Add</button>
      <button onClick={feedbackCtx.removeFeedback} >Remove</button>
    </header>
  )
}

export default Header

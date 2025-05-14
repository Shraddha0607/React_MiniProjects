import {useContext} from 'react'
import { FeedbackContext } from '../store/FeedbackContext'
import UserProgressContext from '../store/UserProgressContext';

function Header() {
    const feedbackCtx = useContext(FeedbackContext);
    const userProgressCtx = useContext(UserProgressContext);


    function handleOpenForm () {
      userProgressCtx.openForm();
    }

  return (
    <header>
      <button onClick={handleOpenForm} >Give Feedback</button>
    </header>
  )
}

export default Header

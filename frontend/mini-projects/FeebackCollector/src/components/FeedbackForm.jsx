import React, { useContext, useRef } from 'react'
import Modal from './Modal'
import UserProgressContext from '../store/UserProgressContext'
import Input from './UI/Input';
import { FeedbackContext } from '../store/FeedbackContext';

function FeedbackForm() {

  const feedbackCtx = useContext(FeedbackContext);
  const userProgressCtx = useContext(UserProgressContext);
  // console.log("Feedback form rendered ", userProgressCtx);

  function closeHandler() {
    console.log("close");
    userProgressCtx.closeForm();
  }

  function submitHandler (event) {
    event.preventDefault();

    const formData = new FormData (event.target);
    const feedbackData = Object.fromEntries(formData.entries());
    feedbackCtx.addFeedback(feedbackData);
  }  
  
  return (
    <>
    <Modal open={userProgressCtx.progress === 'form'}>
      <form onSubmit={submitHandler} >
        <h2>Feedback Form</h2>
        <Input label="Your Response" type="text" id="response" />

        <Input label="Rating" type="number" id="rating" />
        <p>
          <button>Submit</button>
          <button type='button' onClick={closeHandler}>Close</button>
        </p>
        
      </form>
    </Modal>
    </>
    
  )
}

export default FeedbackForm

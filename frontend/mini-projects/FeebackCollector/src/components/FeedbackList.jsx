import React, { useContext } from 'react'
import { FeedbackContext } from '../store/FeedbackContext'

function FeedbackList() {
    const feedbackCtx = useContext(FeedbackContext);

    return (
        <div>
            <h2>All Feedbacks</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Feedback</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbackCtx.feedbacks.map((feedback) => (
                        <tr key={feedback.id}>
                            <td>{feedback.id}</td>
                            <td>{feedback.response}</td>
                            <td>{feedback.rating}</td>
                            <td><button onClick={() => feedbackCtx.removeFeedback(feedback.id)} >Remove</button></td>
                        </tr>
                    ))}
                </tbody>


            </table>

        </div>
    )
}

export default FeedbackList

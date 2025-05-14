import { createContext, useReducer } from "react";
import { addFeedback , getFeedbacks, removeFeedback } from "../sevices/feedbackService";

export const FeedbackContext = createContext({
    feedbacks: [],
    addFeedback: () => {},
    removeFeedback: () => {}
});

function feedbackReducer(state, action) {
    if (action.type === 'add') {
       const updatedList = addFeedback(action.feedback);
        return { feedbacks : updatedList };

    }

    if (action.type === 'remove') {
        const updatedList = removeFeedback(action.id);
        console.log("remove feedback");
         return { feedbacks : updatedList };
    }

    return state;
}

export default function FeedbackContextProvider({ children }) {

    const [feedbackState, dispatchFeedbackAction] = useReducer(feedbackReducer, { feedbacks: getFeedbacks() });

    function addFeedback(feedback) {
        dispatchFeedbackAction({ type: 'add', feedback: feedback });
    }

    function removeFeedback(id) {
        dispatchFeedbackAction({ type: 'remove' , id});
    }

    const feedbackCxt = {
        feedbacks: feedbackState.feedbacks,
        addFeedback,
        removeFeedback
    }

    return (
        <FeedbackContext.Provider value={feedbackCxt}>
            {children}
        </FeedbackContext.Provider>
    )
}
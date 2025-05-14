import { createContext, useReducer } from "react";

export const FeedbackContext = createContext({
    feedbacks: [],
    addFeedback: () => { },
    removeFeedback: () => { }
});

function feedbackReducer(state, action) {
    if (action.type === 'add') {
        console.log("add feedback");
    }

    if (action.type === 'remove') {
        console.log("remove feedback");
    }
}

export default function FeedbackContextProvider({ children }) {

    const [feedbackState, dispatchFeedbackAction] = useReducer(feedbackReducer, { feedbacks: [] });

    function addFeedback() {
        dispatchFeedbackAction({ type: 'add' });
    }

    function removeFeedback() {
        dispatchFeedbackAction({ type: 'remove' });
    }

    const feedbackCxt = {
        feedbacks: ["Kaju", "Badam"],
        addFeedback,
        removeFeedback
    }

    return (
        <FeedbackContext.Provider value={feedbackCxt}>
            {children}
        </FeedbackContext.Provider>
    )
}
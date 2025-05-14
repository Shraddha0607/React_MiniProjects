const KEY = "feedbackApp";

export function getFeedbacks() {
    const stored = localStorage.getItem(KEY);
    return stored ? JSON.parse(stored) : [];
}

export function addFeedback(feedback) {

    const existing = getFeedbacks();
    const newFeedback = {
        id: Date.now(),
        ...feedback
    };
    const updated = [...existing, newFeedback];
    localStorage.setItem(KEY, JSON.stringify(updated));
    return updated;
}

export function removeFeedback(id) {
    const existing = getFeedbacks();
    const updated = existing.filter(fb => fb.id != id);
    localStorage.setItem(KEY, JSON.stringify(updated));
    return updated;

}
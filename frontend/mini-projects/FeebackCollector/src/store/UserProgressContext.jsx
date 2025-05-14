import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress : "",
    openForm : () => {},
    closeForm : () => {}
});

export function UserProgressContextProvider ({children}) {
    const [userProgress, setUserProgress] = useState('');

    function openForm () {
        setUserProgress("form")
    }

    function closeForm () {
        setUserProgress("");
        console.log("close modal form from which giving feedback. ");
    }

    const userProgressCtx = {
        progress : userProgress,
        openForm,
        closeForm
    };

    return (
        <UserProgressContext.Provider value = {userProgressCtx} >
            {children}
        </UserProgressContext.Provider>
    )
}

export default UserProgressContext;
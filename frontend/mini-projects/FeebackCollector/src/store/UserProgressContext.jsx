import { createContext } from "react";

const UserProgressContext = createContext({
    progress : "",
    openForm : () => {},
    closeForm : () => {}
});

export function UserProgressContextProvider ({children}) {

    function openForm () {
        console.log("open modal form to give feedback.");
    }

    function closeForm () {
        console.log("close modal form from which giving feedback. ");
    }

    const userProgressCtx = {
        progress : "",
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
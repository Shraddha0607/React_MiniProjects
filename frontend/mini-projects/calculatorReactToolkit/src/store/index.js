import { createStore } from 'redux'

const reducerFunction = (state = { result :  "" }, action) => {
    let firstValue ;
    let secondValue ;

    if(action.input){
        firstValue = action.input.firstValue;
        secondValue = action.input.secondValue;
    }
    

    if(action.type === 'add' ){
        return {
            result : firstValue + secondValue
        }
    }

    if(action.type === 'substract') {
        return {
            result : firstValue - secondValue
        }
    }

    if(action.type === 'multiply') {
        return {
            result : firstValue * secondValue
        }
    }

    if(action.type === 'divide') {
        return {
            result : firstValue / secondValue
        }
    }

    return state;
}
const store = createStore(reducerFunction);

export default store;
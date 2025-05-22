import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux"

function InputSection() {
    const result = useSelector(state => state.result);
    const dispatch = useDispatch();
    
    const firstNumber = useRef();
    const secondNumber = useRef();

    function addHandler() {
        const firstValue = parseInt(firstNumber.current.value);
        const secondValue = parseInt(secondNumber.current.value);
        dispatch({type : 'add', input : {
            firstValue,
            secondValue
        }
        });
    }

    function substractHandler () {
        const firstValue = parseInt(firstNumber.current.value);
        const secondValue = parseInt(secondNumber.current.value);

        dispatch({type : 'substract', input: {
            firstValue,
            secondValue
        }});
    }

     function multiplyHandler () {
        const firstValue = parseInt(firstNumber.current.value);
        const secondValue = parseInt(secondNumber.current.value);

        dispatch({type : 'multiply', input: {
            firstValue,
            secondValue
        }});
    }

     function divideHandler () {
        const firstValue = parseInt(firstNumber.current.value);
        const secondValue = parseInt(secondNumber.current.value);

        dispatch({type : 'divide', input: {
            firstValue,
            secondValue
        }});
    }

  return (
    <div>
      <h2>Standard :</h2>
      <p> Calculate value:  <span>{result}</span></p>
      <div>
        <label>Enter first number:  </label>
        <input ref ={firstNumber} type="number"/>
      </div>
      <div>
        <label>Enter second number:  </label>
        <input ref ={secondNumber} type="number"/>
      </div>
      <br/>
      
      <div>
        <button onClick={addHandler}>Add</button>
        <button onClick={substractHandler}>Substract</button>
        <button onClick={multiplyHandler}>Multiply</button>
        <button onClick={divideHandler}>Divide</button>
      </div>
    </div>
  )
}

export default InputSection

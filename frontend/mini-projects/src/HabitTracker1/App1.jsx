import { useState, useRef, useEffect } from 'react'
import '../App.css'
import './App1.css'
import Tracker1 from './Tracker1';
import { allHabits } from './data1.js';

function App1() {
    const [habits, setHabits] = useState(allHabits);
    const habit = useRef();
    const [theme, setTheme] = useState("light");
    //   console.log(allHabits);

    useEffect(() =>{
        localStorage.setItem('habits', JSON.stringify(habits));
    }, [habits]);

    function addHandler() {
        const newHabit = habit.current.value;
        setHabits(prevState => [...prevState, { name: newHabit, id: Math.random() * 1000 }]);
    }

    function themeToggle() {
        setTheme(theme === 'light' ? 'dark' : 'light');
        console.log("theme now")
    }

    const themeClass = theme === 'dark' ? ' dark' : '';
    const themeButton = theme === 'light' ? 'Dark mode' : 'Light mode';
    return (
        <div className={`app ${themeClass}`}>

                <button onClick={themeToggle}>
                    {themeButton}
                </button>
                <div className='container border'>
                    <Tracker1 habits={habits}/>
                </div>

                <section className='container border'>
                    <h2>Add Habit</h2>
                    <div className='flex flex-column'>
                        <input ref={habit} className='mx-2'></input>
                        <button onClick={addHandler} className='btn btn-primary'>+Add</button>
                    </div>
                </section>
                <div className='container border'>
                    <h2> Habits checklist</h2>
                    {habits.map((habit) => (
                        <p key={habit.id}>{habit.name}</p>
                    )
                    )}
                </div>

        </div>
    )
}

export default App1

import { useEffect, useState } from "react";

function DailyTracker({ date }) {
    const [checkedHabits, setCheckedHabits] = useState([]);
    const [habits, setHabits] = useState([]);
    const [percentDone, setPercentageDone] = useState(0);

    useEffect(() => {
        const allHabits = localStorage.getItem("habits");
        setHabits(JSON.parse(allHabits));
    }, []);

    useEffect(() => {
        const checkHabitsInLocal = localStorage.getItem(date);
        const data = JSON.parse(checkHabitsInLocal);
        {(data === null) ? setCheckedHabits([]) : setCheckedHabits(data) }
        
    }, [date]);

    useEffect(() => {
        const percent = ((checkedHabits.length > 0 && habits.length > 0) ? Math.ceil(checkedHabits.length *100  / habits.length) : 0);
        setPercentageDone(percent);
    }, [checkedHabits, habits]);
    

    function onSaveHandler() {
        localStorage.setItem(date, JSON.stringify(checkedHabits));
    }

    const handleCheckboxChange = (habitId) => (event) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            setCheckedHabits([...checkedHabits, habitId]);
        }
        else {
            setCheckedHabits(checkedHabits.filter((id) => id !== habitId));
        }
        console.log("habit checked with id ", habitId);
    };

    return (
        <div>
            <h2> Habits checklist for  {date}</h2>
            <progress value={percentDone} max="100" />
            {habits.map((habit) => (
                <p key={habit.id}>
                    <input type="checkbox" value={habit.name}
                        checked={ checkedHabits.includes(habit.id) }
                        onChange={handleCheckboxChange(habit.id)} />
                    {habit.name}
                </p>
            )
            )}
            <button onClick={onSaveHandler}>Save</button>
        </div>
    )
}

export default DailyTracker

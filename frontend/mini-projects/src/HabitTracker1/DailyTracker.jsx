import { useEffect, useState } from "react";

function DailyTracker({ date }) {
    const [checkedHabits, setCheckedHabits] = useState([]);
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        const allHabits = localStorage.getItem("habits");
        console.log("by fetching from local ", allHabits);
        setHabits(JSON.parse(allHabits));
    }, []);

    useEffect(() => {
        console.log("date for date wise habit fetching ", date);
        const checkHabitsInLocal = localStorage.getItem(date);
        console.log("all data for date wise habit fetching " ,checkHabitsInLocal);
        const data = JSON.parse(checkHabitsInLocal);
        {(data === null) ? setCheckedHabits([]) : setCheckedHabits(data) }
        
    }, [date]);

    function onSaveHandler() {
        localStorage.setItem(date, JSON.stringify(checkedHabits));
        console.log(`save clicked for ${date} tracker`);
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

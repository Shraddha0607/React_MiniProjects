import {useState} from 'react'
import Input from './UI/Input'
import Button from './UI/Button'

function UserForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password : '',
        gender: '',
        skills: [],
        country: '',
    });

    const [gender, setGender] = useState("");

    function handleChange(event) {
        const {name, type, value, checked} = event.target;
        console.log("onchange ,", name, " ", value );
        
        if(type === 'checkbox'){
            setFormData((prev) => ({
                ...prev,
                skills : checked ? [...prev.skills, value] :
                prev.skills.filter((skill) => skill !== value),
            }));
        }
        else{
            setFormData((prev) => ({
                ...prev,
                [name] : value,
            }));
        };
    }
    
    function submitHandler (event) {
        event.preventDefault();
        console.log("I am submit", formData);
    }
    return (
        <form onSubmit={submitHandler}>
            <Input label="Name" type="text" name="name" value={formData.name} onChange={handleChange}/>
            <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
            <Input label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
            <div>
                <label> Gender: </label>
                <label>
                    <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={handleChange}/>
                    Male
                </label>
                <label>
                    <input type="radio" name="Female" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} />
                    Female
                </label>
            </div>

            <div>
                <label>Skills : </label>
                <label>
                    <input type='checkbox' name='skills' value='C#' onChange={handleChange} />
                    C#
                </label>
                <label>
                    <input type='checkbox' name='skills' value='Java' onChange={handleChange} />
                    Java
                </label>
                <label>
                    <input type='checkbox' name='skills' value='React' onChange={handleChange} />
                    React
                </label>
            </div>

            <div>
                <label>Country : </label>
                <select name='country' value={formData.country} onChange={handleChange}>
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="US">US</option>
                    <option value="Nepal">Nepal</option>
                    <option value="UK">UK</option>
                </select>
            </div>
            <Button name="Submit" />
        </form>
    )
}

export default UserForm

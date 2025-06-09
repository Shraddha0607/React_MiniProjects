const key = "userForm";


export const getDetails = () => {   
    const existingUser = localStorage.getItem(key);
    return JSON.parse(existingUser);
}

export const saveDetails = () => {
    const user = [{id: 1, name : "Sid", email: "sid@gmail.com", password: 'sid@123', gender: 'male', skills : ['C#', '.NET', 'Java', 'Springboot'], country: 'India'}];
    localStorage.setItem(key, JSON.stringify(user));

}

export const deleteDetails = () => {

}

export const updateDetails = () => {

}

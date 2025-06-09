import './App.css'
import UserForm from './components/UserForm';
import UserList from './components/UserList'
import {getDetails, saveDetails} from './services/UserServices'

function App() {

  saveDetails();

  const users = getDetails();

  return (
   <>
   <h1>User Registration Form</h1>
   <UserForm />
   <UserList users = {users}/>
   </>
  )
}

export default App

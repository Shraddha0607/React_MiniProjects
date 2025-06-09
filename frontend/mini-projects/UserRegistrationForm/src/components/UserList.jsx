import React from 'react'

function UserList({users}) {
  return (
    <>
    <div>
        <h2>Registered User List</h2>
    </div>
    <div>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Gender</th>
                <th>Skills</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <tr key={user.name}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.gender}</td>
                    <td>
                      {user.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </td>
                    <td>{user.country}</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
    </>
    
  )
}

export default UserList

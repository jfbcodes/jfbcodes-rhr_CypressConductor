import React, {useState, useEffect} from 'react';


const UserLoader = () => {
  const [usersLoaded, setUsersLoaded] = useState(false)

  const loadUsers = (event) => {
    console.log("loadusers was called", event)
    fetch("https://localhost:8000")
      .then(response => response.toJson())
      .then()

  }

  return (
    <>
      { !usersLoaded && "No users have been laoded yet..."}
      <br />
      <button onClick={loadUsers} value={"Load Users"} >Load Users</button>

    </>
  )
}

export default UserLoader;
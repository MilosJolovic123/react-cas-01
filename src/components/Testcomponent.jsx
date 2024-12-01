import React from 'react'

const Testcomponent = () => {
    function formatName(){
        return user.firstName + " " + user.lastName;
    }

    const user = {
        firstName: 'John',
        lastName: 'Smith'
    }

    const element = (
        <h1>
            Hello, {formatName(user)}!
        </h1>
    );

  return (
    <div>{element}</div>
  )
}

export default Testcomponent
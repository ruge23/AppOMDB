import React from 'react';

export default function LoginBox(){
  return(
    <div>
      <h1>Login</h1>
      <div>
      <form action ="/login" method='post'>

      <p><input
          type='email'
          name='username'
          placeholder='username'
        /></p>
        <p><input
          type='password'
          name='password'
          placeholder='password'
        /></p>
        <button>Login</button>
      </form>
      </div>
    </div>
  )
}

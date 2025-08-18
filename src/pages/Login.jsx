import React from 'react'

const Login = ({isClose}) => {
  return (
      <div>
          <h1>Login</h1>
          <form>
              <label htmlFor="email" id='email'>Email</label>
              <input type="email" placeholder='Email' />
              <label htmlFor="password" id='password'>Password</label>
              <input type="password" placeholder='Password' />
              <button>Submit</button>
          </form>
          <button onClick={() => { 
                console.log("Clicked"); 
                isClose();
            }}>
            Close
        </button>

    </div>
  )
}

export default Login

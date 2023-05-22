import React, { useEffect } from "react";
import './sign.css'

import { useGlobalLogin } from "../../contexts/login-context";
import { useNavigate } from "react-router-dom";



export default function Sign() {

  const { input, setInput, dummyData, loginAction, userToken } = useGlobalLogin()

  const navigate = useNavigate()

  useEffect(() => {
    if (userToken) {
      navigate('/');
    }
  }, [userToken])


  const setDummyData = (event) => {
    event.preventDefault();
    setInput(dummyData)
  }

  const setInputUsername = (event) => {
    setInput((prev) => ({ ...prev, email: event.target.value }))
  }

  const setInputPassword = (event) => {
    setInput((prev) => ({ ...prev, password: event.target.value }))
  }


  return (
    <>
      <div className="form-container">
        <div className="form">
          <form action="">
            <label htmlFor="">Username</label>
            <input type="text" placeholder="Enter username" value={input.email} onChange={setInputUsername} />
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Enter password" value={input.password} onChange={setInputPassword} /><br />
            <h5>Forget Password <a href=""> -&gt;click here</a></h5><br />
            <button className="button-66" onClick={setDummyData}>Apply Dummy</button><br />
            <button className="button-66" onClick={loginAction}>Login</button><br />
            <h5>Create new acount <a href=""> -&gt;click here</a></h5><br /><br />

          </form>
        </div>
      </div>
    </>
  )

}








import React, { useState } from 'react';

function Login() {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', userData);
  };

  return (
    <div className="flex flex-col max-w-96 gap-4 m-12">
      <input placeholder="Username"
       className= "border"
       value={userData.username} onChange={e => setUserData({...userData, username: e.target.value})} />

      <input placeholder="Password"
       className= "border"
       type="password"
       value={userData.password} onChange={e => setUserData({...userData, password: e.target.value})} />

      <button type="submit" onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
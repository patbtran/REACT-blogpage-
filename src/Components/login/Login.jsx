import React, { useState } from 'react';

function Login() {
  const {} = useAuth();
  
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <div className="max-w-96 m-12">
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <input placeholder="Username"
       className= "border"
       value={userData.username} onChange={(e) => setUserData({...userData, username: e.target.value})} />

      <input placeholder="Password"
       className= "border"
       type="password"
       value={userData.password} onChange={(e) => setUserData({...userData, password: e.target.value})} />

      <button type="submit" className="bg-amber-400 w-fit px-8 py-2 rounded-2xl text-white" onClick={onSubmit}>Login</button>
      </form>
    </div>
  );
}

export default Login;
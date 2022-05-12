import React from 'react';
import { FC, useEffect, useState } from 'react';
import { authApi } from '../api/authApi';
import { useNavigate } from 'react-router-dom';
import { roleFunc } from '../utils/Roles';

const Login: FC<any> = ({ children }) => {
  // const { setEntityCode, setUserId, setStudentName, setIsLogged } =
  //   useContext(APPContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // check if already log-in with JWT
  useEffect(() => {
    console.log('checking ...');
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const data = await authApi.validateLoggedStatus();
    if (data !== null) {
      const role = roleFunc.getRole({ EC: data.entityCode });
      navigate(`/${role}/dashboard`, { replace: true });
    }
  };

  const handleLogin = async () => {
    const data = await authApi.login({ username, password });

    if (data.errMsg) {
      alert(data.errMsg);
      return;
    }

    if (!data.id) {
      alert('Data missing');
      return;
    }

    const role = roleFunc.getRole({ EC: data.entityCode });
    navigate(`/${role}/dashboard`, { replace: true });
  };

  const handleRegister = () => {
    console.log('Register');
  };

  return <div>Login</div>;
};

export default Login;

import { Divider, Form, Input } from 'antd';
import React, { useState } from 'react';
import { authApi } from '../api/authApi';
import { classApi } from '../api/classApi';
import { Button, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Class } from '../models/Class';
import './Login.css';

export const Register = () => {
  let navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const handleRegister = async () => {
    const id = (await authApi.register({
      fullname: fullname,
      username: username,
      password: password,
      gender: gender,
      mail: email,
    })) as number;

    if (id > 0) {
      openNotification();
    }
  };

  const openNotification = () => {
    notification.open({
      message: 'Create Account Success!',
      description:
        'Please move to sign-in section to start using our application.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
      placement: 'top',
    });
  };

  return (
    <>
      <h1
        className="signup__title"
        style={{ color: '#8172d5', marginLeft: '20px' }}
      >
        Create Account
      </h1>
      <div className="temp__form">
        <Form>
          <Form.Item>
            <label
              style={{ fontSize: 20, fontWeight: '700', color: '#8172d5' }}
            >
              Full name
            </label>
            <Input
              type="text"
              style={{
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                backgroundColor: '#F2F5F8',
              }}
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <label
              style={{ fontSize: 20, fontWeight: '700', color: '#8172d5' }}
            >
              Username
            </label>
            <Input
              type="text"
              style={{
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                backgroundColor: '#F2F5F8',
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <label
              style={{ fontSize: 20, fontWeight: '700', color: '#8172d5' }}
            >
              Password
            </label>
            <Input
              type="password"
              style={{
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                backgroundColor: '#F2F5F8',
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <label
              style={{ fontSize: 20, fontWeight: '700', color: '#8172d5' }}
            >
              Email
            </label>
            <Input
              type="email"
              style={{
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                backgroundColor: '#F2F5F8',
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <label
              style={{ fontSize: 20, fontWeight: '700', color: '#8172d5' }}
            >
              Gender
            </label>
            <Input
              type="gender"
              style={{
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                backgroundColor: '#F2F5F8',
              }}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <button
              onClick={handleRegister}
              className="login__button login__login"
              style={{
                width: '100%',
                height: '50px',
                borderRadius: '32px',
                paddingTop: '4px',
                border: '2px solid #8172d5',
                paddingBottom: '4px',
                lineHeight: '14px',
                fontSize: '20px',
              }}
            >
              Create Account
            </button>
          </Form.Item>
          <Divider>Or</Divider>
          <Form.Item>
            <button
              className="login__create login__button"
              onClick={() => navigate('/login')}
              style={{
                width: '100%',
                height: '40px',
                borderRadius: '32px',
                border: '2px solid #8172d5',
                paddingTop: '4px',
                paddingBottom: '4px',
                lineHeight: '14px',
              }}
            >
              SIGN IN
            </button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

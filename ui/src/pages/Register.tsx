import { Divider, Form, Input, Popover } from 'antd';
import React from 'react';
import './Login.css';
import { InfoCircleOutlined } from '@ant-design/icons';

export const Register = () => {
  return (
    <>
      <h1 className="login__title">Create Account</h1>
      <div className="temp__form">
        <Form>
          <Form.Item>
            <label style={{ fontWeight: '700', color: 'black' }}>
              Full name
            </label>
            <Input
              type="text"
              style={{
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
              }}
            />
          </Form.Item>
          <Form.Item>
            <label style={{ fontWeight: '700', color: 'black' }}>
              Username
            </label>
            <Input
              type="text"
              style={{
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
              }}
            />
          </Form.Item>
          <Form.Item>
            <label style={{ fontWeight: '700', color: 'black' }}>
              Password
            </label>
            <Input
              type="text"
              style={{
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
              }}
            />
          </Form.Item>
          <Form.Item>
            <label style={{ fontWeight: '700', color: 'black' }}>Email</label>
            <Input
              type="email"
              style={{
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
              }}
            />
          </Form.Item>
          <Form.Item>
            <label style={{ fontWeight: '700', color: 'black' }}>Gender</label>
            <Input
              type="gender"
              style={{
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
              }}
            />
          </Form.Item>
          <Form.Item>
            <button
              onClick={() => false}
              className="login__button login__login"
              style={{
                width: '100%',
                height: '40px',
                borderRadius: '32px',
                paddingTop: '4px',
                paddingBottom: '4px',
                lineHeight: '14px',
                color: 'white',
              }}
            >
              CREATE ACCOUNT
            </button>
          </Form.Item>
          <Divider>Or</Divider>
          <Form.Item>
            <button
              className="login__create login__button"
              onClick={() => false}
              style={{
                width: '100%',
                height: '40px',
                borderRadius: '32px',
                border: '3px solid #181b21',
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

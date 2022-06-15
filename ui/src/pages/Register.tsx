import { Divider, Form, Input, Popover } from 'antd';
import React from 'react';
import './Login.css';
import { InfoCircleOutlined } from '@ant-design/icons';

export const Register = () => {
  return (
    <>
      <h1
        className="login__title"
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
                padding: '10px',
                backgroundColor: '#F2F5F8',
              }}
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
                padding: '10px',
                backgroundColor: '#F2F5F8',
              }}
            />
          </Form.Item>
          <Form.Item>
            <label
              style={{ fontSize: 20, fontWeight: '700', color: '#8172d5' }}
            >
              Password
            </label>
            <Input
              type="text"
              style={{
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                padding: '10px',
                backgroundColor: '#F2F5F8',
              }}
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
                padding: '10px',
                backgroundColor: '#F2F5F8',
              }}
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
                padding: '10px',
                backgroundColor: '#F2F5F8',
              }}
            />
          </Form.Item>
          <Form.Item>
            <button
              onClick={() => false}
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
              onClick={() => false}
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

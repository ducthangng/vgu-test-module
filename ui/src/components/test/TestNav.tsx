import React from 'react';
import { Button, MenuProps } from 'antd';
import { Avatar, Menu } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

// interface

interface TestNavProps {
  fullName: string;
  profilePicture: string;
  studentId: string;
  testPart: string;
  submitTest: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function TestNav(props: TestNavProps) {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['mail']}
      style={{
        width: '200px',
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
        borderRadius: 5,
      }}
    >
      <div
        style={{
          lineHeight: '200%',
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Avatar
          size={55}
          icon={<AntDesignOutlined />}
          src={props.profilePicture}
        />
        <p style={{ paddingTop: 10 }}>{props.fullName}</p>
        <p className="text-primary">ID: {props.studentId}</p>

        <hr />

        <h3 className="font-bold mt-3">{props.testPart}</h3>
      </div>

      <Menu.Item key="mail">Navigation One</Menu.Item>
      <Menu.Item key="test">Navigation Two</Menu.Item>

      <div
        style={{
          lineHeight: '200%',
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Button
          type="primary"
          style={{
            borderRadius: 8,
            margin: 10,
            padding: 5,
            paddingLeft: 25,
            paddingRight: 25,
            fontWeight: 'bold',
          }}
          onClick={props.submitTest}
        >
          SUBMIT
        </Button>
      </div>
    </Menu>
  );
}

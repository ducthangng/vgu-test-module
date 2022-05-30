import React from 'react';
import { Button, MenuProps } from 'antd';
import { Avatar, Menu } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

// interface

interface TestNavProps {
  testType: string;
  submitTest: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function TestNav(props: TestNavProps) {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };
  return (
    <nav>
      <p>Part 1</p>
      <p>Part 2</p>
      <p>Part 3</p>
    </nav>
  );
}

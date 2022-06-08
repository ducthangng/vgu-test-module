import React from 'react';
import { Table, Button, Popconfirm } from 'antd';
// import { RouterComponentProps } from "react-router";

type Props = {
  name: string;
  Email: string;
  userId: number;
  action: React.ReactNode;
};

const UserTable: React.FC<Props> = () => {
  //GOTO: Call to delete user information from database
  const onDelete = (userId: number) => {
    console.log('Delete id: ', userId);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (userId: number) => (
        <Popconfirm
          title=" You want to delete this user?"
          onConfirm={() => onDelete(userId)}
        >
          <Button type="primary" icon="DeleteOutlined">
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div style={{ padding: 24, background: '#fff', minHeight: '360' }}>
      <span>
        <Table columns={columns}></Table>
      </span>
    </div>
  );
};

export default UserTable;

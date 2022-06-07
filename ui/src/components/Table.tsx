import React from 'react';
import { Table, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
// import { RouterComponentProps } from "react-router";

type Props = {};

type User = {
  name: string;
  Email: string;
  userId: number;
};

const DataTable: React.FC<Props> = () => {
  //GOTO: Call to delete user information from database
  const onDelete = (userId: number) => {
    console.log('Delete id: ', userId);
  };

  const dataSource = [
    {
      key: '1',
      name: 'Hai',
      Email: 'hai@gmail.com',
      userId: 1,
    },
    {
      key: '2',
      name: 'John',
      Email: 'john@gmail.com',
      userId: 2,
    },
    {
      key: '3',
      name: 'John',
      Email: 'john@gmail.com',
      userId: 3,
    },
  ];

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
      dataIndex: 'userID',
      key: 'userID',
    },
    /*
    {
      title: "Action",
      key: "action",
      render: (action: any , record: User) => (
        return (
          <>
          <Button type="primary"
                  icon="delete"
                  onClick={() => onDelete()}>
            Delete 
          </Button>
          </>
        )
      ),
    },
*/
  ];

  return (
    <div style={{ padding: 24, background: '#fff', minHeight: '360' }}>
      <span>
        <Table dataSource={dataSource} columns={columns}>
          ;
        </Table>
      </span>
    </div>
  );
};

export default DataTable;

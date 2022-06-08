import React from 'react';
import UserTable from '../components/UserTable';
import { Divider, Row } from 'antd';
import { Pagination } from 'antd';

const defaultData = [
  {
    key: '1',
    name: 'Hai',
    Email: 'hai@gmail.com',
    userId: 1,
    action: 'action',
  },
  {
    key: '2',
    name: 'John',
    Email: 'john@gmail.com',
    userId: 2,
    action: 'action',
  },
  {
    key: '3',
    name: 'John',
    Email: 'john@gmail.com',
    userId: 3,
  },
];

function AdminManagement() {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <body>
        <Divider orientation="left"> User Management </Divider>
        <Row gutter={[20, 20]} justify="space-around">
          {defaultData.map((items) => {
            return (
              <UserTable
                key={items.key}
                name={items.name}
                Email={items.Email}
                userId={items.userId}
                action={items.action}
              />
            );
          })}
        </Row>
        <br></br>
        <Row justify="center">
          <Pagination
            defaultCurrent={1}
            total={50}
            style={{ color: '#8172D5' }}
          />
        </Row>
      </body>
    </div>
  );
}

export default AdminManagement;

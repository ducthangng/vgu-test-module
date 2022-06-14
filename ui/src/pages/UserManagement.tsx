import React from 'react';
import { Routes as useHistory } from 'react-router-dom';

// import library from antd
import { Divider, Row, Button } from 'antd';
import { Pagination } from 'antd';

// import Component from components
import UserTable from '../components/UserTable';

function AdminManagement() {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <body>
        <Divider
          orientation="right"
          style={{ fontSize: '20px', fontFamily: 'Roboto' }}
        >
          <Button type="primary"> Test Information </Button>
        </Divider>

        <Divider
          orientation="left"
          style={{ fontSize: '26px', fontFamily: 'Roboto' }}
        >
          User Management
        </Divider>
        <UserTable
          name={''}
          Email={''}
          userId={0}
          action={undefined}
        ></UserTable>

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

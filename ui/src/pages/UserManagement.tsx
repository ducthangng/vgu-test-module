import React from 'react';

// import library from antd
import { Divider, Row, Button } from 'antd';
import { Pagination } from 'antd';

// import Component from components
import UserTable from '../components/UserTable';

function AdminManagement() {
  return (
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
      <UserTable />

      <br></br>
      <Row justify="center">
        <Pagination
          defaultCurrent={1}
          total={50}
          style={{ color: '#8172D5' }}
        />
      </Row>
    </body>
  );
}

export default AdminManagement;

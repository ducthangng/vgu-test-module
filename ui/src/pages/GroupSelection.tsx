import React from 'react';
import GroupCard from '../components/GroupCard';
import { Row, Col, Divider } from 'antd';
import { Pagination } from 'antd';

function GroupSelection() {
  return (
    <div style={{ backgroundColor: '#F2F5F8' }}>
      <Divider orientation="left">Choose the class</Divider>
      <Row gutter={[16, 24]} justify="center">
        <Col>
          <GroupCard />
        </Col>
        <Col>
          <GroupCard />
        </Col>
        <Pagination
          defaultCurrent={1}
          total={50}
          style={{ color: '#8172D5' }}
        />
      </Row>
    </div>
  );
}

export default GroupSelection;

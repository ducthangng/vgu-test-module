import React from 'react';
import MockTest from '../components/MockTest';
import { Row, Col, Divider } from 'antd';
import { Pagination } from 'antd';

function SelectGroupPage() {
  return (
    <>
      <Divider orientation="left">Choose the topic</Divider>
      <Row gutter={[16, 24]} justify="center">
        <Col>
          <MockTest />
        </Col>
        <Col>
          <MockTest />
        </Col>
        <Col>
          <MockTest />
        </Col>
        <Col>
          <MockTest />
        </Col>
        <Col>
          <MockTest />
        </Col>
        <Col>
          <MockTest />
        </Col>
        <Col>
          <MockTest />
        </Col>
        <Col>
          <MockTest />
        </Col>
      </Row>

      <Row justify="center">
        <Pagination
          defaultCurrent={1}
          total={50}
          style={{ color: '#8172D5' }}
        />
      </Row>
    </>
  );
}

export default SelectGroupPage;

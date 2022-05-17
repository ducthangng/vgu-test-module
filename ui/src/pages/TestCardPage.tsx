import React from 'react';
import TestCard from "../components/TestCard";
import {Row, Col, Divider} from 'antd';
import { Pagination } from 'antd';


function TestCardPage() {
  return (
    <>
    <Divider orientation="left">Choose the topic</Divider>
    <Row gutter={[16,24]} justify="center" >
        <Col>
            <TestCard />
        </Col>
        <Col >
            <TestCard />
        </Col>
        <Col >
            <TestCard />
        </Col>
    </Row>
    <Row gutter={[16,24]} justify="center" >
        <Col>
            <TestCard />
        </Col>
        <Col >
            <TestCard />
        </Col>
        <Col >
            <TestCard />
        </Col>
    </Row>
    <Row gutter={[16,24]} justify="center" >
    <Pagination defaultCurrent={1} total={50} style={{color: '#8172D5'}}/>
    </Row>
    
    
    </>
  );
}

export default TestCardPage;

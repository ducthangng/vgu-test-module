import React from 'react';
import TestCard from "../components/TestCard";
import {Row, Col, Divider} from 'antd';
import { Pagination } from 'antd';


function TestCardPage() {
  return (
    <>
    <body style = {{ background: "#F2F5F8"}}>
    <Divider orientation="left">Choose the test</Divider>
    <Row gutter={[20,20]} justify="center" >
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
    <p></p>
    <p></p>
    <Row gutter={[20,20]} justify="center" >
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
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p> </p>
    <Row justify="center" >
    <Pagination defaultCurrent={1} total={50} style={{color: '#8172D5'}}/>
    </Row>
    
    </body>
    </>
  );
}

export default TestCardPage;

import React from 'react';
'import SelectMockTestCard from "../components/SelectMockTestCard"';
import {Row, Col, Divider} from 'antd';
import { Pagination } from 'antd';


function SelectMockTestCard() {
  return (
    <>
    <Divider orientation="left">Choose the topic</Divider>
    <Row gutter={[16,24]} justify="center" >
        <Col>
            <SelectMockTestCard />
        </Col>
        <Col >
            <SelectMockTestCard />
        </Col>
        <Col >
            <SelectMockTestCard />
        </Col>
        <Col >
            <SelectMockTestCard />
        </Col>
        <Col >
            <SelectMockTestCard />
        </Col>
        <Col >
            <SelectMockTestCard />
        </Col>
        <Col >
            <SelectMockTestCard />
        </Col>
        <Col >
            <SelectMockTestCard />
        </Col>
        <Pagination defaultCurrent={1} total={50} style={{color: '#8172D5'}}/>
    </Row>
    
    </>
  );
}

export default SelectMockTestCard;

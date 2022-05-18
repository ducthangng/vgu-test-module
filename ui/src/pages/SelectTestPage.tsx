import React from 'react';
import './App.css';
import SelectTestCard from '../components/SelectTestCard';
import {Row, Col} from 'antd';

function SelectTestPage() {
  return (
    <Row gutter={32} justify="center" >
        <Col>
            <SelectTestCard />
        </Col>
        <Col >
            <SelectTestCard />
        </Col>
    </Row>
  );
}

export default SelectTestPage;
import { Card, Form, Avatar } from 'antd';
import React from 'react';
import './TestCard.css';
import test from './pexels-photo-1036644.png';



const { Meta } = Card;

function TestCard() {
    return (
        <Form>
        <Card
        hoverable
        className="card"
        cover={<img alt="example" src={test} className="cover" style={{alignItems: "center", borderRadius: 10}}/>}
      >
        <div className="wrapper">
         <Meta title="Test 1" className="test_title" style ={{fontSize: 25}}/>
         <Meta title="Djt me Thang" className="test_description"/>
         <Meta avatar={<Avatar src ="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} title="Djt me Thang" className="test_description"/>
        </div>
      </Card>
      </Form>


    );
    
}

export default TestCard;
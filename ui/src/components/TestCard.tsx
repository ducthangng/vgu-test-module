import { Card, Form, Avatar } from 'antd';
import React from 'react';
import './TestCard.css';
import test from './pexels-photo-1036644.png';
import mail from './ic_contact_mail_24px.png';
import calendar from './ic_event_available_24px.png';

const test_title = {
  display: 'flex',
  left: '156px',
  top: '19px',
  fontFamily: 'Roboto',
  fontSize: '25px',
  fontWeight: 'bold',
}

const test_description = {
  display: 'flex',
  left: '158px',
  top: '58px',
  fontFamily: 'Roboto',
  fontSize: '11px',
  color: 'black',
}


const { Meta } = Card;

function TestCard()
{
  return (
    <Form>
      <Card
        hoverable
        className="card"
        cover={ <img alt="example" src={ test } className="cover" style={ { alignItems: "center", borderRadius: 10 } } /> }
      >
        <div className="wrapper">
          <Meta title="Test 1" className="test_title" style={ test_title } />
          <Meta title="Djt me Thang" className="test_description" style={ test_description } />

          <Meta avatar={ <Avatar src={ calendar } /> } title="Group 1" className="test_group" />
          <Meta avatar={ <Avatar src={ mail } /> } title="12/12/2020" className="test_time" />
        </div>
      </Card>
    </Form>


  );

}

export default TestCard;
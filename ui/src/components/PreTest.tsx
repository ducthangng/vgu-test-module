import React from 'react';
import { Button } from 'antd';
import '../components/PreTest.css';

function PreTest() {
  return (
    <div>
      <div className="container">
        <h1
          style={{
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Roboto',
            fontSize: 30,
          }}
        >
          Before The Test
        </h1>
      </div>

      <br></br>

      <div className="message-box">
        <Button className="btn">
          <p className="btn-text" style={{ textAlign: 'center' }}>
            Start
          </p>
        </Button>
      </div>
    </div>
  );
}

export default PreTest;

import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import '../components/PreTest.css';
// toast
import { toast } from 'react-toastify';
// models
import { TestDetails } from '../models/TestDetails';
// context
import { useTestContext } from '../context/test/TestContext';
// fetches
import { testApi } from '../api/testApi';
// routing
import { useParams } from 'react-router-dom';

function PreTest() {
  // context
  const { testDetails, setTestDetails } = useTestContext();
  // routing
  const { testId } = useParams();

  const fetchData = async () => {
    try {
      let data = await testApi.getTest(testId as string);
      setTestDetails(data);
    } catch (error) {
      toast(`error: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        {testDetails.testName}
        {testDetails.title}
        {testDetails.info}
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

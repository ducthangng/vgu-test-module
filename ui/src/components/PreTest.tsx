import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import '../components/PreTest.css';
// toast
import { toast } from 'react-toastify';
// context
import { useTestContext } from '../context/test/TestContext';
// fetches
import { testApi } from '../api/testApi';
// routing
import { useParams, useNavigate } from 'react-router-dom';

function PreTest() {
  // context
  const { testDetails, setTestDetails } = useTestContext();
  // routing
  const navigate = useNavigate();
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
        <Button
          className="btn"
          onClick={() => {
            navigate(`../do/${testId}`);
          }}
        >
          <p className="btn-text" style={{ textAlign: 'center' }}>
            Start
          </p>
        </Button>
      </div>
    </div>
  );
}

export default PreTest;

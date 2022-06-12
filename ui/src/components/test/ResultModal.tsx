import { Button, Modal } from 'antd';
import React, { useState, useEffect } from 'react';
// routing
import { useNavigate } from 'react-router-dom';
// context
import { useTestContext } from '../../context/test/TestContext';
// components
import { Progress } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
// mock data
import mockResultData from '../../api/mockResultData.json';

export default function ResultModal() {
  const [visible, setVisible] = useState(true);
  const [score, setScore] = useState<number>();
  // context
  const { setReviewMode } = useTestContext();
  // routing
  const navigate = useNavigate();

  // fetch data
  useEffect(() => {
    setScore(mockResultData.score);
  }, []);

  const handleReview = () => {
    setReviewMode(true);
    setVisible(false);
    navigate('../../test/review/1');
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <>
      <Modal
        title={
          <div className="text-xl font-bold text-center text-green-500 pt-5">
            CONGRATULATIONS
          </div>
        }
        centered
        closable={false}
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={500}
        footer={[
          <Button key="retake" onClick={handleHome}>
            <HomeOutlined /> Home
          </Button>,
          <Button key="review" type="primary" onClick={handleReview}>
            Review Test
          </Button>,
        ]}
      >
        <div className="text-xl text-center">
          <Progress
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
            type="circle"
            percent={score}
            format={(percent) => `${percent}`}
          />
          <div className="py-5">
            <p>You have completed this test.</p>
          </div>
        </div>
      </Modal>
    </>
  );
}

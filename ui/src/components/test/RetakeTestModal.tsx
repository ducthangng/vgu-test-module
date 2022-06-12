import { Button, Modal } from 'antd';
import React, { useState } from 'react';
// context
import { useTestContext } from '../../context/test/TestContext';
// mock data
import mockAnswerData from '../../api/mockFilledAnswerData.json';

export default function RetakeTestModal() {
  const [visible, setVisible] = useState(true);

  const { setWaitModal, setReviewMode, setSubmitData } = useTestContext();

  const handleRetake = () => {
    setWaitModal(false);
    setVisible(false);
  };

  const handleReview = () => {
    setReviewMode(true);
    setSubmitData(mockAnswerData);
    setVisible(false);
  };

  return (
    <>
      <Modal
        title={
          <div className="text-xl font-bold text-center pt-5">CONFIRM</div>
        }
        centered
        closable={false}
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={500}
        footer={[
          <Button key="retake" onClick={handleRetake}>
            Retake Test
          </Button>,
          <Button key="review" type="primary" onClick={handleReview}>
            Review Test
          </Button>,
        ]}
      >
        <div className="text-xl">
          <p>You have done this test before.</p>
          <p>Do you want to retake this test?</p>
        </div>
      </Modal>
    </>
  );
}

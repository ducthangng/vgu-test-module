import React, { useRef, useEffect } from 'react';
import { Card, Form, Radio, Space } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';

//interface
interface TestQuestion {
  id: number;
  content: string;
  choiceA: string;
  choiceB: string;
  choiceC: string;
  choiceD: string;
  answer: string;
}
interface UserAnswer {
  id: number;
  answer: string;
}
interface ListeningTestProps {
  testQuestions: TestQuestion[] | undefined;
  userAnswers: UserAnswer[];
  setUserAnswers: React.Dispatch<React.SetStateAction<UserAnswer[]>>;
}

export default function ListeningTest(props: ListeningTestProps) {
  //form
  const [form] = Form.useForm();

  const handleChange = (event?: RadioChangeEvent) => {
    let newUserAnswers = [...props.userAnswers];
    let isNew = true;

    newUserAnswers.forEach((userAnswer) => {
      if (userAnswer.id == parseInt(event?.target.name as string)) {
        isNew = false;
        userAnswer.answer = event?.target.value;
      }
    });

    if (isNew) {
      newUserAnswers.push({
        id: parseInt(event?.target.name as string),
        answer: event?.target.value,
      });
    }

    props.setUserAnswers(newUserAnswers);
  };

  return (
    <Card
      style={{
        marginLeft: 30,
        textAlign: 'left',
      }}
      className="md:w-3/4 w-screen"
    >
      <Form form={form} layout="vertical" autoComplete="off">
        {props.testQuestions &&
          props.testQuestions.map((testQuestion) => (
            <Form.Item
              key={testQuestion.id}
              label={
                <h3 style={{ fontWeight: 'bold' }}>
                  Câu {testQuestion.id}: {testQuestion.content}
                </h3>
              }
            >
              <Radio.Group
                style={{ paddingLeft: 15 }}
                name={`${testQuestion.id}`}
                onChange={handleChange}
              >
                <Space direction="vertical">
                  <Radio value="A">{testQuestion.choiceA}</Radio>
                  <Radio value="B">{testQuestion.choiceB}</Radio>
                  <Radio value="C">{testQuestion.choiceC}</Radio>
                  <Radio value="D">{testQuestion.choiceD}</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
          ))}
      </Form>
    </Card>
  );
}

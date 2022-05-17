import React from 'react';
import { Card, Form, Radio, Space } from 'antd';

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

interface MultipleChoiceTestProps {
  testQuestions: TestQuestion[] | undefined;
}

export default function MultipleChoiceTest(props: MultipleChoiceTestProps) {
  //form
  const [form] = Form.useForm();

  return (
    <Card
      style={{
        width: '70%',
        marginLeft: 30,
        textAlign: 'left',
        padding: 20,
      }}
    >
      <Form form={form} layout="vertical" autoComplete="off">
        {props.testQuestions &&
          props.testQuestions.map((testQuestion) => (
            <Form.Item
              key={testQuestion.id}
              name="radio-group"
              label={
                <h3 style={{ fontWeight: 'bold' }}>
                  Câu {testQuestion.id}: {testQuestion.content}
                </h3>
              }
            >
              <Radio.Group style={{ paddingLeft: 15 }}>
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

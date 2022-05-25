import React, { useRef, useEffect } from 'react';
import { Card, Form, Radio, Space } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';

//interface
interface MultipleChoiceQuestionProps {
  id: number;
  q: string;
  a: [string];
  correct_ans: number;
}

export default function MultipleChoiceQuestion(
  props: MultipleChoiceQuestionProps
) {
  const handleChange = (event?: RadioChangeEvent) => {};

  return (
    <Form.Item
      key={props.id}
      label={
        <h3 style={{ fontWeight: 'bold' }}>
          Câu {props.id}: {props.q}
        </h3>
      }
    >
      <Radio.Group
        style={{ paddingLeft: 15 }}
        name={`${props.id}`}
        onChange={handleChange}
      >
        <Space direction="vertical">
          {props.a &&
            props.a.map((choice, index) => (
              <Radio value={index + 1}>{choice}</Radio>
            ))}
        </Space>
      </Radio.Group>
    </Form.Item>
  );
}

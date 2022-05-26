import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

//interface
interface TrueFalseQuestionProps {
  startIndex: number;
  content: {
    q: string;
    correct_ans: number;
  }[];
}

export default function TrueFalseQuestion(props: TrueFalseQuestionProps) {
  return (
    <div>
      {props.content &&
        props.content.map((question, index) => {
          if (question.q) {
            return (
              <div className="grid grid-cols-4 flex items-center">
                <p className="col-span-3">
                  <span className="font-bold">
                    Câu {props.startIndex + index}:
                  </span>{' '}
                  {question.q}
                </p>
                <Select dropdownStyle={{ width: '100%' }}>
                  <Option value={1}>True</Option>
                  <Option value={0}>False</Option>
                  <Option value={2}>Not Given</Option>
                </Select>
              </div>
            );
          }
        })}
    </div>
  );
}

import React, { useEffect } from 'react';
import { Form, Radio, Space } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';

import { useTestContext } from '../../context/test/TestContext';

// local interfaces
interface MultipleChoiceSectionProps {
  sectionIndex: number;
  startIndex: number;
  media: {
    title: string;
    content: string;
  }[];
  content: {
    q: string;
    a: [string];
    correct_ans: number;
  }[];
}

export default function MultipleChoiceSection(
  props: MultipleChoiceSectionProps
) {
  // context
  const { submitData, setSubmitData } = useTestContext();

  const handleChange = (event?: RadioChangeEvent) => {
    let newChosenAnswers = [
      ...submitData.sections[props.sectionIndex - 1].answers,
    ];
    newChosenAnswers[parseInt(event?.target.name as string)] =
      event?.target.value;

    let newSubmitDataSections = [...submitData.sections];
    newSubmitDataSections[props.sectionIndex - 1].answers = newChosenAnswers;
    let newSubmitData = {
      ...submitData,
      sections: newSubmitDataSections,
    };
    setSubmitData(newSubmitData);
  };

  return (
    <div>
      <div>
        {props.media &&
          props.media.map((image) => (
            <div className="flex flex-col items-center">
              <img src={image.content} className="" />
              <p className="mb-10 italic">{image.title}</p>
            </div>
          ))}
      </div>

      {props.content &&
        props.content.map((question, index) => (
          <Form.Item
            key={props.startIndex + index}
            label={
              <h3 style={{ fontWeight: 'bold' }}>
                Câu {props.startIndex + index}: {question.q}
              </h3>
            }
          >
            <Radio.Group
              style={{ paddingLeft: 15 }}
              name={`${index}`}
              onChange={handleChange}
            >
              <Space direction="vertical">
                {question.a &&
                  question.a.map((choice, index) => (
                    <Radio value={index + 1}>{choice}</Radio>
                  ))}
              </Space>
            </Radio.Group>
          </Form.Item>
        ))}
    </div>
  );
}

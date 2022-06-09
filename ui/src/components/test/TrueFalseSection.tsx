import React from 'react';

import { useTestContext } from '../../context/test/TestContext';

import Section from '../../interfaces/test/Section.interface';

import { Select } from 'antd';
const { Option } = Select;

//interface
interface TrueFalseSectionProps {
  sectionIndex: number;
  section: Section;
}

export default function TrueFalseSection(props: TrueFalseSectionProps) {
  // context
  const { reviewMode, submitData, setSubmitData } = useTestContext();

  const handleChange = reviewMode
    ? () => {}
    : (value: string, index: number) => {
        let newChosenAnswers = [
          ...submitData.sections[props.sectionIndex - 1].answers,
        ];
        newChosenAnswers[index] = value;

        let newSubmitDataSections = [...submitData.sections];
        newSubmitDataSections[props.sectionIndex - 1].answers =
          newChosenAnswers;
        let newSubmitData = {
          ...submitData,
          sections: newSubmitDataSections,
        };
        setSubmitData(newSubmitData);
      };

  return (
    <div>
      <div
        className="whitespace-pre-line font-bold py-5"
        dangerouslySetInnerHTML={{ __html: props.section.title }}
      />

      <div>
        {props.section.media &&
          props.section.media.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={image.content} className="" />
              <p className="mb-10 italic">{image.title}</p>
            </div>
          ))}
      </div>

      {props.section.content &&
        props.section.content.map((question, index) => {
          if (question.q) {
            return (
              <div
                key={index}
                className={`grid grid-cols-4 md:grid-cols-5 flex items-center p-2 my-1 ${
                  reviewMode
                    ? submitData.sections[props.sectionIndex - 1].answers[
                        index
                      ] === question.correct_ans
                      ? 'bg-green-500'
                      : 'bg-red-500'
                    : 'bg-white'
                }`}
              >
                <p className="col-span-3 md:col-span-4">
                  <span className="font-bold">
                    Câu {props.section.startIndex + index}:
                  </span>{' '}
                  {question.q}
                </p>
                <Select
                  onChange={(value) => {
                    handleChange(value, index);
                  }}
                  disabled={reviewMode}
                  value={
                    submitData.sections[props.sectionIndex - 1].answers[index]
                  }
                  className={`w-full text-center py-1`}
                  dropdownClassName="text-center"
                >
                  <Option value={1}>T</Option>
                  <Option value={0}>F</Option>
                  <Option value={2}>NG</Option>
                </Select>
              </div>
            );
          }
        })}

      {reviewMode && (
        <div className="py-5">
          <h3 className="font-bold">Explanation</h3>
          <div className="p-3 rounded-md border bg-gray-200">
            <div className="">
              {props.section.content.map((question, index) => (
                <div>
                  <p>
                    <span className="font-bold">
                      Câu {props.section.startIndex + index}:
                    </span>{' '}
                    {question.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

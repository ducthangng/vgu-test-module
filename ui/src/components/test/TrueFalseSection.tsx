import React from 'react';

import { useTestContext } from '../../context/test/TestContext';

//interface
interface TrueFalseSectionProps {
  sectionIndex: number;
  startIndex: number;
  media: {
    title: string;
    content: string;
  }[];
  content: {
    q: string;
    correct_ans: number;
  }[];
}

export default function TrueFalseSection(props: TrueFalseSectionProps) {
  // context
  const { submitData, setSubmitData } = useTestContext();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
        props.content.map((question, index) => {
          if (question.q) {
            return (
              <div className="grid grid-cols-4 md:grid-cols-5 flex items-center">
                <p className="col-span-3 md:col-span-4">
                  <span className="font-bold">
                    Câu {props.startIndex + index}:
                  </span>{' '}
                  {question.q}
                </p>
                <select
                  defaultValue={-1}
                  name={`${index}`}
                  onChange={handleChange}
                  className="w-full text-center rounded bg-white border border-gray-300 py-1"
                >
                  <option disabled selected value={-1}></option>
                  <option value={1}>T</option>
                  <option value={0}>F</option>
                  <option value={2}>NG</option>
                </select>
              </div>
            );
          }
        })}
    </div>
  );
}
import React from 'react';

import { useTestContext } from '../../context/test/TestContext';

import Section from '../../interfaces/test/Section.interface';

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
    : (event: React.ChangeEvent<HTMLSelectElement>) => {
        let newChosenAnswers = [
          ...submitData.sections[props.sectionIndex - 1].answers,
        ];
        newChosenAnswers[parseInt(event?.target.name as string)] =
          event?.target.value;

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
          props.section.media.map((image) => (
            <div className="flex flex-col items-center">
              <img src={image.content} className="" />
              <p className="mb-10 italic">{image.title}</p>
            </div>
          ))}
      </div>

      {props.section.content &&
        props.section.content.map((question, index) => {
          if (question.q) {
            return (
              <div className="grid grid-cols-4 md:grid-cols-5 flex items-center">
                <p className="col-span-3 md:col-span-4">
                  <span className="font-bold">
                    Câu {props.section.startIndex + index}:
                  </span>{' '}
                  {question.q}
                </p>
                <select
                  defaultValue={-1}
                  name={`${index}`}
                  onChange={handleChange}
                  disabled={reviewMode}
                  value={
                    submitData.sections[props.sectionIndex - 1].answers[index]
                  }
                  className={`w-full text-center rounded border border-gray-300 py-1 ${
                    reviewMode
                      ? submitData.sections[props.sectionIndex - 1].answers[
                          index
                        ] === question.correct_ans
                        ? 'bg-green-500'
                        : 'bg-red-500'
                      : 'bg-white'
                  }`}
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

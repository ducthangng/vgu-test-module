/* IMPORTS */
import React, { useEffect, useState, useRef } from 'react';
import { Input } from 'antd';

import { useTestContext } from '../../context/test/TestContext';

import Section from '../../interfaces/test/Section.interface';

import shuffle from '../../utils/shuffleArray';

/* LOCAL INTERFACES */
interface MatchingHeadingSectionProps {
  sectionIndex: number;
  section: Section;
}

/* COMPONENT */
export default function MatchingHeadingSection(
  props: MatchingHeadingSectionProps
) {
  const [answers, setAnswers] = useState<string[]>([]);

  // context
  const { reviewMode, submitData, setSubmitData } = useTestContext();

  useEffect(() => {
    // create answers array made from list of correct answers
    let newAnswers = props.section.content.map((item) => {
      return item.correct_ans as string;
    });

    // shuffle answers array
    shuffle(newAnswers);

    setAnswers(newAnswers);

    // initialize answers array of this section
    if (submitData.sections[props.sectionIndex - 1].answers.length < 1) {
      for (let i = 0; i < props.section.content.length; i++) {
        if (props.section.content[i].q) {
          submitData.sections[props.sectionIndex - 1].answers.push('');
        }
      }
    }
  }, []);

  // empty function if in review mode
  const handleChange = reviewMode
    ? () => {}
    : (event: React.ChangeEvent<HTMLInputElement>) => {
        let newChosenAnswers = [
          ...submitData.sections[props.sectionIndex - 1].answers,
        ];
        newChosenAnswers[parseInt(event.target.name as string)] =
          event.target.value;

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
                <div
                  className={`grid grid-cols-4 flex items-center my-2 p-3 ${
                    reviewMode
                      ? submitData.sections[props.sectionIndex - 1].answers[
                          index
                        ] === question.correct_ans
                        ? 'bg-green-500'
                        : 'bg-red-500'
                      : ''
                  }`}
                >
                  <p className="col-span-3">
                    <span className="font-bold">
                      Câu {props.section.startIndex + index}:
                    </span>{' '}
                    {question.q}
                  </p>
                  <Input
                    className="text-center ml-2"
                    name={`${index}`}
                    value={
                      submitData.sections[props.sectionIndex - 1].answers[index]
                    }
                    onChange={handleChange}
                    disabled={reviewMode}
                  />
                </div>
              );
            }
          })}
        <div className="p-3 rounded-md border flex items-center place-content-center">
          <div className="">
            <h3 className="font-bold">
              {props.section.smallAnswerDescription}
            </h3>
            {answers &&
              answers.map((answer, index) => (
                <p>
                  <span className="font-bold pr-2">
                    {String.fromCharCode(index + 65)}
                  </span>{' '}
                  {answer}
                </p>
              ))}
          </div>
        </div>
      </div>

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

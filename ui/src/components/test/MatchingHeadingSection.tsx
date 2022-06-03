/* IMPORTS */
import React, { useEffect, useState, useRef } from 'react';
import { Input } from 'antd';

import { useTestContext } from '../../context/test/TestContext';

import Section from '../../interfaces/test/Section.interface';

/* LOCAL INTERFACES */
interface MatchingHeadingSectionProps {
  sectionIndex: number;
  section: Section;
}

interface Answer {
  p: string;
  a: string;
}

/* COMPONENT */
export default function MatchingHeadingSection(
  props: MatchingHeadingSectionProps
) {
  const [answers, setAnswers] = useState<Answer[]>([]);

  // context
  const { submitData, setSubmitData } = useTestContext();

  useEffect(() => {
    // set and sort answers lexicographically
    setAnswers(
      props.content
        .map((item) => {
          return {
            a: item.a,
            p: item.p,
          };
        })
        .sort((a: Answer, b: Answer) => a.p.localeCompare(b.p))
    );

    // initialize answers array of this section

    if (submitData.sections[props.sectionIndex - 1].answers.length < 1) {
      for (let i = 0; i < props.content.length; i++) {
        if (props.content[i].q) {
          submitData.sections[props.sectionIndex - 1].answers.push('');
        }
      }
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newChosenAnswers = [
      ...submitData.sections[props.sectionIndex - 1].answers,
    ];
    newChosenAnswers[parseInt(event.target.name as string)] =
      event.target.value;

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
                <div className="grid grid-cols-4 flex items-center">
                  <p className="col-span-3">
                    <span className="font-bold">
                      Câu {props.startIndex + index}:
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
                  />
                </div>
              );
            }
          })}
        <div className="p-3 rounded-md border flex items-center place-content-center">
          <div className="">
            <h3 className="font-bold">{props.smallAnswerDescription}</h3>
            {answers &&
              answers.map((answer) => (
                <p>
                  <span className="font-bold pr-2">{answer.p}</span> {answer.a}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

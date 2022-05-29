/* IMPORTS */
import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
//interfaces
import Section from '../../interfaces/test/Section.interface';
import SectionAnswer from '../../interfaces/test/SectionAnswer.interface';

/* LOCAL INTERFACES */
interface MatchingHeadingSectionProps {
  sectionIndex: number;
  startIndex: number;
  smallAnswerDescription: string;
  media: {
    title: string;
    content: string;
  }[];
  content: {
    q: string;
    a: string;
    p: string;
  }[];
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
  const [chosenAnswers, setChosenAnswers] = useState<string[]>([]);

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

    // initialize chosenAnswers array
    let newChosenAnswers = [...chosenAnswers];
    for (let i = 0; i < props.content.length; i++) {
      if (props.content[i].q) {
        newChosenAnswers.push('');
      }
    }
    setChosenAnswers(newChosenAnswers);

    // return () => {
    //   let newUserAnswers = [...props.userAnswers];
    //   newUserAnswers[props.sectionIndex].answers = chosenAnswers;
    //   props.setUserAnswers(newUserAnswers);
    // }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newChosenAnswers = [...chosenAnswers];
    newChosenAnswers[parseInt(event.target.name as string)] =
      event.target.value;
    setChosenAnswers(newChosenAnswers);
  };

  return (
    <div>
      <div>
        {JSON.stringify(chosenAnswers)}
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
                    className="text-center"
                    name={`${index}`}
                    value={chosenAnswers[index]}
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

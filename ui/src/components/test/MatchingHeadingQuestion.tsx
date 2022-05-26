import React, { useEffect, useState } from 'react';
import { Input, message } from 'antd';

// interface
interface MatchingHeadingProps {
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

export default function MatchingHeadingQuestion(props: MatchingHeadingProps) {
  const [answers, setAnswers] = useState<Answer[]>();

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
  }, []);

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
                  <Input className="text-center" />
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

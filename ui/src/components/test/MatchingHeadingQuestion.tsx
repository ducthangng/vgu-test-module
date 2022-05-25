import React, { useEffect, useState } from 'react';

// interface
interface MatchingHeadingProps {
  startIndex: number;
  smallAnswerDescription: string;
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
                  <input
                    type="text"
                    className="border border-2 border-gray-500 text-center"
                  />
                </div>
              );
            }
          })}
        <div className="border flex items-center place-content-center">
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

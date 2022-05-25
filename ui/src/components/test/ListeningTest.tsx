import React, { useRef, useEffect } from 'react';
import { Card, Form } from 'antd';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import MatchingHeadingQuestion from './MatchingHeadingQuestion';
import TrueFalseQuestion from './TrueFalseQuestion';
import FillBlankQuestion from './FillBlankQuestion';
import Section from './Section.interface';

//interface

interface ListeningTestProps {
  sections: Section[];
}

export default function ListeningTest(props: ListeningTestProps) {
  //form
  const [form] = Form.useForm();

  useEffect(() => {
    console.log(props.sections);
  }, [props.sections]);

  return (
    <Card
      style={{
        marginLeft: 30,
        textAlign: 'left',
      }}
      className="md:w-3/4 w-screen"
    >
      <Form form={form} layout="vertical" autoComplete="off">
        {props.sections &&
          props.sections.map((section) => {
            if (section.type == 'multiple choice question') {
              // because content may not be an array, so we need to check before using map()
              if (Array.isArray(section.content)) {
                return (
                  <div>
                    <h1 className="text-2xl py-5 font-bold text-center">
                      {section.title}
                    </h1>
                    {section.content.map((question, index) => {
                      // depends on the type of section, we may not have properties "a" or "correct_ans"

                      if ('a' in question && 'correct_ans' in question) {
                        return (
                          <div>
                            <MultipleChoiceQuestion
                              id={section.start_index + index}
                              q={question.q}
                              a={question.a}
                              correct_ans={question.correct_ans}
                            />
                          </div>
                        );
                      }
                    })}
                  </div>
                );
              }
            } else if (section.type == 'matching heading') {
              if (Array.isArray(section.content)) {
                return (
                  <div>
                    <h1 className="text-2xl py-5 font-bold text-center">
                      {section.title}
                    </h1>
                    <MatchingHeadingQuestion
                      startIndex={section.start_index}
                      smallAnswerDescription={section.smallAnswerDescription}
                      content={
                        section.content as { q: string; a: string; p: string }[]
                      }
                    />
                  </div>
                );
              }
            } else if (section.type == 'fill in the blank') {
              return (
                <div>
                  <h1 className="text-2xl py-5 font-bold text-center">
                    {section.title}
                  </h1>
                  <FillBlankQuestion
                    startIndex={section.start_index}
                    content={section.content as { passage: string }}
                  />
                </div>
              );
            } else if (section.type == 'tfng') {
              if (Array.isArray(section.content)) {
                return (
                  <div>
                    <h1 className="text-2xl py-5 font-bold text-center">
                      {section.title}
                    </h1>
                    <TrueFalseQuestion
                      startIndex={section.start_index}
                      content={
                        section.content as { q: string; correct_ans: number }[]
                      }
                    />
                  </div>
                );
              }
            }
          })}
      </Form>
    </Card>
  );
}

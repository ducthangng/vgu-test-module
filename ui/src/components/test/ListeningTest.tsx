import React, { useRef, useEffect } from 'react';
import { Card, Form } from 'antd';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
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
                return section.content.map((question, index) => {
                  // depends on the type of section, we may not have properties "a" or "correct_ans"

                  if ('a' in question && 'correct_ans' in question) {
                    return (
                      <MultipleChoiceQuestion
                        id={section.start_index + index}
                        q={question.q}
                        a={question.a}
                        correct_ans={question.correct_ans}
                      />
                    );
                  }
                });
              }
            } else if (section.type == 'matching heading') {
              return <h1>Matching Heading</h1>;
            } else if (section.type == 'fill in the blank') {
              return <h1>Fill in the Blank</h1>;
            } else if (section.type == 'tfng') {
              return <h1>True False</h1>;
            }
          })}
      </Form>
    </Card>
  );
}

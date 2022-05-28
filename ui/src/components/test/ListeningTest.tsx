/* IMPORTS */
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
// components
import { Form } from 'antd';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import MatchingHeadingQuestion from './MatchingHeadingQuestion';
import TrueFalseQuestion from './TrueFalseQuestion';
import FillBlankQuestion from './FillBlankQuestion';
//interfaces
import Section from './Section.interface';
import SectionAnswer from './SectionAnswer.interface';

/*****/

//local interfaces
interface ListeningTestProps {
  sections: Section[];
  setUserAnswers: React.Dispatch<React.SetStateAction<SectionAnswer[]>>;
}

//function for rendering section depends on its data
const getSectionComponent = (section: Section) => {
  if (section.type == 'multiple choice question') {
    // because content may not be an array, so we need to check before using map()
    if (Array.isArray(section.content)) {
      return (
        <div>
          <h1 className="text-2xl py-5 font-bold">{section.title}</h1>
          <MultipleChoiceQuestion
            startIndex={section.start_index}
            media={section.media}
            content={
              section.content as {
                q: string;
                a: [string];
                correct_ans: number;
              }[]
            }
          />
        </div>
      );
    }
  } else if (section.type == 'matching heading') {
    if (Array.isArray(section.content)) {
      return (
        <div>
          <h1 className="text-2xl py-5 font-bold">{section.title}</h1>
          <MatchingHeadingQuestion
            startIndex={section.start_index}
            smallAnswerDescription={section.smallAnswerDescription}
            media={section.media}
            content={section.content as { q: string; a: string; p: string }[]}
          />
        </div>
      );
    }
  } else if (section.type == 'fill in the blank') {
    return (
      <div>
        <h1 className="text-2xl py-5 font-bold">{section.title}</h1>
        <FillBlankQuestion
          startIndex={section.start_index}
          media={section.media}
          content={section.content as { passage: string }}
        />
      </div>
    );
  } else if (section.type == 'tfng') {
    if (Array.isArray(section.content)) {
      return (
        <div>
          <h1 className="text-2xl py-5 font-bold">{section.title}</h1>
          <TrueFalseQuestion
            startIndex={section.start_index}
            media={section.media}
            content={section.content as { q: string; correct_ans: number }[]}
          />
        </div>
      );
    }
  }
};

export default function ListeningTest(props: ListeningTestProps) {
  //params
  const { id } = useParams();
  //form
  const [form] = Form.useForm();
  //states
  const [sectionComponent, setSectionComponent] = useState<
    JSX.Element | undefined
  >(undefined);

  useEffect(() => {
    if (
      parseInt(id as string) < 1 ||
      parseInt(id as string) > props.sections.length
    ) {
      setSectionComponent(<h1>Section ID is invalid</h1>);
    } else {
      setSectionComponent(
        getSectionComponent(
          props.sections.at(parseInt(id as string) - 1) as Section
        )
      );
    }
  }, [props.sections, id]);

  return (
    <div className="p-5 md:p-10 rounded-lg w-full md:px-50 bg-white overflow-hidden shadow-lg">
      <Form form={form} layout="vertical" autoComplete="off">
        {sectionComponent}
      </Form>
    </div>
  );
}

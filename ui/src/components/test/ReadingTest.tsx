/* IMPORTS */
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
// components
import { Form } from 'antd';
import MultipleChoiceSection from './MultipleChoiceSection';
import MatchingHeadingSection from './MatchingHeadingSection';
import TrueFalseSection from './TrueFalseSection';
import FillBlankSection from './FillBlankSection';
//interfaces
import Section from '../../interfaces/test/Section.interface';

//local interfaces
interface ReadingTestProps {
  title: string;
  passage: string;
  illustration: string;
  sections: Section[];
}

export default function ReadingTest(props: ReadingTestProps) {
  //params
  const { id } = useParams();
  //form
  const [form] = Form.useForm();
  //states
  const [sectionComponent, setSectionComponent] = useState<
    JSX.Element | undefined
  >(undefined);

  //function for rendering section depends on its data
  const getSectionComponent = (section: Section, sectionIndex: number) => {
    if (section.type == 'multiple choice question') {
      // because content may not be an array, so we need to check before using map()
      if (Array.isArray(section.content)) {
        return (
          <div>
            <h1 className="text-2xl py-5 font-bold">
              {section.title} {sectionIndex}
            </h1>
            <MultipleChoiceSection
              sectionIndex={sectionIndex}
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
            <h1 className="text-2xl py-5 font-bold">
              {section.title}
              {sectionIndex}
            </h1>
            <MatchingHeadingSection
              sectionIndex={sectionIndex}
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
          <h1 className="text-2xl py-5 font-bold">
            {section.title}
            {sectionIndex}
          </h1>
          <FillBlankSection
            sectionIndex={sectionIndex}
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
            <h1 className="text-2xl py-5 font-bold">
              {section.title}
              {sectionIndex}
            </h1>
            <TrueFalseSection
              sectionIndex={sectionIndex}
              startIndex={section.start_index}
              media={section.media}
              content={section.content as { q: string; correct_ans: number }[]}
            />
          </div>
        );
      }
    }
  };

  useEffect(() => {
    if (
      parseInt(id as string) < 1 ||
      parseInt(id as string) > props.sections.length
    ) {
      setSectionComponent(<h1>Section ID is invalid</h1>);
    } else {
      setSectionComponent(
        getSectionComponent(
          props.sections.at(parseInt(id as string) - 1) as Section,
          parseInt(id as string)
        )
      );
    }
  }, [props.sections, id]);

  return (
    <>
      <div style={{ padding: 30, backgroundColor: '#E5E5E5' }}>
        <div className="h-screen flex content-center place-content-center">
          <div className="grid grid-cols-2 gap-10 p-5 md:p-10 rounded-lg w-full md:px-50 bg-white overflow-hidden shadow-lg">
            <div className="border-r-2 pr-8 overflow-y-scroll">
              <h1 className="text-center font-bold text-4xl">{props.title}</h1>
              <p className="whitespace-pre-line">{props.passage}</p>
            </div>
            <div className="pr-8 overflow-y-scroll">
              <Form form={form} layout="vertical" autoComplete="off">
                {sectionComponent}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
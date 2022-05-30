import React, { useRef } from 'react';
import { useTestContext } from '../../context/test/TestContext';

interface FillBlankSectionProps {
  sectionIndex: number;
  startIndex: number;
  media: {
    title: string;
    content: string;
  }[];
  content: {
    passage: string;
  };
}

export default function FillBlankSection(props: FillBlankSectionProps) {
  // ref
  const htmlContentRef = useRef<HTMLDivElement>(null);

  // context
  const { submitData, setSubmitData } = useTestContext();

  const handleInput = () => {
    if (htmlContentRef.current) {
      let inputList = Array.from(
        htmlContentRef.current.getElementsByTagName('input')
      );

      let newChosenAnswers = [
        ...submitData.sections[props.sectionIndex - 1].answers,
      ];

      for (let i = 0; i < inputList.length; i++) {
        newChosenAnswers[i] = inputList[i].value;
      }

      let newSubmitDataSections = [...submitData.sections];
      newSubmitDataSections[props.sectionIndex - 1].answers = newChosenAnswers;
      let newSubmitData = {
        ...submitData,
        sections: newSubmitDataSections,
      };
      setSubmitData(newSubmitData);
    }
  };

  return (
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
      <div
        onInput={handleInput}
        ref={htmlContentRef}
        dangerouslySetInnerHTML={{ __html: props.content.passage }}
      />
    </div>
  );
}

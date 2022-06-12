import React, { useRef, useEffect } from 'react';
import { useTestContext } from '../../context/test/TestContext';
import Section from '../../interfaces/test/Section.interface';

interface FillBlankSectionProps {
  sectionIndex: number;
  section: Section;
}

export default function FillBlankSection(props: FillBlankSectionProps) {
  // ref
  const htmlContentRef = useRef<HTMLDivElement>(null);

  // context
  const { reviewMode, submitData, setSubmitData } = useTestContext();

  useEffect(() => {
    if (htmlContentRef.current) {
      // get input elements
      let inputList = Array.from(
        htmlContentRef.current.getElementsByTagName('input')
      );
      // style them, make disabled if in review mode
      for (let i = 0; i < inputList.length; i++) {
        inputList[i].classList.add('border');
        inputList[i].classList.add('text-center');
        //sync input elements' values with submitData
        inputList[i].value = submitData.sections[props.sectionIndex - 1]
          .answers[i]
          ? submitData.sections[props.sectionIndex - 1].answers[i]
          : '';

        if (reviewMode) {
          // disable inputs in review mode
          inputList[i].setAttribute('disabled', '');
          // if correct, color green, otherwise red
          if (inputList[i].value == props.section.content[i].correct_ans) {
            inputList[i].classList.add('bg-green-300');
          } else {
            inputList[i].classList.add('bg-red-300');
          }
        }
      }
    }
  }, []);

  // empty function if in review mode
  const handleInput = reviewMode
    ? () => {}
    : () => {
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
          newSubmitDataSections[props.sectionIndex - 1].answers =
            newChosenAnswers;
          let newSubmitData = {
            ...submitData,
            sections: newSubmitDataSections,
          };
          setSubmitData(newSubmitData);
        }
      };

  return (
    <div>
      <div
        className="whitespace-pre-line font-bold py-5"
        dangerouslySetInnerHTML={{ __html: props.section.title }}
      />

      <div>
        {props.section.media &&
          props.section.media.map((image) => (
            <div className="flex flex-col items-center">
              <img src={image.content} className="" />
              <p className="mb-10 italic">{image.title}</p>
            </div>
          ))}
      </div>
      <div
        onInput={handleInput}
        ref={htmlContentRef}
        dangerouslySetInnerHTML={{ __html: props.section.content[0].q }}
      />

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

import React, { useRef } from 'react';

interface FillBlankQuestionProps {
  startIndex: number;
  media: {
    title: string;
    content: string;
  }[];
  content: {
    passage: string;
  };
}

export default function FillBlankQuestion(props: FillBlankQuestionProps) {
  const htmlContentRef = useRef(null);

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
        ref={htmlContentRef}
        dangerouslySetInnerHTML={{ __html: props.content.passage }}
      />
    </div>
  );
}

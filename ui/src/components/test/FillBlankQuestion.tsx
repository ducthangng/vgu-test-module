import React, { useRef } from 'react';

interface FillBlankQuestionProps {
  startIndex: number;
  content: {
    passage: string;
  };
}

export default function FillBlankQuestion(props: FillBlankQuestionProps) {
  const htmlContentRef = useRef(null);

  return (
    <div
      ref={htmlContentRef}
      dangerouslySetInnerHTML={{ __html: props.content.passage }}
    />
  );
}

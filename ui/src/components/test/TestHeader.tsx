import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

// interface
interface TestHeaderProps {
  timeLeft: string;
  submitTest: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function TestHeader(props: TestHeaderProps) {
  const handleBack = () => {
    console.log('back');
  };

  const handleNext = () => {
    console.log('next');
  };

  return (
    <nav className="sticky top-0 z-30 w-screen bg-white border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="px-5 pcontainer flex flex-wrap justify-between">
        <a href="https://flowbite.com" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-primary">
            AprilPE
          </span>
        </a>
        <div className="flex items-center md:ml-20">
          <p className="text-primary bg-primary/30 font-bold rounded-lg text-sm px-5 py-2.5 my-auto text-center">
            Time: {props.timeLeft}
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            type="button"
            className="hidden md:inline text-primary bg-primary/30 font-bold hover:bg-primary/20 rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
            onClick={handleBack}
          >
            BACK
          </button>
          <button
            type="button"
            className="hidden md:inline text-white bg-primary font-bold hover:bg-primary/75 rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
            onClick={handleNext}
          >
            NEXT
          </button>
          <button
            type="button"
            className="inline md:hidden text-primary bg-primary/30 font-bold hover:bg-primary/20 rounded-lg text-sm px-2 py-2 text-center mr-3 md:mr-0"
            onClick={handleBack}
          >
            <LeftOutlined />
          </button>
          <button
            type="button"
            className="inline md:hidden text-white bg-primary font-bold hover:bg-primary/75 rounded-lg text-sm px-2 py-2 text-center mr-3 md:mr-0"
            onClick={handleNext}
          >
            <RightOutlined />
          </button>
        </div>
      </div>
    </nav>
  );
}

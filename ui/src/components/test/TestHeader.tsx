import React from 'react';
import { LeftOutlined, RightOutlined, CheckOutlined } from '@ant-design/icons';

import { useNavigate, useParams } from 'react-router-dom';

// interface
interface TestHeaderProps {
  sectionsLength: number;
  timeLeft: string;
  handleSubmit: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function TestHeader(props: TestHeaderProps) {
  //routing
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`../${parseInt(id as string) - 1}`);
  };

  const handleNext = () => {
    navigate(`../${parseInt(id as string) + 1}`);
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
        <div className="flex space-x-2 items-center">
          <button
            type="button"
            className="disabled:text-white disabled:bg-gray-300 text-primary bg-primary/30 hover:bg-primary/20 hidden md:inline font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
            disabled={parseInt(id as string) <= 1}
            onClick={handleBack}
          >
            BACK
          </button>
          <button
            type="button"
            className="disabled:text-white disabled:bg-gray-300 inline md:hidden text-primary bg-primary/30 font-bold hover:bg-primary/20 rounded-lg text-sm px-2 py-2 text-center mr-3 md:mr-0"
            disabled={parseInt(id as string) <= 1}
            onClick={handleBack}
          >
            <LeftOutlined />
          </button>

          {parseInt(id as string) >= props.sectionsLength ? (
            <div>
              <button
                type="button"
                className="disabled:text-white disabled:bg-gray-300 hidden md:inline text-white bg-green-500 font-bold hover:bg-primary/75 rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                onClick={props.handleSubmit}
              >
                SUBMIT
              </button>
              <button
                type="button"
                className="disabled:text-white disabled:bg-gray-300 inline md:hidden text-white bg-green-500 font-bold hover:bg-primary/75 rounded-lg text-sm px-2 py-2 text-center mr-3 md:mr-0"
                onClick={props.handleSubmit}
              >
                <CheckOutlined />
              </button>
            </div>
          ) : (
            <div>
              <button
                type="button"
                className="disabled:text-white disabled:bg-gray-300 hidden md:inline text-white bg-primary font-bold hover:bg-primary/75 rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                onClick={handleNext}
              >
                NEXT
              </button>
              <button
                type="button"
                className="disabled:text-white disabled:bg-gray-300 inline md:hidden text-white bg-primary font-bold hover:bg-primary/75 rounded-lg text-sm px-2 py-2 text-center mr-3 md:mr-0"
                onClick={handleNext}
              >
                <RightOutlined />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

import React, { useState } from 'react';

function Questions({ questions }) {
  const [counter, setCounter] = useState(0);
  const [message, setCorrectMessage] = useState(false);
  const [err, setErr] = useState(false);

  const nextPage = () => {
    resetMessage();
    if (questions.length === counter + 1) {
      return;
    }
    setCounter(counter + 1);
  };

  const prevPage = () => {
    resetMessage();
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };

  const notifyCorrect = () => {
    setErr(false);
    setCorrectMessage(true);
  };

  const resetMessage = () => {
    setErr(false);
    setCorrectMessage(false);
  };

  const notifyWrong = () => {
    setErr(true);
  };

  return (
    <div className='bg-blue-900 flex flex-col h-full w-full items-center px-4 justify-around'>
      <div className='bg-blue-900 flex h-auto w-full items-center px-4'>
        <div className='w-3/5'>
          <Question
            question={questions[counter]}
            number={counter + 1}
            total={questions.length}
          />
        </div>
        <div className='w-2/5'>
          <Options
            options={questions[counter].answers}
            correct={questions[counter].correct}
            notifyCorrect={notifyCorrect}
            resetMessage={resetMessage}
            notifyWrong={notifyWrong}
          />
        </div>
      </div>
      {message && (
        <div className='absolute top-1/3 left-1/3 text-green-400 font-extrabold text-3xl'>
          Correct ✓
        </div>
      )}
      {err && (
        <div className='absolute top-1/3 left-1/3 text-red-500 font-extrabold text-3xl'>
          Wrong answer X
        </div>
      )}
      <div className='text-xl text-white'>
        <button className='mr-8' onClick={prevPage}>
          PREVIOUS
        </button>
        <button onClick={nextPage}>NEXT</button>
      </div>
    </div>
  );
}

const Question = ({ question, number, total }) => {
  return (
    <>
      <div className='text-white font-semibold text-3xl font-sans'>
        Question {number}/{total}
      </div>
      <div className='text-white font-hairline text-3xl font-sans'>
        {question.question}
      </div>
    </>
  );
};

const Options = ({
  options,
  correct,
  notifyCorrect,
  resetMessage,
  notifyWrong,
}) => {
  const handleClick = (e) => {
    if (correct === e.target.textContent) {
      notifyCorrect();
    } else {
      resetMessage();
      notifyWrong();
    }
  };
  return (
    <div className='flex flex-col w-3/4'>
      {options.map((country) => (
        <div
          onClick={handleClick}
          className={`text-lg text-white font-semibold rounded-xl border-transparent hover:border-blue-200 transition-all duration-200 border-solid border-2 cursor-pointer px-8 py-4 mb-10 answer-card`}
        >
          {country}
        </div>
      ))}
    </div>
  );
};

export default Questions;

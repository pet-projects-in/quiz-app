import React from "react";

function QuizHome() {
  return (
    <div className='bg-black flex flex-col justify-center items-center'>
      <div className='text-center text-4xl text-white'>Quiz App</div>
      <p className='text-yellow-200'>Welcome to Quiz App Select your category and start the quiz</p>

      <div className='flex flex-row'>
        <button className='bg-orange-300 rounded-lg w-20 mt-2 mr-2 h-10'>Tech</button>
        <button className='bg-orange-300 rounded-lg w-20 mt-2 h-10 '>Random</button>
      </div>

      <button className='bg-blue-600 rounded-lg px-3 py-5 w-32 mt-5 p-6'> Start Quiz</button>
    </div>
  );
}
export default QuizHome;
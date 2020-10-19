import React, { useEffect, useState } from 'react';
import QuizHome from './components/QuizHome'
import Questions from './components/Questions'
import './App.css';

let loader;
const dynamicLoad = async () => {
  try {
    const id = window.location.pathname.split('/')[1]
    const data = await import(`./assets/questions/${id}.js`)
    loader(data.default);
  } catch (e) {
    alert('It seems you have entered a wrong URL.');
  }
}

function App() {
  const [questions, setQuestions] = useState([]);
  loader = setQuestions;
  useEffect(() => {
    dynamicLoad()
  }, []);

  return (
    <>
      <QuizHome/>
      {/* {questions.length > 0 && <Questions questions={questions} />} */}

    </>
  );
}

export default App;

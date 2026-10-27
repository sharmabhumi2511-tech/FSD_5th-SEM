
import React, { useState } from "react";
import questions from "../public/questions.json";
import "./App.css";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const checkAnswer = (option) => {
    const isCorrect =
      option === questions[currentIndex].correct_answer;

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
      alert(
        "Your score: " +
          (score + (isCorrect ? 1 : 0)) +
          " / " +
          questions.length
      );
    }
  };

  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>

      {finished ? (
        <div className="result">
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: {score} / {questions.length}
          </p>

          <button
            className="option-button"
            onClick={() => {
              setCurrentIndex(0);
              setScore(0);
              setFinished(false);
            }}
          >
            Try Again
          </button>
        </div>
      ) : (
        <>
          <p className="question-count">
            Question {currentIndex + 1} of {questions.length}
          </p>

          <p className="question-text">
            {questions[currentIndex].question}
          </p>

          {questions[currentIndex].options.map(
            (option, index) => (
              <button
                className="option-button"
                key={index}
                onClick={() => checkAnswer(option)}
              >
                {option}
              </button>
            )
          )}
        </>
      )}
    </div>
  );
};

export default App;
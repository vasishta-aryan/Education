import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Student() {
  const questions = [
    {
      questionText: "What is the Capital of France?",
      answerOptions: [
        { answerText: "Delhi", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
        { answerText: "London", isCorrect: false },
      ],
    },
    {
      questionText: "Who is the CEO of Tesla ?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "Iphone was created by which company?",
      answerOptions: [
        { answerText: "NOKIA", isCorrect: false },
        { answerText: "Samsung", isCorrect: false },
        { answerText: "Apple", isCorrect: true },
        { answerText: "MI", isCorrect: false },
      ],
    },
    {
      questionText: "What is the Capital of France?",
      answerOptions: [
        { answerText: "Delhi", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
        { answerText: "London", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="LandingPage">
      <nav className="navbar">
        <ul>
          <li className="list">
            <a className="Home_list" href="/">
              HOME
            </a>
          </li>
          <li className="logout-but">
            <a className="Teacher_list" href="/">
              LOGOUT
            </a>
          </li>
        </ul>
      </nav>
      <div className="Maincontainer">
        <h1 className="teacher_title">Student Portal</h1>

        <div className="quiz">
          {showScore ? (
            <div className="score-section">
              You scored {score} out of {questions.length}
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span className="questionz">
                    Question {currentQuestion + 1}{" "}
                  </span>
                  /{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOptions) => (
                    <button
                      onClick={() =>
                        handleAnswerButtonClick(answerOptions.isCorrect)
                      }
                      className="ans-button"
                    >
                      {answerOptions.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

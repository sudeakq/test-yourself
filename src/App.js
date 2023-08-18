import React, { useState } from 'react';
import './App.css';

function App() {

  const [showFinalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "Kendimi başarılı görüyorum.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "bazen", isCorrect: false },
        { id: 3, text: "sık sık", isCorrect: true },

      ],
    },
    {
      text: "Diğer insanların yanında heyecanımı kontrol edebilirim.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "bazen", isCorrect: false },
        { id: 3, text: "sık sık", isCorrect: true },
      ],
    },
    {
      text: "Hayattaki zorluklarla başa çıkabilirim.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "bazen", isCorrect: false },
        { id: 3, text: "sık sık", isCorrect: true },
      ],
    },
    {
      text: "Sosyal etkinliklere katılmaktan çekinmem.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "bazen", isCorrect: false },
        { id: 3, text: "sık sık", isCorrect: true },
      ],
    },
    {
      text: "Kendimi rahatça ifade edebilirim.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "bazen", isCorrect: false },
        { id: 3, text: "sık sık", isCorrect: true },
      ],
    },
    {
      text: "Sorumluluk almaktan çekinmem.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "bazen", isCorrect: false },
        { id: 3, text: "sık sık", isCorrect: true },
      ],
    },
    {
      text: "Kendimi seviyorum.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "bazen", isCorrect: false },
        { id: 3, text: "sık sık", isCorrect: true },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setFinalResult(true);
    }
  }

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResult(false);
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>Özgüven Testi</h1>
        <h2>Skor:  {score}</h2>

        {
          showFinalResult ?
            <div className='result'>
              <h1>Sonuç:</h1>
              <h2>
                {score} out of {questions.length} you are - {(score / questions.length) * 100}% - self-confident
              </h2>
              <button onClick={() => restartGame()}>Baştan yap</button>
            </div>
            :
            <div className='question-card'>
              <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
              <h3>{questions[currentQuestion].text}</h3>
              <ul>
                {questions[currentQuestion].options.map((option) => {
                  return (
                    <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                  )
                })}
              </ul>
            </div>

        }




      </div>
    </div>
  );
}

export default App;
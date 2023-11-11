import { useState } from "react";
import "./Quiz.css";

const Quiz = ({ questions, masteries }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const { question, choices } = questions[currentQuestion];
  console.log(masteries);
  const ChangeCurrentQuestion = () => {
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const onAnswerClick = (selectedAnswer, index) => {
    setAnswerIndex(index);

    if (currentQuestion !== questions.length) {
      if (selectedAnswer.value) {
        for (const mastery in selectedAnswer.value) {
          masteries.forEach((masteryObj) => {
            if (mastery in masteryObj) {
              masteryObj[mastery] += selectedAnswer.value[mastery];
            }
          });
        }
        ChangeCurrentQuestion();
      }
    } else {
      setShowResult(true);
    }
  };

  const getTopMasteries = () => {
    return masteries
      .sort((a, b) => Object.values(b)[0] - Object.values(a)[0])
      .slice(0, 2);
  };

  const getMasteryCombinations = () => {
    const topMasteries = getTopMasteries();
    const combinations = [];
    const descriptions = [];

    const firstMastery = Object.keys(topMasteries[0])[0];
    const secondMastery = Object.keys(topMasteries[1])[0];
    const firstDescription = Object.values(topMasteries[0])[1];
    const secondDescription = Object.values(topMasteries[1])[1];


    combinations.push(`${firstMastery} and ${secondMastery}`);
    descriptions.push(`${firstDescription} and ${secondDescription}`)
    // Check if there are additional masteries with the same value as the second highest
    for (let i = 2; i < masteries.length; i++) {
      const currentMastery = Object.keys(masteries[i])[0];
      if (Object.values(masteries[i])[0] === Object.values(masteries[1])[0]) {
        combinations.push(`${firstMastery} and ${currentMastery}`);
      }
    }
    

    return combinations;
  };
  const getMasteryCombinationsDescriptions = () => {
    const topMasteries = getTopMasteries();
    const descriptions = [];
    const firstDescription = Object.values(topMasteries[0])[1];
    const secondDescription = Object.values(topMasteries[1])[1];

    descriptions.push(`${firstDescription} and ${secondDescription}`)
    // Check if there are additional masteries with the same value as the second highest
    for (let i = 2; i < masteries.length; i++) {
      const currentMasteryDescription = Object.values(masteries[i])[1];
      if (Object.values(masteries[i])[0] === Object.values(masteries[1])[0]) {
        descriptions.push(`${firstDescription} and ${currentMasteryDescription}`);
      }
    }
    
    console.log(descriptions)
    return descriptions;
  };

  return (
    <div className="container">
      <div className="quiz__container quiz__container--show">
        {!showResult ? (
          <>
            <div>
              <span className="active-question-no">{currentQuestion + 1}</span>
              <span className="total-question">/{questions.length}</span>
            </div>
            <h2>{question}</h2>
            <ul className="quiz__list">
              {choices.map((selectedAnswer, index) => (
                <li key={selectedAnswer.text}>
                  <button
                    onClick={() => onAnswerClick(selectedAnswer, index)}
                    className={`quiz__buttons ${
                      answerIndex === index ? "selected-answer" : null
                    }`}
                  >
                    {selectedAnswer.text}
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="quiz__result">
            <h3>You should try:</h3>
            {getMasteryCombinations().map((combination, index) => (
              <div key={index} className="quiz__combinations">
                <p>{combination}</p>
              </div>
            ))}
            {getMasteryCombinationsDescriptions().map((description, index) => (
              <div key={index} className="quiz__combinations">
                <p>{description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;

import { useState } from "react";
import "./Quiz.css";
import RadarChart from "../radarChart/radarChart";

const Quiz = ({ questions, masteries }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const { question, choices } = questions[currentQuestion];
  // console.log(masteries);
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

    const firstMastery = Object.keys(topMasteries[0])[0];
    const secondMastery = Object.keys(topMasteries[1])[0];

    combinations.push(`${firstMastery} and ${secondMastery}`);
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

    descriptions.push(`${firstDescription}`);
    descriptions.push(`${secondDescription}`);
    for (let i = 2; i < masteries.length; i++) {
      const currentMasteryDescription = Object.values(masteries[i])[1];
      if (Object.values(masteries[i])[0] === Object.values(masteries[1])[0]) {
        descriptions.push(`${currentMasteryDescription}`);
      }
    }

    // console.log(descriptions);
    return descriptions;
  };

  const getChartData = () => {
    const topMasteries = getTopMasteries();
    const chartsData = [];
    const firstMasteryChartData = Object.values(topMasteries[0])[2];
    const secondMasteryChartData = Object.values(topMasteries[1])[2];

    if (firstMasteryChartData && typeof firstMasteryChartData === "object") {
      const firstChartDataList = {
        label: Object.keys(topMasteries[0])[0], // Etykieta zestawu danych, widoczna w legendzie
        data: [], // Tablica wartości punktów w zestawie danych
        backgroundColor: "rgba(252, 147, 47, 0.7)", // Kolor wypełnienia obszaru pod linią
        borderColor: "rgba(252, 147, 47, 0.9)", // Kolor obramowania linii
        borderWidth: 1, // Grubość obramowania linii
        pointBorderWidth: 2, // Grubość obramowania punktów
        pointRadius: 2, // Rozmiar punktów
      };
      for (const key in firstMasteryChartData) {
        if (firstMasteryChartData.hasOwnProperty(key)) {
          const value = firstMasteryChartData[key];
          // console.log(`First mastery ${key}, ${value}`);
          firstChartDataList.data.push(value);
        }
      }
      chartsData.push(firstChartDataList);
    } else {
      console.error("firstMasteryChartData is not an object");
      // Możesz zwrócić pustą tablicę lub inny sposób obsługi błędu
    }

    if (secondMasteryChartData && typeof secondMasteryChartData === "object") {
      const secondChartDataList = {
        label: Object.keys(topMasteries[1])[0], // Etykieta zestawu danych, widoczna w legendzie
        data: [], // Tablica wartości punktów w zestawie danych
        backgroundColor: "rgba(124, 0, 195, 0.77)", // Kolor wypełnienia obszaru pod linią
        borderColor: "rgba(124, 0, 195, 1)", // Kolor obramowania linii
        borderWidth: 1, // Grubość obramowania linii
        pointBorderWidth: 2, // Grubość obramowania punktów
        pointRadius: 2, // Rozmiar punktów
      };
      for (const key in secondMasteryChartData) {
        if (secondMasteryChartData.hasOwnProperty(key)) {
          const value = secondMasteryChartData[key];
          // console.log(`Second mastery ${key}, ${value}`);
          secondChartDataList.data.push(value);
        }
      }
      chartsData.push(secondChartDataList);
    } else {
      console.error("secondMasteryChartData is not an object");
    }
    for (let i = 2; i < masteries.length; i++) {
      if (Object.values(masteries[i])[0] === Object.values(masteries[1])[0]) {
        const currentMasteryDataChartList = [];
        const currentMasteryDataChart = Object.values(masteries[i])[2];
        const restMasteryDataChart = {
          label: Object.keys(masteries[i])[0], // Etykieta zestawu danych, widoczna w legendzie
          data: [], // Tablica wartości punktów w zestawie danych
          backgroundColor: "rgba(32, 228, 63, 0.6)", // Kolor wypełnienia obszaru pod linią
          borderColor: "rgba(32, 228, 63, 1)", // Kolor obramowania linii
          borderWidth: 1, // Grubość obramowania linii
          pointBorderWidth: 2, // Grubość obramowania punktów
          pointRadius: 2, // Rozmiar punktów
        };
        for (const key in currentMasteryDataChart) {
          if (currentMasteryDataChart.hasOwnProperty(key)) {
            const value = currentMasteryDataChart[key];
            currentMasteryDataChartList.push(value);
            
          } else {
            console.log("error")
          }
        }
        restMasteryDataChart.data = currentMasteryDataChartList;
        chartsData.push(restMasteryDataChart);
      }
    }

    console.log(chartsData);
    return chartsData;
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
            <RadarChart
              datasets={getChartData()}
              options={RadarChart.options}
            />
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

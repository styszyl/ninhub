import Quiz from "./Quiz/Quiz";
import { jsQuizz } from "./constants";

function App() {
  return (
    <div>
      <h1>Quiz App</h1>
      <Quiz masteries={jsQuizz.masteries} questions={jsQuizz.questions} />
    </div>
  );
}

export default App;

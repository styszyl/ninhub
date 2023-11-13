import Quiz from "./Quiz/Quiz";
import { jsQuizz } from "./constants";

function App() {
  return (
    <div>
      <Quiz masteries={jsQuizz.masteries} questions={jsQuizz.questions} />
    </div>
  );
}

export default App;

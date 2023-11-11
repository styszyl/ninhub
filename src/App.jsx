import Quiz from "./Quiz/Quiz";
import { jsQuizz } from "./constants"

function App() {
  return <Quiz masteries={jsQuizz.masteries} questions={jsQuizz.questions} />
}

export default App

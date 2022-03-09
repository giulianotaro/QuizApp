import { useSelector } from "react-redux";
import FinalScreen from "./Components/FinalScreen";
import Settings from "./Components/Settings";
import Question from "./Components/Question";
import styles from "./App.module.scss";

function App() {
  const questions = useSelector((state) => state.questions);
  const questionIndex = useSelector((state) => state.index);

  let component;

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />;
  } else if (!questions.length) {
    component = <Settings />;
  } else {
    component = <FinalScreen />;
  }

  return (
    <div className={styles.App}>

      <div className={styles.leftDiv}>
       <h1>WELCOME.</h1>
       <h2> LET'S  GO! </h2> 
       </div>

      <div className={styles.quizContainer}>{component}</div>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import FetchButton from "../FetchButton";



const Settings = () => {
    

  const [options, setOptions] = useState(null);

  /* const [questionCategory, setQuestionCategory] = useState("");
  const [questionDifficulty, setQuestionDifficulty] = useState("");
  const [questionType, setQuestionType] = useState(""); */
 /*  const [number, setNumber] = useState(50); */

  const loading = useSelector(state => state.options.loading)
  const questionCategory = useSelector(state => state.options.question_category)
  const questionDifficulty = useSelector(state => state.options.question_difficulty)
  const questionType = useSelector(state => state.options.question_type)
  const number = useSelector(state => state.options.amount_of_questions)



  const quizDifficulty = require("./difficulty.json");
  const quizType = require("./type.json");

  const dispatch = useDispatch()

  useEffect(() => {

    const apiUrl = `https://opentdb.com/api_category.php`;
    const handleLoadingChange = value => {
      dispatch({
        type: 'CHANGE_LOADING',
        loading: value
      })
    }
    handleLoadingChange(true);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        handleLoadingChange(false);
        setOptions(response.trivia_categories);
      });
  }, [setOptions, dispatch]);

  const handleCategoryChange = event => {
    dispatch({
      type: 'CHANGE_CATEGORY',
      value: event.target.value
    })
  }
  const handleDifficultyChange = event => {
    dispatch({
      type: 'CHANGE_DIFFICULTY',
      value: event.target.value
    })
  }
  const handleTypeChange = event => {
    dispatch({
      type: 'CHANGE_TYPE',
      value: event.target.value
    })
  }
  const handleAmountChange = event => {
    dispatch({
      type: 'CHANGE_AMOUNT',
      value: event.target.value
    })
  }

  if (!loading) {

  return (

    <>
    <div>
      <h2>Select Category:</h2>
      <select value={questionCategory} onChange={handleCategoryChange}>
        <option>Category</option>
        {options &&
          options.map((option) => (
            <option value={option.id} key={option.id}>
              {option.name}
            </option>
          ))}
      </select>

      <h2>Select Difficulty:</h2>
      <select value={questionDifficulty} onChange={handleDifficultyChange}>
        <option>Difficulty</option>
        {quizDifficulty?.map((item, index) => (
          <option value={item.id} key={index}>
            {item.difficulty}
          </option>
        ))}
      </select>

      <h2>Select Type:</h2>
      <select value={questionType} onChange={handleTypeChange}>
        <option>Type</option>
        {quizType?.map((item, index) => (
          <option value={item.id} key={index}>
            {item.type}
          </option>
        ))}
      </select>

      

      <h2>Amount of Questions:</h2>
      <input value={number} onChange={handleAmountChange} />
    </div>

    <FetchButton text="START" />

    </>
  );
  
}
return (

  <p>
    LOADING...
  </p>
);

}


export default Settings;

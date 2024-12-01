import { useState,useCallback } from "react"
import QUESTIONS from "../questions.js"
import completeImage from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer];
        });

    }, [])

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if(quizIsComplete) {
        return (
            <div id="summary">
                <img src={completeImage} alt="Summary"/>
                <h2>Quiz Completed</h2>
            </div>
        )
    }
    

    return (
        <div id="quiz">
            <Question key = {activeQuestionIndex} questionIdx ={activeQuestionIndex} onSelectAnswer={handleSelectAnswer} onSkipAnswer = {handleSkipAnswer}/>
        </div>
        
    )
}
import { useState } from 'react'
import Question from '../components/Question'
import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'

const mockedQuestion = new QuestionModel(6, 'What the best player in Football History?', [
  AnswerModel.incorrect('Ronaldo'),
  AnswerModel.incorrect('Pelé'),
  AnswerModel.incorrect('Ronaldinho'),
  AnswerModel.incorrect('Maradona'),
  AnswerModel.correct('Messi'),
])

export default function Home() {
  const [question, setQuestion] = useState(mockedQuestion)

  function onAnswer(index: number) {
    console.log(index)
    setQuestion(question.answerWith(index))
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <Question 
        value={question} 
        onAnswer={onAnswer}
      />
    </div>
  )
}

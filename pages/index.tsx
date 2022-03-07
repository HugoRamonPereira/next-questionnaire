import Question from '../components/Question'
import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'

export default function Home() {
  const testQuestion = new QuestionModel(6, 'What the best player in Football History?', [
    AnswerModel.incorrect('Ronaldo'),
    AnswerModel.incorrect('Pelé'),
    AnswerModel.incorrect('Ronaldinho'),
    AnswerModel.incorrect('Maradona'),
    AnswerModel.correct('Messi'),
  ])

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <Question value={testQuestion} />
    </div>
  )
}

import styles from '../styles/Question.module.css'
import QuestionModel from "../model/question";
import QuestionTitle from './QuestionTitle';
import Answer from './Answer';

const alternatives = [
   { value: 'A', color: '#f2c866' },
   { value: 'B', color: '#32bdfc' },
   { value: 'C', color: '#f77fbe' },
   { value: 'D', color: '#a2db6d' },
   { value: 'E', color: '#cf9fff' },
]

interface QuestionProps {
   value: QuestionModel
   onAnswer: (index: number) => void
}

export default function Question(props: QuestionProps) {
   const question = props.value

   function renderAnswers() {
      return question.answers.map((answer, index) => {
         return <Answer 
            key={index}
            value={answer}
            index={index}
            alternative={alternatives[index].value}
            alternativeBGColor={alternatives[index].color}
            onAnswer={props.onAnswer}
         />
      })
   }

   return (
      <div className={styles.question}> 
         <QuestionTitle text={question.questionTitle} />
         {renderAnswers()}
      </div>
   )
}
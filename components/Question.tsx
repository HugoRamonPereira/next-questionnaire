import styles from '../styles/Question.module.css'
import QuestionModel from "../model/question";
import QuestionTitle from './QuestionTitle';
import Answer from './Answer';

interface QuestionProps {
   value: QuestionModel
}

export default function Question(props: QuestionProps) {
   const question = props.value

   function renderAnswers() {
      return question.answers.map((answer, index) => {
         return <Answer 
            key={index}
            value={answer}
            index={index}
            alternative="A"
            alternativeBGColor="#f2c866"
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
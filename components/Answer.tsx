import styles from '../styles/Answer.module.css'
import AnswerModel from "../model/answer"

interface AnswerProps {
   value: AnswerModel
   index: number
   alternative: string
   alternativeBGColor: string
   onAnswer: (index: number) => void
}

export default function Answer(props: AnswerProps) {
   const answer = props.value
   return (
      <div className={styles.answer} onClick={() => props.onAnswer(props.index)}>
         <div className={styles.answerContent}>
            {!answer.revealed ? (
               <div className={styles.front}>
                  <div className={styles.alternative}
                     style={{ backgroundColor: props.alternativeBGColor }}>
                     {props.alternative}
                  </div>
                  <div className={styles.value}>
                     {answer.value}
                  </div>
               </div>
            ) : (
               <div className={styles.back}>
                  {answer.correct ? (
                     <div className={styles.correct}>
                        <div>The correct answer is ...</div>
                        <div className={styles.value}>{answer.value}</div>
                     </div>
                  ) : (
                     <div className={styles.incorrect}>
                        <div>The answer you provided is incorrect ...</div>
                        <div className={styles.value}>{answer.value}</div>
                     </div>
                  )}
               </div>
            )}
         </div>
      </div>
   )
}
import { shuffle } from "../functions/array"
import answer from "./answer"
import AnswerModel from "./answer"

export default class QuestionModel {
   #id: number
   #questionTitle: string
   #answers: AnswerModel[]
   #gotItRight: boolean

   constructor(id: number, questionTitle: string, answers: AnswerModel[], gotItRight = false) {
      this.#id = id
      this.#questionTitle = questionTitle
      this.#answers = answers
      this.#gotItRight = gotItRight
   }

   get id() {
      return this.#id
   }
   get questionTitle() {
      return this.#questionTitle
   }
   get answers() {
      return this.#answers
   }
   get gotItRight() {
      return this.#gotItRight
   }
   get answered() {
      for(let answer of this.#answers) {
         if(answer.revealed) return true 
      }
      return false
   }

   turnIntoObject() {
      return {
         id: this.#id,
         questionTitle: this.#questionTitle,
         answers: this.#answers.map(answ => answ.turnIntoObject()),
         gotItRight: this.#gotItRight
      }
   }

   shuffleAnswers(): QuestionModel {
      let shuffledAnswers = shuffle(this.#answers)
      return new QuestionModel(this.#id, this.#questionTitle, shuffledAnswers, this.#gotItRight)
   }

   answerWith(index: number): QuestionModel {
      const gotItRight = this.#answers[index].correct
      const answers = this.#answers.map((answer, i) => {
         const selectedAnswer = index === i
         const mustReveal = selectedAnswer || answer.correct
         return mustReveal ? answer.reveal() : answer
   })
      return new QuestionModel(this.id, this.questionTitle, answers, gotItRight)
} 

}
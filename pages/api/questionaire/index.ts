import { shuffle } from "../../../functions/array"
import questions from "../questionsDB"


export default (req, res) => {
   const ids = questions.map(question => question.id)
   res.status(200).json(shuffle(ids))
}
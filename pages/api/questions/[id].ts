import question from "../../../model/question";
import questions from "../questionsDB";

export default (req, res) => {
  const selectedId = +req.query.id
  const onlyQuestion = questions.filter(question => question.id === selectedId)

  if(onlyQuestion.length === 1) {
    const selectedQuestion = onlyQuestion[0].shuffleAnswers()
    res.status(200).json(selectedQuestion.turnIntoObject())
  } else {
    res.status(204).send()
  }
 }
 
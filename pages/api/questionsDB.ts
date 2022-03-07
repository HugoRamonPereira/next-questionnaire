import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
   new QuestionModel(1, 'Which of these animals is venomous?', [
      // The answerModel with incorrect and correct parameters was set up as a static method inside the AnswerModel answer.ts file
      AnswerModel.incorrect('Bee'),
      AnswerModel.incorrect('Cockroach'),
      AnswerModel.incorrect('Eagle'),
      AnswerModel.correct('Scorpion'),
      AnswerModel.incorrect('Wolf'),   
   ]),
   new QuestionModel(2, 'When was written the current working Brazilian Constitution?', [
      AnswerModel.incorrect('1996'),
      AnswerModel.correct('1988'),
      AnswerModel.incorrect('2002'),
      AnswerModel.incorrect('1964'),
      AnswerModel.incorrect('1984'),   
   ]),
   new QuestionModel(3, 'Which country has the capital city of Oslo?', [
      AnswerModel.incorrect('Scotland'),
      AnswerModel.correct('Norway'),
      AnswerModel.incorrect('Denmark'),
      AnswerModel.incorrect('New Zealand'),
      AnswerModel.incorrect('Iceland'),   
   ]),
   new QuestionModel(4, 'What is the collective of wolf?', [
      AnswerModel.incorrect('A herd of wolves'),
      AnswerModel.incorrect('A flock of wolves'),
      AnswerModel.incorrect('A pod of wolves'),
      AnswerModel.correct('A pack of wolves'),
      AnswerModel.incorrect('A swarm of wolves'),   
   ]),
   new QuestionModel(5, 'What is the country that has the largest territory in the world?', [
      AnswerModel.incorrect('China'),
      AnswerModel.correct('Russia'),
      AnswerModel.incorrect('Canada'),
      AnswerModel.incorrect('United States'),
      AnswerModel.incorrect('Brazil'),   
   ])
]

export default questions
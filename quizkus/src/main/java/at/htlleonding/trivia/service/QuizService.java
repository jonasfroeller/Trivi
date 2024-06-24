package at.htlleonding.trivia.service;

import at.htlleonding.trivia.model.Answer;
import at.htlleonding.trivia.model.Question;
import at.htlleonding.trivia.repository.AnswersRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

@ApplicationScoped
public class QuizService {
    private static final int POINTS_FOR_SINGLE_CHOICE = 10;
    private static final int POINTS_FOR_MULTIPLE_CHOICE = 5;

    @Inject
    AnswersRepository answersRepository;

    public int checkAnswerAndCalculatePoints(long answerId) {
        int result = 0;

        Answer answer = this.answersRepository.findById(answerId);

        if(answer.getCorrect()) {
            Question question = answer.getQuestion();

            if(question.getMultipleChoice()) {
                result = POINTS_FOR_MULTIPLE_CHOICE;
            }
            else {
                result = POINTS_FOR_SINGLE_CHOICE;
            }
        }

        return result;
    }
}

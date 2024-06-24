package at.htlleonding.trivia.dto;

import at.htlleonding.trivia.model.Answer;
import at.htlleonding.trivia.model.Question;
import at.htlleonding.trivia.model.Topic;

import java.util.*;
import java.util.stream.Collectors;

public class QuestionDTO {
    private String text;
    private List<TopicDTO> topics;
    private List<AnswerDTO> answers;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public List<AnswerDTO> getAnswers() {
        return answers;
    }

    public void setAnswers(List<AnswerDTO> answers) {
        this.answers = answers;
    }

    public List<TopicDTO> getTopics() {
        return topics;
    }

    public void setTopics(List<TopicDTO> topics) {
        this.topics = topics;
    }

    public static QuestionDTO createFromQuestion(Question question) {
        QuestionDTO result = new QuestionDTO();

        result.text = question.getText();

        List<AnswerDTO> answers = question.getAnswers().stream().map(a -> new AnswerDTO(a.getId(), a.getText())).collect(Collectors.toList());
        Collections.shuffle(answers);

        result.answers = answers;

        result.topics = question.getTopics().stream().map(t -> new TopicDTO(t.getId(), t.getName())).toList();

        return result;
    }
}

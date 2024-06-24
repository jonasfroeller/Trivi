package at.htlleonding.trivia.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@NamedQuery(name = Question.QUERY_FIND_RANDOM, query = "SELECT q FROM Question q ORDER BY random()")
@NamedQuery(name = Question.QUERY_FIND_BY_ANSWER_ID, query = "SELECT q FROM Question q JOIN q.answers as a WHERE a.id = :id")
public class Question {
    public static final String QUERY_FIND_RANDOM = "Question.findRandom";
    public static final String QUERY_FIND_BY_ANSWER_ID = "Question.findByAnswerId";

    @Id
    private Long id;
    private String text;
    @Column(name = "is_multiple_choice")
    private Boolean isMultipleChoice;
    @OneToMany
    @JoinColumn(name = "question_id")
    private Set<Answer> answers;
    @ManyToMany(mappedBy = "questions")
    private Set<Topic> topics;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Boolean getMultipleChoice() {
        return isMultipleChoice;
    }

    public void setMultipleChoice(Boolean multipleChoice) {
        isMultipleChoice = multipleChoice;
    }

    public Set<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(Set<Answer> answers) {
        this.answers = answers;
    }

    public Set<Topic> getTopics() {
        return topics;
    }

    public void setTopics(Set<Topic> topics) {
        this.topics = topics;
    }
}

package at.htlleonding.trivia.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@NamedQuery(name=Topic.QUERY_FIND_ALL, query = "SELECT t FROM Topic t ORDER BY t.name")
public class Topic {
    public static final String QUERY_FIND_ALL = "Topic.findAll";
    @Id
    private Long id;
    private String name;
    @ManyToMany
    @JoinTable(
            name="Question_Topic",
            joinColumns = @JoinColumn(name="topic_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name="question_id", referencedColumnName = "id")
    )
    private Set<Question> questions;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(Set<Question> questions) {
        this.questions = questions;
    }
}

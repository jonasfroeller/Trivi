package at.htlleonding.trivia.repository;

import at.htlleonding.trivia.model.Question;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;

@ApplicationScoped
public class QuestionsRepository {
    @Inject
    EntityManager entityManager;

    public Question findRandomQuestion() {
        return this.entityManager.createNamedQuery(Question.QUERY_FIND_RANDOM, Question.class).setMaxResults(1).getResultList().get(0);
    }
}
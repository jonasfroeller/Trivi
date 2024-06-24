package at.htlleonding.trivia.repository;

import at.htlleonding.trivia.model.Answer;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;

@ApplicationScoped
public class AnswersRepository {
    @Inject
    EntityManager entityManager;

    public Answer findById(long id) {
        return this.entityManager.find(Answer.class, id);
    }
}

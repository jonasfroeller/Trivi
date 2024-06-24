package at.htlleonding.trivia.repository;

import at.htlleonding.trivia.model.Topic;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;

import java.util.List;

@ApplicationScoped
public class TopicsRepository {
    @Inject
    EntityManager entityManager;

    public List<Topic> findAll() {
        return this.entityManager.createNamedQuery(Topic.QUERY_FIND_ALL, Topic.class).getResultList();
    }

    public Topic findById(long id) {
        return this.entityManager.find(Topic.class, id);
    }
}

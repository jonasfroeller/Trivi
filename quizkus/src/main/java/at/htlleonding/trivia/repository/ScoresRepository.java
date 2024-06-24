package at.htlleonding.trivia.repository;

import at.htlleonding.trivia.model.Score;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;

import java.util.List;

@ApplicationScoped
public class ScoresRepository {
    @Inject
    EntityManager entityManager;

    public List<Score> findTopScores(int count) {
        return this.entityManager.createNamedQuery(Score.QUERY_FIND_ALL_SORTED, Score.class).getResultList().stream().limit(count).toList();
    }

    @Transactional
    public void addScore(int points) {
        Score score = new Score();
        score.setPoints(points);
        this.entityManager.persist(score);
    }
}

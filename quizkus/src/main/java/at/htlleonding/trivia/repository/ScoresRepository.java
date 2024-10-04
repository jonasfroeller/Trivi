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
    public void addScore(Score score) {
        this.entityManager.persist(score);

        this.entityManager.refresh(score);
    }

    @Transactional
    public void clearScores() {
        List<Score> scores = this.entityManager.createNamedQuery(Score.QUERY_FIND_ALL_SORTED, Score.class).getResultList();
        for (Score currScore : scores) {
            this.entityManager.remove(currScore);
        }
    }

    public Score findById(long id) {
        return this.entityManager.find(Score.class, id);
    }
}

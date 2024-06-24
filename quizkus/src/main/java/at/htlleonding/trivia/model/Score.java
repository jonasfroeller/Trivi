package at.htlleonding.trivia.model;

import jakarta.persistence.*;

@Entity
@NamedQuery(name = Score.QUERY_FIND_ALL_SORTED, query = "SELECT s FROM Score s ORDER BY s.points DESC")
public class Score {
    public static final String QUERY_FIND_ALL_SORTED = "Score.findAllSorted";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int points;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }
}

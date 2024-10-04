package at.htlleonding.trivia.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@NamedQuery(name = Score.QUERY_FIND_ALL_SORTED, query = "SELECT s FROM Score s ORDER BY s.points DESC")
public class Score {
    public static final String QUERY_FIND_ALL_SORTED = "Score.findAllSorted";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nickname;
    private String email;
    @Column(name = "country_of_birth")
    private String country;
    private Integer age;
    @Column(name = "date_submitted", updatable = false, insertable = false)
    private LocalDate dateSubmitted;
    private Integer points;

    public Score() {
    }

    public Score(String nickname, String email, String country, Integer age, Integer points) {
        this.nickname = nickname;
        this.email = email;
        this.country = country;
        this.age = age;
        this.points = points;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public LocalDate getDateSubmitted() {
        return dateSubmitted;
    }

    public void setDateSubmitted(LocalDate dateSubmitted) {
        this.dateSubmitted = dateSubmitted;
    }
}

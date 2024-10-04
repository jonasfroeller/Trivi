package at.htlleonding.trivia.boundary;

import at.htlleonding.trivia.model.Score;
import at.htlleonding.trivia.repository.ScoresRepository;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/api/scores")
public class ScoresBoundary {
    @Inject
    ScoresRepository scoresRepository;

    @GET
    @Path("/top/{count}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Score> findTopScores(@PathParam("count") int count) {
        return this.scoresRepository.findTopScores(count);
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Score findById(@PathParam("id") long id) {
        return this.scoresRepository.findById(id);
    }

    @POST
    @Path("/")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response addScore(Score score) {
        this.scoresRepository.addScore(score);

        return Response.status(Response.Status.CREATED)
                .entity(score)
                .build();
    }

    @POST
    @Path("/reset")
    public void resetScores() {
        this.scoresRepository.clearScores();

        this.scoresRepository.addScore(new Score("Stinka", "stinka@meow.at", "Austria", 16, 15));
        this.scoresRepository.addScore(new Score("Lilu", "lilu@whiskas.at", "Austria", 15, 45));
        this.scoresRepository.addScore(new Score("EinStein", "onestone@example.com", "", 76, 70));
        this.scoresRepository.addScore(new Score("Leiwandowski", "robert@wp.pl", "Poland", 35, 5));
        this.scoresRepository.addScore(new Score("johndoe", "jd@gmail.com", "USA", 45, 50));
        this.scoresRepository.addScore(new Score("Voestler", "nurderskv@blauweiss.at", "Austria", 74, 30));
    }
}
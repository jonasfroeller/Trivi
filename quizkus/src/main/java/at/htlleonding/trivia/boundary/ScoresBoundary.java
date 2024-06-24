package at.htlleonding.trivia.boundary;

import at.htlleonding.trivia.repository.ScoresRepository;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

@Path("/api/scores")
public class ScoresBoundary {
    @Inject
    ScoresRepository scoresRepository;

    @GET
    @Path("/top/{count}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Integer> findTopScores(@PathParam("count") int count) {
        return this.scoresRepository.findTopScores(count).stream().map(s -> s.getPoints()).toList();
    }

    @POST
    @Path("/")

    public void addScore(int points) {
        this.scoresRepository.addScore(points);
    }
}

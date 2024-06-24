package at.htlleonding.trivia.boundary;

import at.htlleonding.trivia.service.QuizService;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/api/answers")
public class AnswersBoundary {
    @Inject
    QuizService quizService;

    @GET
    @Path("/{id}/check")
    @Produces(MediaType.TEXT_PLAIN)
    public int checkAnswerAndCalculatePoints(@PathParam("id") long id) {
        return this.quizService.checkAnswerAndCalculatePoints(id);
    }
}

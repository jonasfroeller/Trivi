package at.htlleonding.trivia.boundary;

import at.htlleonding.trivia.dto.QuestionDTO;
import at.htlleonding.trivia.model.Question;
import at.htlleonding.trivia.repository.QuestionsRepository;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/api/questions")
public class QuestionsBoundary {
    @Inject
    QuestionsRepository questionsRepository;

    @GET
    @Path("/random")
    @Produces(MediaType.APPLICATION_JSON)
    public QuestionDTO findRandomQuestion() {
        return QuestionDTO.createFromQuestion(this.questionsRepository.findRandomQuestion());
    }

    @GET
    @Path("/check-answer/{id}")
    @Produces(MediaType.TEXT_PLAIN)
    public int calculatePointsForAnswer(@PathParam("id")long idAnswer) {
        //Question question = this.questionsRepository.findQuestionByAnswerId(idAnswer);
        return -1;
    }
}

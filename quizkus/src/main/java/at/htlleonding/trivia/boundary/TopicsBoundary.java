package at.htlleonding.trivia.boundary;

import at.htlleonding.trivia.dto.QuestionDTO;
import at.htlleonding.trivia.dto.TopicDTO;
import at.htlleonding.trivia.model.Topic;
import at.htlleonding.trivia.repository.TopicsRepository;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import java.util.List;
import java.util.Set;

@Path("/api/topics")
public class TopicsBoundary {
    @Inject
    TopicsRepository topicsRepository;

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<TopicDTO> getNames() {
        return this.topicsRepository.findAll().stream().map(t -> new TopicDTO(t.getId(), t.getName())).toList();
    }

    @GET
    @Path("/{id}/questions")
    @Produces(MediaType.APPLICATION_JSON)
    public List<QuestionDTO> getQuestionsByTopic(@PathParam("id")long id) {
        return this.topicsRepository.findById(id).getQuestions().stream().map(QuestionDTO::createFromQuestion).toList();
    }
}

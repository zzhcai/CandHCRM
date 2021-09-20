package candh.crm.payload.request.chat;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.Date;

@Getter
@Setter

/**
 * Request body parameters for /chat/fetch.
 */
public class FetchReadRequest
{
    /** id of the chat message sender */
    @NotBlank
    private String id;
    @NotBlank
    private Date until;
}

package candh.crm.model;

import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

@ToString

@Document(collection = "meeting")
public class Meeting
{

    @Id
    private String id;
    private String hostId;
    private String[] participantIds;
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    @CreatedDate
    private Date startTime;
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    @CreatedDate
    private Date endTime;
    private String title;
    private String notes;

    public Meeting(String hostId, String[] participantIds, Date startTime,
                   Date endTime, String title, String notes)
    {
        this.hostId = hostId;
        this.participantIds = participantIds;
        this.startTime = startTime;
        this.endTime = endTime;
        this.title = title;
        this.notes = notes;
    }

    public String getId() {
        return id;
    }

    public String getHostId() {
        return hostId;
    }

    public void setHostId(String hostId) {
        this.hostId = hostId;
    }

    public String[] getParticipantIds() {
        return participantIds;
    }

    public void setParticipantIds(String[] participantIds) {
        this.participantIds = participantIds;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}

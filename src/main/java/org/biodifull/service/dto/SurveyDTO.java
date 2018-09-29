package org.biodifull.service.dto;

import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the Survey entity.
 */
public class SurveyDTO implements Serializable {

    private Long id;

    private String surveyName;

    private String surveyDescription;

    private String formURL;

    private String challengersLocation;

    private Boolean open;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSurveyName() {
        return surveyName;
    }

    public void setSurveyName(String surveyName) {
        this.surveyName = surveyName;
    }

    public String getSurveyDescription() {
        return surveyDescription;
    }

    public void setSurveyDescription(String surveyDescription) {
        this.surveyDescription = surveyDescription;
    }

    public String getFormURL() {
        return formURL;
    }

    public void setFormURL(String formURL) {
        this.formURL = formURL;
    }

    public String getChallengersLocation() {
        return challengersLocation;
    }

    public void setChallengersLocation(String challengersLocation) {
        this.challengersLocation = challengersLocation;
    }

    public Boolean isOpen() {
        return open;
    }

    public void setOpen(Boolean open) {
        this.open = open;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        SurveyDTO surveyDTO = (SurveyDTO) o;
        if (surveyDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), surveyDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "SurveyDTO{" +
            "id=" + getId() +
            ", surveyName='" + getSurveyName() + "'" +
            ", surveyDescription='" + getSurveyDescription() + "'" +
            ", formURL='" + getFormURL() + "'" +
            ", challengersLocation='" + getChallengersLocation() + "'" +
            ", open='" + isOpen() + "'" +
            "}";
    }
}

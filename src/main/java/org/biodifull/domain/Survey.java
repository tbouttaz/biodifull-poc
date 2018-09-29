package org.biodifull.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Survey.
 */
@Entity
@Table(name = "survey")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Survey implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "survey_name")
    private String surveyName;

    @Column(name = "survey_description")
    private String surveyDescription;

    @Column(name = "form_url")
    private String formURL;

    @Column(name = "challengers_location")
    private String challengersLocation;

    @Column(name = "jhi_open")
    private Boolean open;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSurveyName() {
        return surveyName;
    }

    public Survey surveyName(String surveyName) {
        this.surveyName = surveyName;
        return this;
    }

    public void setSurveyName(String surveyName) {
        this.surveyName = surveyName;
    }

    public String getSurveyDescription() {
        return surveyDescription;
    }

    public Survey surveyDescription(String surveyDescription) {
        this.surveyDescription = surveyDescription;
        return this;
    }

    public void setSurveyDescription(String surveyDescription) {
        this.surveyDescription = surveyDescription;
    }

    public String getFormURL() {
        return formURL;
    }

    public Survey formURL(String formURL) {
        this.formURL = formURL;
        return this;
    }

    public void setFormURL(String formURL) {
        this.formURL = formURL;
    }

    public String getChallengersLocation() {
        return challengersLocation;
    }

    public Survey challengersLocation(String challengersLocation) {
        this.challengersLocation = challengersLocation;
        return this;
    }

    public void setChallengersLocation(String challengersLocation) {
        this.challengersLocation = challengersLocation;
    }

    public Boolean isOpen() {
        return open;
    }

    public Survey open(Boolean open) {
        this.open = open;
        return this;
    }

    public void setOpen(Boolean open) {
        this.open = open;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Survey survey = (Survey) o;
        if (survey.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), survey.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Survey{" +
            "id=" + getId() +
            ", surveyName='" + getSurveyName() + "'" +
            ", surveyDescription='" + getSurveyDescription() + "'" +
            ", formURL='" + getFormURL() + "'" +
            ", challengersLocation='" + getChallengersLocation() + "'" +
            ", open='" + isOpen() + "'" +
            "}";
    }
}

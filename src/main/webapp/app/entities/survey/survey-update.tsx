import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './survey.reducer';
import { ISurvey } from 'app/shared/model/survey.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ISurveyUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface ISurveyUpdateState {
  isNew: boolean;
}

export class SurveyUpdate extends React.Component<ISurveyUpdateProps, ISurveyUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentDidMount() {
    if (!this.state.isNew) {
      this.props.getEntity(this.props.match.params.id);
    }
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { surveyEntity } = this.props;
      const entity = {
        ...surveyEntity,
        ...values
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
      this.handleClose();
    }
  };

  handleClose = () => {
    this.props.history.push('/entity/survey');
  };

  render() {
    const { surveyEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="biodifullpocApp.survey.home.createOrEditLabel">
              <Translate contentKey="biodifullpocApp.survey.home.createOrEditLabel">Create or edit a Survey</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : surveyEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="survey-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="surveyNameLabel" for="surveyName">
                    <Translate contentKey="biodifullpocApp.survey.surveyName">Survey Name</Translate>
                  </Label>
                  <AvField id="survey-surveyName" type="text" name="surveyName" />
                </AvGroup>
                <AvGroup>
                  <Label id="surveyDescriptionLabel" for="surveyDescription">
                    <Translate contentKey="biodifullpocApp.survey.surveyDescription">Survey Description</Translate>
                  </Label>
                  <AvField id="survey-surveyDescription" type="text" name="surveyDescription" />
                </AvGroup>
                <AvGroup>
                  <Label id="formURLLabel" for="formURL">
                    <Translate contentKey="biodifullpocApp.survey.formURL">Form URL</Translate>
                  </Label>
                  <AvField id="survey-formURL" type="text" name="formURL" />
                </AvGroup>
                <AvGroup>
                  <Label id="challengersLocationLabel" for="challengersLocation">
                    <Translate contentKey="biodifullpocApp.survey.challengersLocation">Challengers Location</Translate>
                  </Label>
                  <AvField id="survey-challengersLocation" type="text" name="challengersLocation" />
                </AvGroup>
                <AvGroup>
                  <Label id="openLabel" check>
                    <AvInput id="survey-open" type="checkbox" className="form-control" name="open" />
                    <Translate contentKey="biodifullpocApp.survey.open">Open</Translate>
                  </Label>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/survey" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />&nbsp;
                  <span className="d-none d-md-inline">
                    <Translate contentKey="entity.action.back">Back</Translate>
                  </span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />&nbsp;
                  <Translate contentKey="entity.action.save">Save</Translate>
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  surveyEntity: storeState.survey.entity,
  loading: storeState.survey.loading,
  updating: storeState.survey.updating
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyUpdate);

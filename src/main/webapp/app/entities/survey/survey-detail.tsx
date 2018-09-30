import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './survey.reducer';
import { ISurvey } from 'app/shared/model/survey.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ISurveyDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class SurveyDetail extends React.Component<ISurveyDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { surveyEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="biodifullpocApp.survey.detail.title">Survey</Translate> [<b>{surveyEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="surveyName">
                <Translate contentKey="biodifullpocApp.survey.surveyName">Survey Name</Translate>
              </span>
            </dt>
            <dd>{surveyEntity.surveyName}</dd>
            <dt>
              <span id="surveyDescription">
                <Translate contentKey="biodifullpocApp.survey.surveyDescription">Survey Description</Translate>
              </span>
            </dt>
            <dd>{surveyEntity.surveyDescription}</dd>
            <dt>
              <span id="formURL">
                <Translate contentKey="biodifullpocApp.survey.formURL">Form URL</Translate>
              </span>
            </dt>
            <dd>{surveyEntity.formURL}</dd>
            <dt>
              <span id="embededForm">
                <Translate contentKey="biodifullpocApp.survey.form.embedded">Embedded Form</Translate>
              </span>
            </dt>
            <dd>
              <iframe src={surveyEntity.formURL} width="700" height="520">
                Loading...
              </iframe>
            </dd>
            <dt>
              <span id="challengersLocation">
                <Translate contentKey="biodifullpocApp.survey.challengersLocation">Challengers Location</Translate>
              </span>
            </dt>
            <dd>{surveyEntity.challengersLocation}</dd>
            <dt>
              <span id="open">
                <Translate contentKey="biodifullpocApp.survey.open">Open</Translate>
              </span>
            </dt>
            <dd>{surveyEntity.open ? 'true' : 'false'}</dd>
          </dl>
          <Button tag={Link} to="/entity/survey" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/survey/${surveyEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
          <Button tag={Link} to={`/entity/survey/${surveyEntity.id}/answer`} replace color="info">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              Answer this survey
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ survey }: IRootState) => ({
  surveyEntity: survey.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyDetail);

import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {RadioGroup, Radio} from 'react-radio-group'

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './survey.reducer';
import { ISurvey } from 'app/shared/model/survey.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ISurveyAnswerProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class SurveyAnswer extends React.Component<ISurveyAnswerProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { surveyEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            Thank you for taking the survey [<b>{surveyEntity.surveyName}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="surveyDescription">
                <Translate contentKey="biodifullpocApp.survey.surveyDescription">Survey Description</Translate>
              </span>
            </dt>
            <dd>{surveyEntity.surveyDescription}</dd>
            <dt>
              <span id="embededForm">
                Which picture do you prefer?
              </span>
            </dt>
            <dd>
              {/* TODO - use Flikr API?
              http://cassandra.gelvins.com/tools/randm-flickr-pickr/
              https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d61091b4772d0e40c3743b6a5fc54084&license=&min_upload_date=1536113113&max_upload_date=1536120313&orientation=landscape,portrait,square,panorama&safe_search=1&url_o&per_page=100&format=json&nojsoncallback=1
              https://www.flickr.com/services/api/flickr.collections.getTree.html
              https://www.flickr.com/photos/{user-id}/{photo-id} - individual photo
              https://www.flickr.com/services/api/misc.urls.html */}

            <RadioGroup name="match1">
              <Radio value="photo1" />GOPR0111_0853 <img src="content/images/survey/GOPR0111_0853.png"></img>
              <Radio value="photo2" />GOPR0111_2136 <img src="content/images/survey/GOPR0111_2136.png"></img>
            </RadioGroup>
            </dd>
            <dt>
              <span id="embededForm">
                Please answer the following questions:
              </span>
            </dt>
            <dd>
              <iframe src={surveyEntity.formURL} width="700" height="520">
                Loading...
              </iframe>
            </dd>
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
)(SurveyAnswer);

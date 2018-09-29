import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './answer.reducer';
import { IAnswer } from 'app/shared/model/answer.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAnswerDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class AnswerDetail extends React.Component<IAnswerDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { answerEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="biodifullpocApp.answer.detail.title">Answer</Translate> [<b>{answerEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="jugeID">
                <Translate contentKey="biodifullpocApp.answer.jugeID">Juge ID</Translate>
              </span>
            </dt>
            <dd>{answerEntity.jugeID}</dd>
            <dt>
              <span id="challenger1">
                <Translate contentKey="biodifullpocApp.answer.challenger1">Challenger 1</Translate>
              </span>
            </dt>
            <dd>{answerEntity.challenger1}</dd>
            <dt>
              <span id="challenger2">
                <Translate contentKey="biodifullpocApp.answer.challenger2">Challenger 2</Translate>
              </span>
            </dt>
            <dd>{answerEntity.challenger2}</dd>
            <dt>
              <span id="winner">
                <Translate contentKey="biodifullpocApp.answer.winner">Winner</Translate>
              </span>
            </dt>
            <dd>{answerEntity.winner}</dd>
            <dt>
              <Translate contentKey="biodifullpocApp.answer.survey">Survey</Translate>
            </dt>
            <dd>{answerEntity.surveyId ? answerEntity.surveyId : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/answer" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/answer/${answerEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ answer }: IRootState) => ({
  answerEntity: answer.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerDetail);

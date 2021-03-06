import './home.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate, TranslatorContext } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import { getEntities, reset } from 'app/entities/survey/survey.reducer';

export interface IHomeProp extends StateProps, DispatchProps {}

export class Home extends React.Component<IHomeProp> {
  componentDidMount() {
    this.props.getSession();
  }

  componentWillMount() {
    this.getEntities();
  }

  getEntities = () => {
    this.props.getEntities(0, 20, 'id,asc');
  };

  render() {
    const { surveyList, account } = this.props;
    const currentLocale = TranslatorContext.context.locale || TranslatorContext.context.defaultLocale;

    return (
      <Row>
        <Col md="9">
          <h2>
            <Translate contentKey="home.title">Welcome to the Biodifull Project!</Translate>
          </h2>
          <p className="lead">
            <Translate contentKey="home.subtitle">The Biodifull project aims to ...</Translate>
          </p>
          {account && account.login ? (
            <div>
              <Alert color="success">
                <Translate contentKey="home.logged.message" interpolate={{ username: account.login }}>
                  You are logged in as user {account.login}.
                </Translate>
              </Alert>
            </div>
          ) : (
            <div>
              <Alert color="warning">
                <Translate contentKey="global.messages.info.authenticated.prefix">If you want to </Translate>
                <Link to="/login" className="alert-link">
                  <Translate contentKey="global.messages.info.authenticated.link"> sign in</Translate>
                </Link>
                <Translate contentKey="global.messages.info.authenticated.suffix">
                  , you can try the default accounts:
                  <br />- Administrator (login=&quot;admin&quot; and password=&quot;admin&quot;)
                  <br />- User (login=&quot;user&quot; and password=&quot;user&quot;).
                </Translate>
              </Alert>

              <Alert color="warning">
                <Translate contentKey="global.messages.info.register.noaccount">You do not have an account yet?</Translate>&nbsp;
                <Link to="/register" className="alert-link">
                  <Translate contentKey="global.messages.info.register.link">Register a new account</Translate>
                </Link>
              </Alert>
            </div>
          )}

          {/* TODO - Display appropriate name according to Locale */}
          <p>Current locale: {currentLocale}</p>

          <p>
            <Translate contentKey="home.survey.list">You can answer the following surveys</Translate>
          </p>

          <ul>
            {surveyList.map((survey, i) => (
              <li>
                <a href={`#/entity/survey/${survey.id}/answer`} rel="noopener noreferrer">
                  {survey.surveyName}
                </a>
              </li>
            ))}
          </ul>

          <p>
            <Translate contentKey="home.like">If you like Biodifull, do not forget to give us a star on</Translate>{' '}
            <a href="https://github.com/tbouttaz/biodifull-poc" target="_blank" rel="noopener noreferrer">
              Github
            </a>!
          </p>
        </Col>
        <Col md="3" className="pad">
          <span className="hipster rounded" />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
  surveyList: storeState.survey.entities
});

const mapDispatchToProps = { getEntities, getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

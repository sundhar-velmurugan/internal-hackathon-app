import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import ChallengesList from '../../Challenge/ChallengesList/ChallengesList';
import ChallengeFormContainer from '../../Challenge/ChallengeFormContainer/ChallengeFormContainer';
import ChallengeDetailView from '../../Challenge/ChallengeDetailView/ChallengeDetailView';
import EditChallengeContainer from '../../Challenge/EditChallengeContainer/EditChallengeContainer';

import NotFound from '../../../component/NotFound/NotFound';

const ChallengeRouter = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={path} exact>
        <ChallengesList />
      </Route>
      <Route path={`${path}/add`} exact>
        <ChallengeFormContainer />
      </Route>
      <Route path={`${path}/:challengeId`} exact>
        <ChallengeDetailView />
      </Route>
      <Route path={`${path}/:challengeId/edit`} exact>
        <EditChallengeContainer />
      </Route>
      <Route path={`${path}/*`}>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default ChallengeRouter;

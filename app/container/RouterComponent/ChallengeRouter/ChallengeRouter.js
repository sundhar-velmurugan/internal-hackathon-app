import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import ChallengesList from '../../Challenge/ChallengesList/ChallengesList';
import AddChallenge from '../../Challenge/AddChallenge/AddChallenge';
import ChallengeDetailView from '../../Challenge/ChallengeDetailView/ChallengeDetailView';
import ChallengeEditView from '../../Challenge/ChallengeEditView/ChallengeEditView';

import NotFound from '../../../component/NotFound/NotFound';

const ChallengeRouter = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={path} exact>
        <ChallengesList />
      </Route>
      <Route path={`${path}/add`} exact>
        <AddChallenge />
      </Route>
      <Route path={`${path}/:challengeId`} exact>
        <ChallengeDetailView />
      </Route>
      <Route path={`${path}/:challengeId/edit`} exact>
        <ChallengeEditView />
      </Route>
      <Route path={`${path}/*`}>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default ChallengeRouter;

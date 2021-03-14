import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import TagList from '../../Tag/TagList/TagList';
import TagDetail from '../../Tag/TagDetail/TagDetail';

import NotFound from '../../../component/NotFound/NotFound';

const TagRouter = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={path} exact>
        <TagList />
      </Route>
      <Route path={`${path}/:tagName`} exact>
        <TagDetail />
      </Route>
      <Route path={`${path}/:tagName/*`}>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default TagRouter;

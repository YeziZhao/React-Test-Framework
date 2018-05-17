import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import ComposeContainer from './containers/ComposeContainer';
// import CurrentCDNVersionContainer from './containers/CurrentCDNVersionContainer';
// import AppVersionHistoryContainer from './containers/AppVersionHistoryContainer';

export default (
    <div>
        <Switch>
            <Route exact path="/" component={ComposeContainer} />
            {/* <Route exact path="/create" component={ComposeContainer} />
            <Route exact path="/CDNVersion" component={CurrentCDNVersionContainer} />
            <Route exact path="/storage" component={AppVersionHistoryContainer} /> */}
        </Switch>
    </div>
);
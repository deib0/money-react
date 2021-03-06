import React from 'react';
import Money from "views/Money";
import Statistics from "views/Statistics";
import NoMatch from "views/NoMatch";
import Tags from "views/Tags";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { Tag } from 'views/Tag';
function App() {
  return (
    <Router>
            <Switch>
                <Route exact path="/tags">
                <Tags/>
                </Route>
                <Route exact path="/tags/:tagId">
                <Tag />
                </Route>
                <Route path="/money">
                <Money/>
                </Route>
                <Route path="/statistics">
                <Statistics/>
                </Route>
                <Redirect exact from="/" to="/money"/>
                <Route path="*">
                <NoMatch/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
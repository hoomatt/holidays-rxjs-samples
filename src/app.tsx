import * as React from "react";
import "./app.css";

import { MapSample } from './map/mapSample'
import { MergeMapSample } from './mergeMap/mergeMapSample'
import { Switch, Route } from "react-router";
import { SwitchMapSample } from "./switchMap/switchMapSample";
import { FilterSample } from "./filter/filterSample";

export class App extends React.Component {
  private routes = [
    { path: "map", component: MapSample },
    { path: "mergeMap", component: MergeMapSample },
    { path: "switchMap", component: SwitchMapSample },
    { path: "filter", component: FilterSample },
  ];

  render() {
    return (
      <div>
        <ul>
          {this.routes.map(route =>
            <li key={route.path}><a href={`/${route.path}`}>{route.path}</a></li>
          )}
        </ul>
        <Switch>
          {this.routes.map(route =>
            <Route key={route.path} path={`/${route.path}`} component={route.component} />
          )}
        </Switch>
      </div>
    );
  }
}

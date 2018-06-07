import * as React from "react";
import "./app.css";

import { MapSample } from './map/mapSample'
import { MergeMapSample } from './mergeMap/mergeMapSample'
import { Switch, Route } from "react-router";
import { SwitchMapSample } from "./switchMap/switchMapSample";
import { FilterSample } from "./filter/filterSample";
import { CombineLatestSample } from "./combineLatest/combineLatestSample";
import { ReduceSample } from "./reduce/reduceSample";
import { ScanSample } from "./scan/scanSample";
import { OfSample } from "./of/ofSample";
import { ShareSample } from "./share/shareSample";
import { ShareReplaySample } from "./shareReplay/shareReplaySample";
import { CatchErrorSample } from "./catchError/catchErrorSample";
import { DistinctUntilChangedSample } from "./distinctUntilChanged/distinctUntilChangedSample";
import { DebounceTimeSample } from "./debounceTime/debounceTimeSample";
import { ZipSample } from "./zip/zipSample";

export class App extends React.Component {
  private routes = [
    { path: "map", component: MapSample },
    { path: "mergeMap", component: MergeMapSample },
    { path: "switchMap", component: SwitchMapSample },
    { path: "filter", component: FilterSample },
    { path: "combineLatest", component: CombineLatestSample },
    { path: "reduce", component: ReduceSample },
    { path: "scan", component: ScanSample },
    { path: "of", component: OfSample },
    { path: "share", component: ShareSample },
    { path: "shareReplay", component: ShareReplaySample },
    { path: "catchError", component: CatchErrorSample },
    { path: "distinctUntilChanged", component: DistinctUntilChangedSample },
    { path: "debounceTime", component: DebounceTimeSample },
    { path: "zip", component: ZipSample },
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

import * as React from "react";
import { hot } from "react-hot-loader";


class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <p>Fuzz  dsfsd to the furz</p>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);

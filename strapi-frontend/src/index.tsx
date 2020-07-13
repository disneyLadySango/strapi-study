import React from "react";
import ReactDom from "react-dom";
import { Router } from "react-router";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { createBrowserHistory } from "history";
import './index.css';
import List from './components/list';

const history = createBrowserHistory();

// ここでApollo Clientの初期化
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql"
});

export default function App() {
  return (
    <Router history={history}>
      <ApolloProvider client={client}>
        <div>
          <h1>Sample Strapi Project</h1>
          <List />
        </div>
      </ApolloProvider>
    </Router>
  );
}

ReactDom.render(<App />, document.getElementById("app"));

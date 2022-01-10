import React from "react";
import Navbar from './component/Navbar';
import Write from './pages/Write';
import BoardList from './component/BoardList';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/write">
              <h1>글쓰기</h1>
              <Write />
            </Route>
            <Route path="/board1">
              <h1>게시판1</h1>
              <BoardList />
            </Route>
            <Route path="/board2">
              <h1>게시판2</h1>
            </Route>
            <Route path="/board3">
              <h1>게시판3</h1>
            </Route>
            <Route path="/">
              <h1>홈</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

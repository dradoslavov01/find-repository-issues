import './App.css';

import HomePage from './Components/HomePage/HomePage';
import ShowIssues from './Components/ShowIssues/ShowIssues';
import ShowComments from './Components/ShowComments/ShowComments';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Route path="/" exact component={HomePage} />
      <Route path="/" exact component={ShowIssues} />
      <Route path="/comments" component={ShowComments} />
    </div>
  );
}

export default App;

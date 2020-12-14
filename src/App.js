import {useState} from 'react'
import Form from './components/Form/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import UsersDisplay from './components/UsersDisplay/UsersDisplay';

function App() {

const [responseData, setResponseData] = useState(null);
const [searchItem, setSearchItem] = useState(null);



  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/list">
            <UsersDisplay displayData={responseData}/>
          </Route>
          <Route path="/">
            <Form updateSearch={setSearchItem} updateResponseData={setResponseData} sItems={searchItem} />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

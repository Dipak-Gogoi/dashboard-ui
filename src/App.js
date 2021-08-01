import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SideMenu from "./component/Navbar/SideMenu";
import Sidebar from './component/Navbar/Sidebar';
import Topbar from './component/Navbar/Topbar';
import AllContents from './component/Projects/AllContents';


function App() {
  const [inActive, setInActive] = useState(true);

  const onCollapse = (inActive) => {
    setInActive(!inActive);
  };

  return (
    <div className="App">
      <Router>
        <Sidebar onCollapse={onCollapse} />
        <Topbar />
        <SideMenu />
        <div className={`container ${inActive ? '' : 'inactive'}`}>
          <Switch>
            <Route exact path='/'>
              <AllContents />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

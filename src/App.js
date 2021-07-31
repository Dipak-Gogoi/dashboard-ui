import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SideMenu from "./component/Navbar/SideMenu";
import Sidebar from './component/Navbar/Sidebar';
import Topbar from './component/Navbar/Topbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Topbar />
        <SideMenu />
        <Switch>
          <Route>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

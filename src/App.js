import { Route, Switch, Redirect } from "react-router-dom";
import Footer from './components/Contact';
import Menu from './components/Menu';
import Software from './components/Software';
import Header from './components/Header';
import MenuIcon from './components/MenuIcon';


function App() {
  return (
    <div id="wrapper">
      <MenuIcon />
      <Header />
        <Switch>
          <Route path="/swe">
            <Software />
          </Route>
          <Route path='/woodworker'>
            <></>
          </Route>
          <Redirect to='/swe' />
        </Switch>
      <Footer />
      <Menu />
    </div>
  );
}

export default App;

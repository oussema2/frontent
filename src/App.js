import { Route, Switch, useHistory } from 'react-router-dom';
/* import './App.css'; */
import Home from './compoonents/Home/Home'
import Navbar from './compoonents/Navbar/index'
import Tournament from './compoonents/Tournaments/Tournaments'
import News from './compoonents/News/News'
import Games from "./compoonents/Games/Games"
import TournamentDetails from './compoonents/TournamentDetails/TournamentDetails';
import SignIn from './compoonents/signIn/signIn';
import SignUp from './compoonents/SignUp/SignUp';
import Profile from './compoonents/profile/Profile';
import { useEffect, useState } from 'react';
import CreateTournament from './compoonents/CreateTournament/CreateTournament';
import TournamentByGame from './compoonents/TournamentByGame/TournamentByGame';
import Footer from './compoonents/Footer/Footer';
let obj = {}
function App() {

  const [connected, setconnected] = useState(false)
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('userData'))) {
      setconnected(true)
      obj = JSON.parse(localStorage.getItem('userData'))
    }
  }, [])

  const history = useHistory();
  const onLogOut = () => {
    localStorage.removeItem('userData')
    setconnected(false);
    history.push('./')

  }



  return (
    <div className="App">
      <Navbar connected={connected} onlogOut={onLogOut} user={obj} />




      <Switch>

        <Route path="/tournaments" exact component={Tournament} >
        </Route>
        <Route path="/tournaments/:game" exact component={TournamentByGame} ></Route>

        <Route path="/tournament/:tournamentId" exact component={TournamentDetails} />



        <Route path="/news" component={News} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/games" component={Games} />
        <Route path="/profile/:id" exact component={Profile} />

        <Route path="/profile/:id" exact component={Home} />
        <Route path="/createTournament" exact component={CreateTournament} />
        <Route path="/" exact component={Home} />


      </Switch>
      <Footer />
    </div>
  );
}

export default App;

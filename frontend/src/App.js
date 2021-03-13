import './App.css'
import Header from './components/header/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Upload from './components/upload/Upload'
import Beats from './components/beats/Beats'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Contacts from './components/contacts/Contacts'
import About from './components/about/About'
//TODO
//PAYMENTS?
//BEATS SECTION done ----
//ABOUT SECTION
//UPLOAD SECTION done ----
//PLAYER done ----
//DONATIONS
function App() {
  return (
    <div>

      <Router>
        <Header />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/beats' component={Beats} />
          <Route path='/upload' component={Upload} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/about' component={About} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

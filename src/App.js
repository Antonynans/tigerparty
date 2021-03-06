import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Faq from './components/pages/Faq';
// import Footer from './components/footer/Footer';
// import Navbar from './components/navbar/Navbar';
import FunFoods from './components/pages/FunFoods';
import JumpingCastles from './components/pages/JumpingCastles';
import PartyHire from './components/pages/PartyHire';
import Cart from './components/cart';
// import ViewItem from './components/cart/ViewItem'
import Store from './components/store';
import Homepage from './components/pages/Homepage';
import ItemViewPage from './components/cart/ItemViewPage';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          {/* <Navbar /> */}
          <Route path='/' exact component={Homepage} />
          <Route path='/view' component={ItemViewPage} />

          <Route path='/funfoods' component={FunFoods} />
          <Route path='/jumpingcastles' component={JumpingCastles} />
          <Route path='/partyhire' component={PartyHire} />
          <Route path='/faq' component={Faq} />
          <Route path='/contact' component={Contact} />
          <Route path='/cart' component={Cart} />
          <Route exact path="/store" component={Store}/>

          {/* <Footer /> */}
        </Switch>
    </BrowserRouter>
  );
}

export default App;

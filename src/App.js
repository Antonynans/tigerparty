import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
function App() {
  return (
    <BrowserRouter>
        <Switch>
          {/* <Navbar /> */}
          <Route path='/' component={Home} />
          {/* <Footer /> */}
        </Switch>
    </BrowserRouter>
  );
}

export default App;

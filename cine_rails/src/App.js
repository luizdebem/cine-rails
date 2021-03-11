import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MovieList from './components/MovieList/MovieList';
import MovieForm from './components/MovieForm/MovieForm';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path="/" component={MovieList} exact></Route>
          <Route path="/add" component={MovieForm}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

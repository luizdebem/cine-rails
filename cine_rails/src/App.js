import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MovieList from './components/MovieList/MovieList';
import MovieForm from './components/MovieForm/MovieForm';
import DirectorPage from './components/DirectorPage/DirectorPage';
import SearchPage from './components/SearchPage/SearchPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path="/" component={MovieList} exact></Route>
          <Route path="/form" component={MovieForm}></Route>
          <Route path="/director/:id" component={DirectorPage}></Route>
          <Route path="/search" component={SearchPage}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

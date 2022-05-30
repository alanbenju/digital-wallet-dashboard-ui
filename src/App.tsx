import './App.css';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from './store/hooks';
import {Login} from './pages/login/Login';
import {WalletsContainer} from './pages/wallets/WalletsContainer';

function App() {
  const { isLoggedIn } = useAppSelector(state => state.auth);
  /**
   * In a real app i would use router and manage the "logged" state to show the pages that the user can access (or go back to login if not or token is old)
   * Signup page not added because it wasn't a requirement for the app
   */ 
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossOrigin="anonymous"
      />
      <header className="App-header">
        {isLoggedIn && <WalletsContainer />}
        {!isLoggedIn && <Login />}
      </header>
      <Outlet />
    </div>
  );
}

export default App;

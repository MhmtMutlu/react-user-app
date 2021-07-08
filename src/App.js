import './App.css';
import Header from './components/Header/Header';
import UserList from './components/UserList/UserList';
import UserContextProvider from './contexts/UserContext';

function App() {
  return (
    <UserContextProvider>
      <Header />
      <UserList />
    </UserContextProvider>
  );
}

export default App;

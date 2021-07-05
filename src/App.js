import './App.css';
import UserList from './components/UserList/UserList';
import UserContextProvider from './contexts/UserContext';

function App() {
  return (
    <UserContextProvider>
      <UserList />
    </UserContextProvider>
  );
}

export default App;

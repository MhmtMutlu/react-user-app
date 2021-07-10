import Header from './components/Header/Header';
import Search from './components/Search/Search';
import UserList from './components/UserList/UserList';
import UserContextProvider from './contexts/UserContext';

function App() {
  return (
    <UserContextProvider>
      <Header />
      <Search />
      <UserList />
    </UserContextProvider>
  );
}

export default App;

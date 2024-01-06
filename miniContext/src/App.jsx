import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./component/login";
import Profile from "./component/Profile";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;

import LoginPage from "./components/LoginPage/LoginPage";
import ListContainer from "./components/ListContainer/ListContainer";
import useToken from "./components/hooks/useToken";
import './App.css';


function App() {
    const { token, setToken } = useToken();



    if(!token) {
       return <LoginPage setToken={setToken} />
    }

  return (
    <div className="App">
          <ListContainer/>

    </div>
  );
}

export default App;

// import MainPage from "./pages/mainPage/MainPage";
// import CalcPage from "./pages/calcPage/CalcPage";
import UserRegister from "./pages/userRegister/UserRegister";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import UserListPage from "./pages/userListPage/UserListPage";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      {/*<MainPage />*/}
      {/*<CalcPage />*/}
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route index element={<UserRegister />}/>
          <Route path={'/users'} element={<UserListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

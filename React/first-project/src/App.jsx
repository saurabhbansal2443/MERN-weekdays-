import Navbar from "./Navbar";
import ThemeContext from "./Utility/ThemeContext";
import { Outlet } from "react-router-dom";
import AppStore from "./Utility/AppStore";
import { Provider } from "react-redux"



function App() {
  return (
    <>
      <Provider store={AppStore}>
        <ThemeContext>
          <Navbar></Navbar>
          <Outlet></Outlet>
        </ThemeContext>
      </Provider>
    </>
  );
}

export default App;

import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";
import AppStore from "./Utility/AppStore";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={AppStore}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </Provider>
    </>
  );
}

export default App;

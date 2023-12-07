import "./App.css";
import { HomePage } from "./containers/HomePage";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/"  element={<HomePage/>} />
                  <Route
                      path="/customer/access/:action"

                      element={<CustomerAccessPage/>}
                  />
              </Routes>

          </BrowserRouter>

      </div>
  );
}

export default App;

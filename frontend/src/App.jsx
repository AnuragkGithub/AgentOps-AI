import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CommandCenter from "./pages/CommandCenter";

function App() {

 return (

  <BrowserRouter>

   <Routes>

    <Route
      path="/"
      element={<Dashboard/>}
    />

    <Route
      path="/command"
      element={<CommandCenter/>}
    />

   </Routes>

  </BrowserRouter>

 )
}

export default App;
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Auth from "./auth";
import Main from "./main";
import Login from "./auth/pages/login";
import Join from "./auth/pages/join";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Routes>
          <Route element={<Auth isAuthenticated={true} />}>
            <Route path="/*" element={<Main />} />
          </Route>
          <Route element={<Auth isAuthenticated={false} />}>
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Provider>
    </ChakraProvider>
  );
}

export default App;

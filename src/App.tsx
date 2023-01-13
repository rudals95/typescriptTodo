import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Auth from "./auth";
import Main from "./main";
import Login from "./auth/pages/login";
import Join from "./auth/pages/join";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route element={<Auth isAuthenticated={true} />}>
          <Route path="/*" element={<Main />} />
        </Route>
        <Route element={<Auth isAuthenticated={false} />}>
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;

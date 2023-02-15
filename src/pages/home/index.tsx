import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import List from "./components/List";

const Member = () => {
  return (
    <Box p="20px">
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </Box>
  );
};

export default Member;

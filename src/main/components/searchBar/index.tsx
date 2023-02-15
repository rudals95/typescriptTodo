import React from "react";
import { Select, Input, Box, Button } from "@chakra-ui/react";

// 검색컴포넌트
const SearchBar = () => {
  return (
    <>
      <Box display="flex">
        <Select
          size="md"
          mr="8px"
          w="auto"
          // value={params.paramsValue || ""}
          // onChange={(e) => {
          //   changeValue(e, "paramsValue");
          // }}
        >
          {/* {searchOptions.map((c) => {
              return (
                <option key={c.value} value={c.value}>
                  {c.name}
                </option>
              );
            })} */}
        </Select>
        <Input
          // value={params.searchValue || ""}
          placeholder="검색어"
          size="md"
          m="0"
          mr="8px"
          maxWidth="342px"
          // onChange={(e) => {
          //   changeValue(e, "searchValue");
          // }}
          // onKeyDown={enterSearch}
        />
        <Button
          colorScheme="teal"
          variant="solid"
          // onClick={searchClearBtn}
        >
          검색
        </Button>
      </Box>
    </>
  );
};

export default SearchBar;

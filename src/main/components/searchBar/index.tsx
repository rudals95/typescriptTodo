import React from "react";
import { Select, Input, Box, Button } from "@chakra-ui/react";
import { IKey, IQSParams } from "./../../../types/board";
import { Media768 } from "../../../utiis/Media";
import search_Icon from "../../../assets/search_Icon.svg";

type Props = {
  params: IQSParams;
  searchOptions: IKey[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, type: string) => void;
  handleSellectChange: (e: React.ChangeEvent<HTMLSelectElement>, type: string) => void;
  Searchcomplete: () => void;
  enterSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

// 검색컴포넌트
const SearchBar: React.FC<Props> = ({ params, searchOptions, handleChange, handleSellectChange, Searchcomplete, enterSearch }) => {
  return (
    <>
      <Box display="flex">
        {Media768() ? (
          <Box border="1px solid #ddd" display="flex" w="100%">
            <select
              style={{
                paddingLeft: "10px",
              }}
              value={params.paramsValue || ""}
              onChange={(e) => {
                handleSellectChange(e, "paramsValue");
              }}
            >
              {searchOptions.map((c) => {
                return (
                  <option key={c.value} value={c.value}>
                    {c.name}
                  </option>
                );
              })}
            </select>
            <label htmlFor="search" className="labelStyle">
              <Input
                border="none"
                borderRadius="0"
                id="search"
                value={params.searchValue || ""}
                placeholder="검색어"
                size="md"
                m="0"
                mr="8px"
                onChange={(e) => {
                  handleChange(e, "searchValue");
                }}
                onKeyDown={enterSearch}
              />
              <button onClick={Searchcomplete}>
                <img src={search_Icon} alt="" />
              </button>
            </label>
          </Box>
        ) : (
          <>
            <Select
              size="md"
              mr="8px"
              w="auto"
              value={params.paramsValue || ""}
              onChange={(e) => {
                handleSellectChange(e, "paramsValue");
              }}
            >
              {searchOptions.map((c) => {
                return (
                  <option key={c.value} value={c.value}>
                    {c.name}
                  </option>
                );
              })}
            </Select>
            <Input
              id="search"
              value={params.searchValue || ""}
              placeholder="검색어"
              size="md"
              m="0"
              mr="8px"
              maxWidth="342px"
              onChange={(e) => {
                handleChange(e, "searchValue");
              }}
              onKeyDown={enterSearch}
            />
            <Button colorScheme="teal" variant="solid" onClick={Searchcomplete}>
              검색
            </Button>
          </>
        )}
      </Box>
    </>
  );
};

export default SearchBar;

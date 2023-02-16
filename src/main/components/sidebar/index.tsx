import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Menu, MenuButton, MenuList, MenuGroup, MenuItem } from "@chakra-ui/react";
import { Submenu } from "./submenu";
import { Link } from "react-router-dom";
import { Media768 } from "../../../utiis/Media";

type Props = {
  show: boolean;
};
const SideBar: React.FC<Props> = ({ show }) => {
  return (
    <>
      {Media768() ? (
        <div className={"btnClickSideBar"}>
          <>
            <Box p="16px 0" textAlign="center" border="none">
              로고
            </Box>
            {Submenu.map((c, i) => {
              console.log(c.subMenu);
              return (
                <div key={c.title} className="btnBox">
                  <Menu>
                    <MenuButton>
                      <Box p="16px">{c.icon}</Box>
                    </MenuButton>
                    <MenuList border="2px solid #a8a8a8">
                      <MenuGroup title={c.title}>
                        <MenuItem display="flex" flexDirection="column">
                          {c.subMenu.map((i) => {
                            return (
                              <Link key={i.name} to={i.url} className="m_side_btn">
                                {i.name}
                              </Link>
                            );
                          })}
                        </MenuItem>
                      </MenuGroup>
                    </MenuList>
                  </Menu>
                  <hr style={{ borderTop: "1px solid rgba(163,163,163,.5)", margin: "0 auto" }} />
                </div>
              );
            })}
          </>
        </div>
      ) : (
        <div className={show ? "sideBarStyle" : "btnClickSideBar"}>
          {show ? (
            <Accordion allowToggle bg="#27314c">
              <Box p="16px 0" textAlign="center" border="none">
                <img src="" alt="" />
              </Box>
              {Submenu.map((c, i) => {
                return (
                  <AccordionItem border="none" key={i} display="flex">
                    <Box w="280px">
                      <h2>
                        <AccordionButton p="16px" border="0">
                          <div style={{ margin: "0 16px 0 0" }}>{c.icon}</div>
                          <Box flex="1" textAlign="left" color="rgba(255,255,255,.8);">
                            {c.title}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <hr style={{ borderTop: "1px solid rgba(163,163,163,.5)", width: "200px", margin: "0 auto" }} />
                      </h2>
                      <AccordionPanel pb={4}>
                        <ul style={{ background: "#fff", padding: "8px 0", borderRadius: "5px" }}>
                          {c.subMenu.map((current, idx) => {
                            return (
                              <li key={idx}>
                                <Box p="8px 16px" m="0 10px" className="hover_btn">
                                  <Link to={current.url}>{current.name}</Link>
                                </Box>
                              </li>
                            );
                          })}
                        </ul>
                      </AccordionPanel>
                    </Box>
                  </AccordionItem>
                );
              })}
            </Accordion>
          ) : (
            <>
              <Box p="16px 0" textAlign="center" border="none">
                로고
              </Box>
              {Submenu.map((c, i) => {
                console.log(c.subMenu);
                return (
                  <div key={c.title} className="btnBox">
                    <Menu>
                      <MenuButton>
                        <Box p="16px">{c.icon}</Box>
                      </MenuButton>
                      <MenuList border="2px solid #a8a8a8">
                        <MenuGroup title={c.title}>
                          <MenuItem display="flex" flexDirection="column">
                            {c.subMenu.map((i) => {
                              return (
                                <Link key={i.name} to={i.url} className="m_side_btn">
                                  {i.name}
                                </Link>
                              );
                            })}
                          </MenuItem>
                        </MenuGroup>
                      </MenuList>
                    </Menu>
                    <hr style={{ borderTop: "1px solid rgba(163,163,163,.5)", margin: "0 auto" }} />
                  </div>
                );
              })}
            </>
          )}
        </div>
      )}
    </>
  );
};
export default SideBar;

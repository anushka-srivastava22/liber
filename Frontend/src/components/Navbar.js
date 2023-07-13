import {
  Box,
  Image,
  ButtonGroup,
  Avatar,
  AvatarBadge,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login_Signup/Login";
import Signup from "./Login_Signup/Signup";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("userID"));

  const loggedOut = () => {
    localStorage.removeItem("userID");
    setIsLoggedIn(localStorage.getItem("userID"));
  };

  return (
    <Box
      p="2"
      px="4"
      top="0"
      position={"fixed"}
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "#ecc14501",
        backdropFilter: "blur(10px)",
        boxShadow: "1px 1px 10px black",
        width: "100%",
        zIndex: "99",
      }}
    >
      <Box>
        <Image borderRadius="full" boxSize="50px" src="/logo.jpg" alt="Logo" />
      </Box>
      <Box style={{ display: "flex", cursor:"pointer"}}>
        <Box color={'black'} marginTop={4} marginLeft={7} marginRight={7} onClick={() => {window.location.href="http://localhost:3001/"}}>
          Home
        </Box>
        <Box color={'black'} marginTop={4} marginLeft={7} marginRight={7} onClick={() => {window.location.href="http://localhost:3001/courses"}}>
          Courses
        </Box>
        <Box color={'black'} marginTop={4} marginLeft={7} marginRight={7} onClick={() => {window.location.href="http://localhost:3001/discussion"}}>
          Discussion
        </Box>
        <Box color={'black'} marginTop={4} marginLeft={7} marginRight={7} onClick={() => {window.location.href="http://localhost:3001/trivia"}} >
          Tech Trivia
        </Box>
        <Box color={'black'} marginTop={4} marginLeft={7} marginRight={7} onClick={() => {window.location.href="http://localhost:3001/about"}} >
          About us
        </Box>
        
      </Box>
      
      <Box style={{ display: "flex", alignItems: "center" }}>
        {isLoggedIn ? (
          <Menu>
            <MenuButton>
              <Avatar size={"md"}>
                <AvatarBadge boxSize="1em" bg="green.500" />
              </Avatar>
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem onClick={() => {window.location.href="#"}}>My Account</MenuItem>
                <MenuItem onClick={() => {window.location.href="http://localhost:3001/trivia"}}>Play Trivia </MenuItem>
                <MenuItem onClick={() => {window.location.href="http://localhost:3001/noteskeeper"}}>Notes Keeper </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem onClick={() => {window.location.href="http://localhost:3001/docs"}}>Docs</MenuItem>
                <MenuItem onClick={() => {window.location.href="http://localhost:3001/faq"}}>FAQ</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="">
                <MenuItem backgroundColor="#00000008" onClick={loggedOut}>
                  Log Out
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        ) : (
          <ButtonGroup gap="2">
            <Login />
            <Signup />
          </ButtonGroup>
        )}
      </Box>
    </Box>
  );
}

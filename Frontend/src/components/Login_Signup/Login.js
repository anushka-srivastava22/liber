import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Image,
  Box,
  Input,
  InputLeftElement,
  InputGroup,
  Heading,
} from "@chakra-ui/react";

import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:3000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          localStorage.setItem('userID', "LIB"+Date.now());
          window.location.href = "http://localhost:3001/";
        }
      });
    }
  const { isOpen, onOpen, onClose } = useDisclosure();

  /*const loggedIn = () => {
    localStorage.setItem('userID', "LIB"+Date.now())
  }*/

  return (
    <>
      <Button
        backgroundColor="#331e6d25"
        border="1px"
        borderColor="gray.500"
        onClick={onOpen}
      >
        Log In
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          h="75vh"
          style={{
            background: "linear-gradient(#ffffff 80%, transparent)",
            backdropFilter: "blur(5px)",
          }}
        >
          <ModalHeader
            textAlign={"center"}
            backgroundColor="#ecc145"
            borderTopRadius={"6"}
          >
            Log In
          </ModalHeader>
          <ModalBody>
            <Box pt="6">
              <InputGroup size='lg'>
                <InputLeftElement
                  pointerEvents="none"
                  children={<i className="fas fa-at"></i>}
                />
                <Input type={"email"} placeholder="E-mail ID" onChange={(e) => setEmail(e.target.value)} />
              </InputGroup>
            </Box>
            <Box pt="3">
              <InputGroup size='lg'>
                <InputLeftElement
                  pointerEvents="none"
                  children={<i className="fas fa-key"></i>}
                />
                <Input type={"password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              </InputGroup>
            </Box>
            <Box pt="3">
              <InputGroup>
                <Button type="submit" bg='#ecc145' w={"100%"} onClick={handleSubmit}>Login</Button>
              </InputGroup>
            </Box>
            <Box pt="8" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              <hr width="40%"/>
              <Heading as={"h5"} size="sm" mx="2">OR</Heading>
              <hr width="40%"/>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Image
              src="/images/login_signup/login.png"
              style={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./components/Home/HomePage";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trivia from "./components/TechTrivia/Trivia";
import Dashboard from "./components/Dashboard/Dashboard";
import NotesKeeper from "./components/Notes_Keeper/NotesKeeper";

import Index from "./components/LandingPage/Index";


const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

// 3. Pass the `theme` prop to the `ChakraProvider`
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/trivia" element={<Trivia />} />
          <Route exact path="/account" element={<Dashboard />} />
          <Route exact path="/noteskeeper" element={<NotesKeeper />} />
          {/* <TriviaQuizPanel/> */}
          {/* <CourseDetails/> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </ChakraProvider>
  );
}

export default App;

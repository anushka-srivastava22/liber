// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/Landing/LandingPage";
import HomePage from "./components/Home/HomePage";
import Trivia from "./components/TechTrivia/Trivia";
import NotesKeeper from "./components/Notes_Keeper/NotesKeeper";
import DiscussionPage from "./components/Discussion/DiscussionPage";
import AboutPage from "./components/About/AboutPage";
import UserDetails from "./components/Login_Signup/UserDetails";


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
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/courses" element={<HomePage />} />
          <Route exact path="/trivia" element={<Trivia />} />
          <Route exact path="/noteskeeper" element={<NotesKeeper />} />
          <Route exact path="/discussion" element={<DiscussionPage />} />
          <Route exact path="/dashboard" element={<UserDetails />} />
          <Route exact path="/about" element={<AboutPage />} />
          
          {/* <TriviaQuizPanel/> */}
          {/* <CourseDetails/> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </ChakraProvider>
  );
}

export default App;

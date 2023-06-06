// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/Home/HomePage";
import Trivia from "./components/TechTrivia/Trivia";
import NotesKeeper from "./components/Notes_Keeper/NotesKeeper";
import ContactPage from "./components/Contact/ContactPage";
import CodeEditorPage from "./components/CodeEditor/CodeEditorPage";


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
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/codeeditor" element={<CodeEditorPage />} />
          <Route exact path="/trivia" element={<Trivia />} />
          <Route exact path="/noteskeeper" element={<NotesKeeper />} />
          <Route exact path="/contact" element={<ContactPage />} />
          {/* <TriviaQuizPanel/> */}
          {/* <CourseDetails/> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </ChakraProvider>
  );
}

export default App;

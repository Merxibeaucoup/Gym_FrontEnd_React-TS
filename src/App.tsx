import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        {/* //Header Header Switch */}

        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

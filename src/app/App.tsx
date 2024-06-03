import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "src/widgets/Navbar";
import { Sidebar } from "src/widgets/Sidebar";
import { AppRouter } from "./providers/router";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="app">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} handleClose={toggleSidebar} />
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;

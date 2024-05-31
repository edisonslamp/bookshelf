import { useState } from "react";
import { Bookcard } from "src/entities/Bookcard";
import { Navbar } from "src/widgets/Navbar";
import { Sidebar } from "src/widgets/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="app">
      <Navbar toggleSidebar={toggleSidebar} />
      <Bookcard title="title" author="author" year={2022} description="desc" />
      <Sidebar isOpen={isSidebarOpen} handleClose={toggleSidebar} />
    </div>
  );
}

export default App;

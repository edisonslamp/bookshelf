import { useState } from "react";
import { Navigation } from "src/widgets/Navigation";
import { AppRouter } from "./providers/router";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="app">
      <div className="app_navbar">
        <Navigation
          toggleSidebar={toggleSidebar}
          isOpen={isSidebarOpen}
          handleClose={toggleSidebar}
        />
      </div>
      <div className="app_body">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;

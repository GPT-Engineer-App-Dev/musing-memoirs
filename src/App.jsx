import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className={`app ${theme}`}>
        <header className="p-4 flex justify-between items-center bg-gray-200 dark:bg-gray-800">
          <h1 className="text-2xl">My Personal Blog</h1>
          <button onClick={toggleTheme} className="p-2 bg-gray-300 dark:bg-gray-700 rounded">
            Toggle {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </header>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;

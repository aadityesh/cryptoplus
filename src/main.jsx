import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeContext from "../ThemeContext.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";

function Root() {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <Provider store={store}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <App />
        </ThemeContext.Provider>
      </Provider>
    </>
  );
}

createRoot(document.getElementById("root")).render(<Root />);

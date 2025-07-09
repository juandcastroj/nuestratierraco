// import { createContext, useState, useEffect } from "react";

// // eslint-disable-next-line react-refresh/only-export-components
// export const ThemeContext = createContext();

// // eslint-disable-next-line react/prop-types
// export const ThemeProvider = ({ children }) => {
  
//   const [theme, setTheme] = useState(() => {
//     const savedTheme = localStorage.getItem("theme");
//     return savedTheme ? savedTheme : "dark";
//   });

//   useEffect(() => {
//     const bgSection = document.querySelector('#bg-section');

//     if (theme === "dark") {
      
//       document.documentElement.classList.add("dark");
//       bgSection.classList.remove("background-light");
//       bgSection.classList.add("background-dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       bgSection.classList.remove("background-dark");
//       bgSection.classList.add("background-light");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };
  
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

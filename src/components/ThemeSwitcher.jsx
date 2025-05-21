// import { useContext } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";


// export default function ThemeSwitcher () {

//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (

//     <button
//       onClick={toggleTheme}
//       className="inline fixed top-4 lg:top-8 right-20 lg:right-8 px-4 py-2 transition justify-end"
//     >

//       { theme === "light" ?  
//       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#14532d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
//         {theme === "light" ? "Dark" : "Light"}
//       </svg> 
//       :  
//        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
//         {theme === "light" ? "Dark" : "Light"}
//       </svg> }

//     </button>
//   );
// };
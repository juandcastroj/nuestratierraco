import logoImg from "../../assets/images/logo/logo.png";

export default function Loading () {
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src={logoImg}
        alt="Logo"
        className="h-20 w-20 animate-spin animate-delay-700 animate-duration-1000"
      />
    </div>
  );
};


// export default function LoadingInline({ size = "md", className = "" }) {
//   const sizeMap = {
//     sm: "w-10 h-10",
//     md: "w-16 h-16",
//     lg: "w-24 h-24",
//   };
//   const s = sizeMap[size] || sizeMap.md;

//   return (
//     <div className="w-full flex justify-center items-center py-60">
//       <div className={`relative ${s} ${className}`} aria-label="Cargando">
//         {/* Outer faint ring */}
//         <div className="absolute inset-0 rounded-full border-4 border-gray-200 opacity-80 animate-spin"></div>

//         {/* Colored accent ring */}
//         <div className="absolute inset-1/6 rounded-full border-4 border-t-green-500 border-gray-200"></div>

//         {/* Orbiting dot */}
//         <div className="absolute inset-0 rounded-full">
//           <div className="absolute inset-0 animate-spin">
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600 shadow-md"></div>
//           </div>
//         </div>

//         {/* Center hub */}
//         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-gray-200" />

//         <span className="sr-only">Cargando...</span>
//       </div>
//     </div>
//   );
// }


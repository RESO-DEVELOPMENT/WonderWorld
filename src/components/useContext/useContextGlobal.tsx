// import React, { FC, useContext, useRef, useState } from "react";
// import { createContext } from "vm";
// type ContextGlobalType = {
//   urlBackground: string | null;
//   setUrlBackground: React.Dispatch<React.SetStateAction<string | null>>;
// };

// const iContexGlobalState = {
//   context: null,
//   setContext: () => {},
// };

// const ContextGlobal = createContext<ContextGlobalType>(iContexGlobalState);
// interface MyContextGlobalProviderProps {
//   children: React.ReactNode;
// }

// export const MyContextGlobalProvider: FC<MyContextGlobalProviderProps> = ({
//   children,
// }) => {
//   const [urlBackground, setUrlBackground] = useState("");
//   //     const ref = useRef<HTMLDivElement>(null);
//   //     const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//   //       if (ref.current) {
//   //         const rect = ref.current.getBoundingClientRect();
//   //         const x = e.clientX - rect.left;
//   //         const y = e.clientY - rect.top;
//   //         if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
//   //           setUrlBackground(ref.current.style.backgroundImage);
//   //         }
//   //       }
//   //     };
//   //     return (
//   //       <div ref={ref} onClick={handleClick}>
//   //         {children}
//   //       </div>
//   //     );
//   //   };
//   return (
//     <ContextGlobal.Provider value={{ urlBackground, setUrlBackground }}>
//       {children}
//     </ContextGlobal.Provider>
//   );
// };

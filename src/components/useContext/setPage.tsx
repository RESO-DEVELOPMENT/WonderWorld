import React, { FC, useContext, useRef, useState } from "react";
interface TypePage {
  numberPage: number | null;
  setNumberPage: React.Dispatch<React.SetStateAction<number | null>>;
  numberAnimation: number | null;
  setNumberAnimation: React.Dispatch<React.SetStateAction<number | null>>;
}
interface MyPageContextProps {
  children: React.ReactNode;
}
export const PageContext = React.createContext<TypePage>({
  numberAnimation: null,
  numberPage: null,
  setNumberPage: () => {},
  setNumberAnimation: () => {},
});

export const MyPageContext: FC<MyPageContextProps> = ({ children }) => {
  const [numberPage, setNumberPage] = React.useState<number | null>(1);
  const [numberAnimation, setNumberAnimation] = React.useState<number | null>(
    100
  );
  return (
    <PageContext.Provider
      value={{ numberPage, setNumberPage, numberAnimation, setNumberAnimation }}
    >
      {children}
    </PageContext.Provider>
  );
};

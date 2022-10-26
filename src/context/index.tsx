import { PropsWithChildren, useState } from "react";
import { createContext } from "react";

export const Context = createContext<number | undefined | any>(0);

interface IProps extends PropsWithChildren {}

export const ContextProvider = (props: IProps) => {
  const [state, setState] = useState(6);

  return (
    <Context.Provider value={{ state, setState }}>
      {props.children}
    </Context.Provider>
  );
};

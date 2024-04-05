import { NewMenuType } from "@/types/menuSchema";
import { useReducer, useContext, createContext, Dispatch } from "react";

type ActionMenuType = {
  type: string;
  payload: NewMenuType;
};
const menuContext = createContext<NewMenuType[]>([]);
const menuDispatch = createContext<Dispatch<ActionMenuType>>(() => {});

const menuReducer = (state: NewMenuType[], action: ActionMenuType) => {
  switch (action.type) {
    case "ADD_MENU":
      return [...state, action.payload];
    case "RESET_MENU":
      return [];
    default:
      return state;
  }
};

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [menu, dispatch] = useReducer(menuReducer, []);
  return (
    <menuContext.Provider value={menu}>
      <menuDispatch.Provider value={dispatch}>{children}</menuDispatch.Provider>
    </menuContext.Provider>
  );
}

export function useMenu() {
  return useContext(menuContext);
}

export function useMenuDispatch() {
  return useContext(menuDispatch);
}

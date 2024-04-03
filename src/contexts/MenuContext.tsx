import { MenuType } from "@/types/menuSchema";
import { useReducer, useContext, createContext, Dispatch } from "react";

type ActionMenuType = {
  type: string;
  payload: MenuType;
};
const menuContext = createContext<MenuType[]>([]);
const menuDispatch = createContext<Dispatch<ActionMenuType>>(() => {});

const menuReducer = (state: MenuType[], action: ActionMenuType) => {
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

"use client";
import { addMenuType } from "@/types/compositionSchema";
import { useReducer, useContext, createContext, Dispatch } from "react";

type ActionMenuType = {
  type: string;
  payload: addMenuType;
};

const menuUserContext = createContext<addMenuType[]>([]);
const menuUserDispatch = createContext<Dispatch<ActionMenuType>>(() => {});

const menuUserReducer = (state: addMenuType[], action: ActionMenuType) => {
  switch (action.type) {
    case "ADD_TO_MY_MENU":
      const isExist = state.find((data) => data.code == action.payload.code);
      if (isExist) {
        return state;
      }
      return [...state, action.payload];
    case "DELETE_TO_MY_MENU":
      const findData = state.find((data) => data.code == action.payload.code);
      const deleteData = state.filter((data) => data != findData);
      state = deleteData;
    default:
      return state;
  }
};

export function MenuUserProvider({ children }: { children: React.ReactNode }) {
  const [menuUser, dispatch] = useReducer(menuUserReducer, []);
  return (
    <menuUserContext.Provider value={menuUser}>
      <menuUserDispatch.Provider value={dispatch}>
        {children}
      </menuUserDispatch.Provider>
    </menuUserContext.Provider>
  );
}

export function useMenuUser() {
  return useContext(menuUserContext);
}

export function useMenuUserDispatch() {
  return useContext(menuUserDispatch);
}

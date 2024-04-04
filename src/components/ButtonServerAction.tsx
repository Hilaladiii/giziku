"use client";
import { useMenuUserDispatch } from "@/contexts/MenuUserContext";

import { Button } from "./ui/button";
import { AddMenuType } from "@/types/menuSchema";
import { actionDeleteMyMenu } from "@/lib/action";

export function ButtonServerActionAddMenu({
  menu,
  label,
}: {
  menu: AddMenuType;
  label: string;
}) {
  const dispatch = useMenuUserDispatch();
  return (
    <form
      action={() =>
        dispatch({
          type: "ADD_TO_MY_MENU",
          payload: menu,
        })
      }
    >
      <Button type="submit" variant="outline">
        {label}
      </Button>
    </form>
  );
}

export function ButtonServerActionDeleteMenu({
  id,
  label,
}: {
  id: string;
  label: string;
}) {
  const deleteMenuId = actionDeleteMyMenu.bind(null, { id });
  return (
    <form action={deleteMenuId}>
      <Button type="submit" variant="outline">
        {label}
      </Button>
    </form>
  );
}

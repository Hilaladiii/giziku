"use client";
import { useMenuUserDispatch } from "@/contexts/MenuUserContext";
import { addMenuType } from "@/types/compositionSchema";
import { Button } from "../ui/button";
export default function AddToMenuBtn({ menu }: { menu: addMenuType }) {
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
        +
      </Button>
    </form>
  );
}

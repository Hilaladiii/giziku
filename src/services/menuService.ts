import { compositionType } from "@/types/compositionSchema";

export async function getAllMenus() {
  const data = await fetch("http://localhost:3000/api/getMenu");
  const menuData = await data.json();
  return menuData;
}

export async function SubmitAllMenus(menuData: compositionType[]) {
  const res = await fetch("http://localhost:3000/api/addMenu", {
    method: "POST",
    body: JSON.stringify(menuData),
  });
  return res.json();
}

import { addMenuType, compositionType } from "@/types/compositionSchema";

export async function getAllMenus() {
  const data = await fetch("http://localhost:3000/api/getMenu", {
    cache: "no-store",
  });
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

export async function AddMenuByUser(
  AddMenuDataUser: addMenuType[],
  berat: number[]
) {
  const data = {
    menu: AddMenuDataUser,
    berat: berat,
  };
  const res = await fetch("http://localhost:3000/api/add-menu-user", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getMenusByUser({ user }: { user?: string }) {
  try {
    const res = await fetch("http://localhost:3000/api/getMenuUser", {
      headers: { Authorization: `${user}` },
    });
    return res.json();
  } catch (error) {}
}

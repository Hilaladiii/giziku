import { MenuType, AddMenuType } from "@/types/menuSchema";

export async function getAllMenus({
  query,
  page,
}: {
  query: string;
  page: number;
}) {
  const data = await fetch(
    `http://localhost:3000/api/get-menu?query=${query}&page=${page}`,
    {
      cache: "no-store",
    }
  );
  const menuData = await data.json();
  return menuData;
}

export async function SubmitAllMenus(menuData: MenuType[]) {
  const res = await fetch("http://localhost:3000/api/add-menu", {
    method: "POST",
    body: JSON.stringify(menuData),
  });
  const response = await res.json();
  return response;
}

export async function AddMenuByUser(
  AddMenuDataUser: AddMenuType[],
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
    const res = await fetch("http://localhost:3000/api/get-menu-user", {
      headers: { Authorization: `${user}` },
    });
    return res.json();
  } catch (error) {
    return (error as TypeError).name;
  }
}

export async function deleteMyMenu({ id }: { id: string }) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/delete-my-menu?id=${id}`,
      {
        method: "DELETE",
      }
    );
  } catch (error) {
    return (error as TypeError).name;
  }
}

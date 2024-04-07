import { AddMenuType, NewMenuType } from "@/types/menuSchema";

const api = process.env.NEXT_PUBLIC_BASE_URL;
export async function getAllMenus({
  query,
  page,
}: {
  query: string;
  page: number;
}) {
  console.log(api);
  const data = await fetch(`${api}/api/get-menu?query=${query}&page=${page}`, {
    cache: "default",
  });
  const menuData = await data.json();
  return menuData;
}

export async function SubmitAllMenus(menuData: NewMenuType[]) {
  const res = await fetch(`${api}/api/add-menu`, {
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
  const res = await fetch(`${api}/api/add-menu-user`, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getMenusByUser({ user }: { user?: string }) {
  try {
    const res = await fetch(`${api}/api/get-menu-user`, {
      headers: { Authorization: `${user}` },
    });
    return res.json();
  } catch (error) {
    return (error as TypeError).name;
  }
}

export async function deleteMyMenu({ id }: { id: string }) {
  try {
    const res = await fetch(`${api}/api/delete-my-menu?id=${id}`, {
      method: "DELETE",
    });
    return res.json();
  } catch (error) {
    return (error as TypeError).name;
  }
}

export async function deleteAllMyMenu({ user }: { user: string }) {
  try {
    const res = await fetch(`${api}/api/delete-all-mymenu`, {
      headers: {
        Authorization: `${user}`,
      },
      method: "DELETE",
    });
    return res.json();
  } catch (error) {
    return (error as TypeError).name;
  }
}

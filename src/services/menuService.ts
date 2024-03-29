export async function getAllMenus() {
  const data = await fetch("http://localhost:3000/api/getMenu");
  const menuData = await data.json();
  return menuData;
}

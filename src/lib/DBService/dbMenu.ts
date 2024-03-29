import { prisma } from "../prisma";
import { compositionType } from "@/types/compositionSchema";

export async function AddMenus(menuData: compositionType[]) {
  const menuDatas = menuData.map((menu) => ({
    code: menu.code,
    name: menu.name,
    air: menu.air,
    abu: menu.abu,
    besi: menu.besi,
    bKar: menu.bKar,
    energi: menu.energi,
    fosfor: menu.fosfor,
    kalium: menu.kalium,
    kalsium: menu.kalsium,
    karTot: menu.karTot,
    kh: menu.kh,
    lemak: menu.lemak,
    natrium: menu.natrium,
    niasin: menu.niasin,
    protein: menu.protein,
    riboflavin: menu.riboflavin,
    seng: menu.seng,
    serat: menu.serat,
    tembaga: menu.tembaga,
    thiamin: menu.thiamin,
    vitC: menu.vitC,
  }));
  try {
    const res = await prisma.menu.createMany({
      data: menuDatas,
      skipDuplicates: true,
    });
    console.log(res);
    if (res.count == 0) {
      return {
        status: 400,
        message: "failed to add data because your data code was duplicated",
      };
    }
    return {
      status: 201,
      message: "add menu successfully",
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as TypeError).message,
    };
  }
}

export async function getAllMenus() {
  try {
    const MenuDatas = await prisma.menu.findMany({});
    console.log(MenuDatas);
    return {
      status: 200,
      message: "success to get all menus",
      data: MenuDatas,
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as TypeError).message,
      data: null,
    };
  }
}

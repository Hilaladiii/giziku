import { prisma } from "../prisma";
import { compositionType } from "@/types/compositionSchema";

export async function AddMenu(menuData: compositionType) {
  try {
    await prisma.menu.create({
      data: {
        code: menuData.ingredientCode,
        name: menuData.name,
        air: menuData.air,
        abu: menuData.abu,
        besi: menuData.besi,
        bKar: menuData.bKar,
        energi: menuData.energi,
        fosfor: menuData.fosfor,
        kalium: menuData.kalium,
        kalsium: menuData.kalsium,
        karTot: menuData.karTot,
        kh: menuData.kh,
        lemak: menuData.lemak,
        natrium: menuData.natrium,
        niasin: menuData.niasin,
        protein: menuData.protein,
        riboflavin: menuData.riboflavin,
        seng: menuData.seng,
        serat: menuData.serat,
        tembaga: menuData.tembaga,
        thiamin: menuData.thiamin,
        vitC: menuData.vitC,
      },
    });
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
    const MenuDatas = await prisma.menu.findMany();
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

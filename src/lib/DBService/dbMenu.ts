import { prisma } from "../prisma";
import { addMenuType, compositionType } from "@/types/compositionSchema";
import { toFixedFloat } from "../utils";

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
      message: (error as TypeError).name,
    };
  }
}

export async function getAllMenus() {
  try {
    const MenuDatas = await prisma.menu.findMany();
    return {
      status: 200,
      message: "success to get all menus",
      data: MenuDatas,
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as TypeError).name,
      data: null,
    };
  }
}

export async function addMenuUser(AddMenuData: addMenuType[], berat: number[]) {
  const AddMenuDatas = AddMenuData.map((addMenu, index: number) => ({
    code: addMenu.code,
    username: addMenu.username,
    berat: berat[index],
  }));
  try {
    const res = await prisma.addMenu.createMany({
      data: AddMenuDatas,
    });
    console.log(res);
    return {
      status: 201,
      message: "Success to create your menu",
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as TypeError).name,
    };
  }
}

export async function getMenusUser({ name }: { name: string }) {
  try {
    const getCodeWeight = await prisma.addMenu.findMany({
      where: {
        username: name,
      },
      select: {
        code: true,
        berat: true,
      },
    });

    const codes = getCodeWeight.map((data) => data.code);
    const berat = getCodeWeight.map((data) => data.berat);

    const res = await prisma.menu.findMany({
      where: {
        code: {
          in: codes,
        },
      },
    });

    const resDataCalculation = res.map((item, index: number) => ({
      name: item.name,
      air: toFixedFloat((item.air * berat[index]) / 100),
      energi: toFixedFloat((item.energi * berat[index]) / 100),
      protein: toFixedFloat((item.protein * berat[index]) / 100),
      lemak: toFixedFloat((item.lemak * berat[index]) / 100),
      kh: toFixedFloat((item.kh * berat[index]) / 100),
      serat: toFixedFloat((item.serat * berat[index]) / 100),
      abu: toFixedFloat((item.abu * berat[index]) / 100),
      kalsium: toFixedFloat((item.kalsium * berat[index]) / 100),
      fosfor: toFixedFloat((item.fosfor * berat[index]) / 100),
      besi: toFixedFloat((item.besi * berat[index]) / 100),
      natrium: toFixedFloat((item.natrium * berat[index]) / 100),
      kalium: toFixedFloat((item.kalium * berat[index]) / 100),
      tembaga: toFixedFloat((item.tembaga * berat[index]) / 100),
      seng: toFixedFloat((item.seng * berat[index]) / 100),
      bKar: toFixedFloat((item.bKar * berat[index]) / 100),
      karTot: toFixedFloat((item.karTot * berat[index]) / 100),
      thiamin: toFixedFloat((item.thiamin * berat[index]) / 100),
      riboflavin: toFixedFloat((item.riboflavin * berat[index]) / 100),
      niasin: toFixedFloat((item.niasin * berat[index]) / 100),
      vitC: toFixedFloat((item.vitC * berat[index]) / 100),
    }));
    const totalCalculation = {
      air: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.air, 0)
      ),
      energi: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.energi, 0)
      ),
      protein: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.protein, 0)
      ),
      lemak: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.lemak, 0)
      ),
      kh: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.kh, 0)
      ),
      serat: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.serat, 0)
      ),
      abu: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.abu, 0)
      ),
      kalsium: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.kalsium, 0)
      ),
      fosfor: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.fosfor, 0)
      ),
      besi: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.besi, 0)
      ),
      natrium: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.natrium, 0)
      ),
      kalium: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.kalium, 0)
      ),
      tembaga: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.tembaga, 0)
      ),
      seng: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.seng, 0)
      ),
      bKar: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.bKar, 0)
      ),
      karTot: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.karTot, 0)
      ),
      thiamin: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.thiamin, 0)
      ),
      riboflavin: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.riboflavin, 0)
      ),
      niasin: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.niasin, 0)
      ),
      vitC: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.vitC, 0)
      ),
    };
    return {
      status: 200,
      data: resDataCalculation,
      totalCalculation: totalCalculation,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: (error as TypeError).name,
    };
  }
}

import { prisma } from "../prisma";
import { AddMenuType, NewMenuType } from "@/types/menuSchema";
import { toFixedFloat } from "../utils";

export async function AddMenus(menuData: NewMenuType[]) {
  try {
    const res = await prisma.menu.createMany({
      data: menuData,
      skipDuplicates: true,
    });
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

export async function getAllMenus({
  query,
  currPage,
}: {
  query: string;
  currPage: number;
}) {
  const offset = (currPage - 1) * 5;
  try {
    const MenuDatas = await prisma.menu.findMany({
      skip: offset,
      take: 5,
      where: {
        nama: {
          contains: query,
        },
      },
      orderBy: {
        nama: "asc",
      },
    });
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

export async function getMenuPages(query: string) {
  try {
    const menu = await prisma.menu.count({
      where: {
        nama: {
          contains: query,
        },
      },
    });

    const totalPage = Math.ceil(Number(menu) / 10);
    return totalPage;
  } catch (error) {
    return (error as TypeError).name;
  }
}

export async function addMenuUser(AddMenuData: AddMenuType[], berat: number[]) {
  const AddMenuDatas = AddMenuData.map((addMenu, index: number) => ({
    code: addMenu.code,
    username: addMenu.username,
    berat: berat[index],
  }));
  try {
    const res = await prisma.addMenu.createMany({
      data: AddMenuDatas,
    });
    return {
      status: 201,
      message: "Success to create your menu",
    };
  } catch (error) {
    console.log(error);
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
        addMenuId: true,
      },
    });

    const codes = getCodeWeight.map((data) => data.code);
    const berat = getCodeWeight.map((data) => data.berat);
    const addMenuId = getCodeWeight.map((data) => data.addMenuId);

    const res = await prisma.menu.findMany({
      where: {
        code: {
          in: codes,
        },
      },
    });

    const resDataCalculation = res.map((item, index: number) => ({
      addMenuId: addMenuId[index],
      nama: item.nama,
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
      retinol: toFixedFloat((item.retinol * berat[index]) / 100),
      bKaroten: toFixedFloat((item.bKaroten * berat[index]) / 100),
      karotenTotal: toFixedFloat((item.karotenTotal * berat[index]) / 100),
      thiamin: toFixedFloat((item.thiamin * berat[index]) / 100),
      riboflavin: toFixedFloat((item.riboflavin * berat[index]) / 100),
      niasin: toFixedFloat((item.niasin * berat[index]) / 100),
      vitaminC: toFixedFloat((item.vitaminC * berat[index]) / 100),
      bdd: toFixedFloat((item.bdd * berat[index]) / 100),
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
      retinol: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.retinol, 0)
      ),
      bKaroten: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.bKaroten, 0)
      ),
      karotenTotal: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.karotenTotal, 0)
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
      vitaminC: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.vitaminC, 0)
      ),
      bdd: toFixedFloat(
        resDataCalculation.reduce((acc, item) => acc + item.bdd, 0)
      ),
    };
    return {
      status: 200,
      data: resDataCalculation,
      totalCalculation: totalCalculation,
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as TypeError).name,
    };
  }
}

export async function deleteMyMenu({ id }: { id: string }) {
  try {
    const res = await prisma.addMenu.delete({
      where: {
        addMenuId: id,
      },
    });
    return {
      status: 200,
      message: "Delete menu success",
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as TypeError).name,
    };
  }
}

export async function deleteAllMyMenu({ user }: { user: string }) {
  try {
    const res = await prisma.addMenu.deleteMany({
      where: {
        username: user,
      },
    });
    if (res.count == 0) {
      return {
        status: 400,
        message: "failed to delete all menu",
      };
    }
    return {
      status: 200,
      message: "success to delete all menu",
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as TypeError).name,
    };
  }
}

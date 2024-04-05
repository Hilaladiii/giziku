import { getMenusByUser } from "@/services/menuService";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[[...nextauth]]/route";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ResultMenuType } from "@/types/menuSchema";
import {
  ButtonServerActionDeleteAllMenu,
  ButtonServerActionDeleteMenu,
} from "@/components/ButtonServerAction";

export default async function ResultPage() {
  const session = await getServerSession(authOptions);
  const user = session?.user?.name || "";
  const dataResult = await getMenusByUser({ user: user });
  return (
    <div className="flex flex-col">
      <h1 className="mt-10 font-bold text-3xl mx-auto">Hasil Perhitungan</h1>
      <Table className="text-xs max-w-screen-lg mx-auto mt-10">
        <TableHeader>
          <TableRow>
            <TableHead>Nama</TableHead>
            <TableHead>Air</TableHead>
            <TableHead>Energi</TableHead>
            <TableHead>Protein</TableHead>
            <TableHead>Lemak</TableHead>
            <TableHead>Kh</TableHead>
            <TableHead>Serat</TableHead>
            <TableHead>Abu</TableHead>
            <TableHead>Kalsium</TableHead>
            <TableHead>Fosfor</TableHead>
            <TableHead>Besi</TableHead>
            <TableHead>Natrium</TableHead>
            <TableHead>Kalium</TableHead>
            <TableHead>Tembaga</TableHead>
            <TableHead>Seng</TableHead>
            <TableHead>Retinol</TableHead>
            <TableHead>bKar</TableHead>
            <TableHead>karTot</TableHead>
            <TableHead>Thiamin</TableHead>
            <TableHead>Riboflavin</TableHead>
            <TableHead>Niasin</TableHead>
            <TableHead>Vit-C</TableHead>
            <TableHead>Bdd</TableHead>
            {dataResult.data.length > 0 ? <TableHead>Action</TableHead> : null}
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataResult.data.map((menu: ResultMenuType, index: number) => (
            <TableRow className="text-center" key={index}>
              <TableCell className="truncate">{menu.nama}</TableCell>
              <TableCell>{menu.air}</TableCell>
              <TableCell>{menu.energi}</TableCell>
              <TableCell>{menu.protein}</TableCell>
              <TableCell>{menu.lemak}</TableCell>
              <TableCell>{menu.kh}</TableCell>
              <TableCell>{menu.serat}</TableCell>
              <TableCell>{menu.abu}</TableCell>
              <TableCell>{menu.kalsium}</TableCell>
              <TableCell>{menu.fosfor}</TableCell>
              <TableCell>{menu.besi}</TableCell>
              <TableCell>{menu.natrium}</TableCell>
              <TableCell>{menu.kalium}</TableCell>
              <TableCell>{menu.tembaga}</TableCell>
              <TableCell>{menu.seng}</TableCell>
              <TableCell>{menu.retinol}</TableCell>
              <TableCell>{menu.bKaroten}</TableCell>
              <TableCell>{menu.karotenTotal}</TableCell>
              <TableCell>{menu.thiamin}</TableCell>
              <TableCell>{menu.riboflavin}</TableCell>
              <TableCell>{menu.niasin}</TableCell>
              <TableCell>{menu.vitaminC}</TableCell>
              <TableCell>{menu.bdd}</TableCell>
              {menu ? (
                <TableCell>
                  <ButtonServerActionDeleteMenu
                    label="-"
                    id={menu.addMenuId || ""}
                  />
                </TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="text-center bg-zinc-300/40">
            <TableCell>Total</TableCell>
            <TableCell>{dataResult.totalCalculation.air}</TableCell>
            <TableCell>{dataResult.totalCalculation.energi}</TableCell>
            <TableCell>{dataResult.totalCalculation.protein}</TableCell>
            <TableCell>{dataResult.totalCalculation.lemak}</TableCell>
            <TableCell>{dataResult.totalCalculation.kh}</TableCell>
            <TableCell>{dataResult.totalCalculation.serat}</TableCell>
            <TableCell>{dataResult.totalCalculation.abu}</TableCell>
            <TableCell>{dataResult.totalCalculation.kalsium}</TableCell>
            <TableCell>{dataResult.totalCalculation.fosfor}</TableCell>
            <TableCell>{dataResult.totalCalculation.besi}</TableCell>
            <TableCell>{dataResult.totalCalculation.natrium}</TableCell>
            <TableCell>{dataResult.totalCalculation.kalium}</TableCell>
            <TableCell>{dataResult.totalCalculation.tembaga}</TableCell>
            <TableCell>{dataResult.totalCalculation.seng}</TableCell>
            <TableCell>{dataResult.totalCalculation.retinol}</TableCell>
            <TableCell>{dataResult.totalCalculation.bKaroten}</TableCell>
            <TableCell>{dataResult.totalCalculation.karotenTotal}</TableCell>
            <TableCell>{dataResult.totalCalculation.thiamin}</TableCell>
            <TableCell>{dataResult.totalCalculation.riboflavin}</TableCell>
            <TableCell>{dataResult.totalCalculation.niasin}</TableCell>
            <TableCell>{dataResult.totalCalculation.vitaminC}</TableCell>
            <TableCell>{dataResult.totalCalculation.bdd}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      {dataResult.data.length > 0 ? (
        <ButtonServerActionDeleteAllMenu user={user} />
      ) : null}
    </div>
  );
}

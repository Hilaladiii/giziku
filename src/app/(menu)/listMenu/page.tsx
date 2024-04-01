import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllMenus } from "@/services/menuService";
import { compositionType } from "@/types/compositionSchema";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[[...nextauth]]/route";
import AddToMenuBtn from "@/components/fragments/AddToMenuBtn";

export default async function MenuPage() {
  const menus = await getAllMenus();
  const session = await getServerSession(authOptions);
  const user = session?.user?.name || "";

  return (
    <div>
      <Table className="text-xs max-w-screen-lg mx-auto mt-10">
        <TableHeader>
          <TableRow>
            <TableHead>Kode</TableHead>
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
            <TableHead>Tembaga</TableHead>
            <TableHead>Seng</TableHead>
            <TableHead>bKar</TableHead>
            <TableHead>karTot</TableHead>
            <TableHead>Thiamin</TableHead>
            <TableHead>Riboflavin</TableHead>
            <TableHead>Niasin</TableHead>
            <TableHead>Vit-C</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {menus.data.map((menu: compositionType, index: number) => (
            <TableRow className="text-center" key={index}>
              <TableCell className="font-semibold">{menu.code}</TableCell>
              <TableCell className="truncate">{menu.name}</TableCell>
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
              <TableCell>{menu.tembaga}</TableCell>
              <TableCell>{menu.seng}</TableCell>
              <TableCell>{menu.bKar}</TableCell>
              <TableCell>{menu.karTot}</TableCell>
              <TableCell>{menu.thiamin}</TableCell>
              <TableCell>{menu.riboflavin}</TableCell>
              <TableCell>{menu.niasin}</TableCell>
              <TableCell>{menu.vitC}</TableCell>
              <TableCell>
                <AddToMenuBtn
                  menu={{ name: menu.name, code: menu.code, username: user }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

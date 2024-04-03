"use client";
import { ShowDialog } from "@/components/Custom-show-dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import { useMenu, useMenuDispatch } from "@/contexts/MenuContext";
import { SubmitAllMenus } from "@/services/menuService";

export default function SubmitComposition() {
  const menus = useMenu();
  const dispatch = useMenuDispatch();
  const handleSubmit = async () => {
    const res = await SubmitAllMenus(menus);
    toast({
      variant: res.status == 201 ? "default" : "destructive",
      description: res.message,
    });
    dispatch({
      type: "RESET_MENU",
      payload: menus[0],
    });
  };
  return (
    <>
      <Table className="max-w-[60rem] mx-auto mt-16">
        <TableCaption>
          A list of your menu that you will enter into the database.
        </TableCaption>
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
            <TableHead>Tembaga</TableHead>
            <TableHead>Seng</TableHead>
            <TableHead>bKar</TableHead>
            <TableHead>karTot</TableHead>
            <TableHead>Thiamin</TableHead>
            <TableHead>Riboflavin</TableHead>
            <TableHead>Niasin</TableHead>
            <TableHead>Vit-C</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {menus.map((menu, index: number) => (
            <TableRow className="text-center">
              <TableCell>{menu.nama}</TableCell>
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
              <TableCell>{menu.vitaminC}</TableCell>
              <TableCell>{menu.bKaroten}</TableCell>
              <TableCell>{menu.karotenTotal}</TableCell>
              <TableCell>{menu.thiamin}</TableCell>
              <TableCell>{menu.riboflavin}</TableCell>
              <TableCell>{menu.niasin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ShowDialog
        title="Apakah Data sudah benar?"
        description="data anda akan disubmit ke database, jika tidak sesuai maka akan ada kesalahan perhitungan"
        onclick={() => handleSubmit()}
      />
      <br />
      <br />
    </>
  );
}

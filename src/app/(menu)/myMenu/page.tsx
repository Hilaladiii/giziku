"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { useMenuUser } from "@/contexts/MenuUserContext";
import { useMenuUserDispatch } from "@/contexts/MenuUserContext";
import { AddMenuByUser } from "@/services/menuService";
import React, { useState } from "react";

export default function MyMenuPage() {
  const { toast } = useToast();
  const menuUser = useMenuUser();
  const dispatch = useMenuUserDispatch();
  console.log(menuUser);
  const [berat, setBerat] = useState(new Array(menuUser.length).fill(""));

  const handleChangeWeight = (index: number, value: number) => {
    const updateWeight = [...berat];
    updateWeight[index] = value;
    setBerat(updateWeight);
  };

  const handleAddMenuUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const isZero = berat.filter((data) => data == 0);
    if (isZero.length > 0) {
      toast({
        title: "Berat bahan tidak boleh 0",
        description: "silahkan isi data berat",
        variant: "destructive",
      });
      return;
    }
    const res = await AddMenuByUser(menuUser, berat);
    console.log(res);
    toast({
      title: res.status == 500 ? "Error" : "Success",
      description: res.message,
      variant: res.status == 500 ? "destructive" : "default",
    });
  };
  return (
    <main className="px-10">
      <Table className="max-w-[50rem] mx-auto mt-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w-32">Berat</TableHead>
            <TableHead>Kode</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {menuUser.map((menu, index: number) => (
            <TableRow className="text-center" key={index}>
              <TableCell className="w-32">
                <Input
                  type="number"
                  required
                  onChange={(e) =>
                    handleChangeWeight(index, Number(e.target.value))
                  }
                />
              </TableCell>
              <TableCell className="font-semibold">{menu.code}</TableCell>
              <TableCell>{menu.name}</TableCell>
              <TableCell>
                <Button
                  onClick={() =>
                    dispatch({
                      type: "DELETE_TO_MY_MENU",
                      payload: menu,
                    })
                  }
                  variant="destructive"
                >
                  -
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {menuUser.length > 0 && (
        <Button className="flex mx-auto" onClick={handleAddMenuUser}>
          Submit
        </Button>
      )}
    </main>
  );
}

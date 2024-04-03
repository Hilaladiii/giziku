"use client";
import { Button } from "@/components/ui/button";
import { data } from "@/lib/data";
import { SubmitAllMenus } from "@/services/menuService";

export default function AddAllData() {
  const handleAddAllData = async () => {
    await SubmitAllMenus(data);
  };
  return (
    <div>
      <div>
        <Button onClick={handleAddAllData}>add all data</Button>
      </div>
    </div>
  );
}

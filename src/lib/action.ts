"use server";

import { deleteMyMenu } from "@/services/menuService";
import { revalidatePath } from "next/cache";

export async function actionDeleteMyMenu({ id }: { id: string }) {
  try {
    await deleteMyMenu({ id });
  } catch (error) {
    return "failed to delete my menu";
  }
  revalidatePath("/result");
}

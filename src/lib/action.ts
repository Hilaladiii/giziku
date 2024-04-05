"use server";

import { deleteAllMyMenu, deleteMyMenu } from "@/services/menuService";
import { revalidatePath } from "next/cache";

export async function actionDeleteMyMenu({ id }: { id: string }) {
  try {
    await deleteMyMenu({ id });
  } catch (error) {
    return "failed to delete my menu";
  }
  revalidatePath("/result");
}

export async function actionDeleteAllMyMenu({ user }: { user: string }) {
  try {
    await deleteAllMyMenu({ user });
  } catch (error) {
    return "failed to delete all menu";
  }
  revalidatePath("/result");
}

"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { menuSchema } from "@/types/menuSchema";
import { useMenuDispatch } from "@/contexts/MenuContext";

export default function CompositionForm() {
  const dispatch = useMenuDispatch();
  const form = useForm<z.infer<typeof menuSchema>>({
    resolver: zodResolver(menuSchema),
    defaultValues: {
      nama: "",
      air: 0,
      abu: 0,
      besi: 0,
      bKaroten: 0,
      energi: 0,
      fosfor: 0,
      kalium: 0,
      kalsium: 0,
      karotenTotal: 0,
      kh: 0,
      lemak: 0,
      natrium: 0,
      niasin: 0,
      protein: 0,
      riboflavin: 0,
      seng: 0,
      serat: 0,
      tembaga: 0,
      thiamin: 0,
      vitaminC: 0,
      bdd: 0,
      retinol: 0,
    },
  });
  function onSubmit(values: z.infer<typeof menuSchema>) {
    dispatch({
      type: "ADD_MENU",
      payload: values,
    });
  }
  if (form.formState.isSubmitSuccessful) form.reset();

  return (
    <Form {...form}>
      <div className="mb-5">
        <h1 className="font-bold text-2xl">Form Pengisian Data Bahan</h1>
        <p className="text-sm text-zinc-600">
          Masukkan data bahan secara teliti yaa...
        </p>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-10 gap-6">
          <FormField
            control={form.control}
            name="nama"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input placeholder="Nama Bahan" {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="air"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Air</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="energi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Energi</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="protein"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Protein</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lemak"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lemak</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kh"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kh</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Serat</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="abu"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Abu</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kalsium"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kalsium</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fosfor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fosfor</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="besi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Besi</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="natrium"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Natrium</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kalium"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kalium</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tembaga"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tembaga</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="seng"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seng</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="retinol"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Retinol</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bKaroten"
            render={({ field }) => (
              <FormItem>
                <FormLabel>bKar</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="karotenTotal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>karTot</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="thiamin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thiamin</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="riboflavin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Riboflavin</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="niasin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Niasin</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="vitaminC"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vit-C</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bdd"
            render={({ field }) => (
              <FormItem>
                <FormLabel>BDD</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="flex mx-auto"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Loading..." : "Add Data Menu"}
        </Button>
      </form>
    </Form>
  );
}

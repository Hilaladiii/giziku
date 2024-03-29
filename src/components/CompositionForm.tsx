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
import { compositionSchema } from "@/types/compositionSchema";

export default function CompositionForm() {
  const form = useForm<z.infer<typeof compositionSchema>>({
    resolver: zodResolver(compositionSchema),
    defaultValues: {
      name: "",
      ingredientCode: "",
      air: 0,
      abu: 0,
      besi: 0,
      bKar: 0,
      energi: 0,
      fosfor: 0,
      kalium: 0,
      kalsium: 0,
      karTot: 0,
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
      vitC: 0,
    },
  });
  async function onSubmit(values: z.infer<typeof compositionSchema>) {
    console.log(values);
    try {
      const response = await fetch("http://localhost:3000/api/addMenu", {
        method: "POST",
        body: JSON.stringify(values),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <div className="mb-5">
        <h1 className="font-bold text-3xl">Form Pengisian Data Bahan</h1>
        <p className="text-md text-zinc-600">
          Masukkan data bahan secara teliti yaa...
        </p>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-10 gap-6">
          <FormField
            control={form.control}
            name="name"
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
            name="ingredientCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kode</FormLabel>
                <FormControl>
                  <Input placeholder="MT-887" {...field} type="text" />
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
            name="vitC"
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
            name="bKar"
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
            name="karTot"
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
        </div>
        <Button type="submit" className="flex mx-auto">
          Submit Data Menu
        </Button>
      </form>
    </Form>
  );
}

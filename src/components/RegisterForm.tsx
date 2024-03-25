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
import { useToast } from "./ui/use-toast";
import Link from "next/link";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(5, "minimum username is 5 characters").max(50),
  email: z.string().email(),
  password: z.string().min(8, "minimum password is 8 characters"),
});

export default function RegisterForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        body: JSON.stringify(values),
      });

      const res = await response.json();
      console.log(res);
      toast({
        variant: res.status == 400 ? "destructive" : "default",
        description: res.message,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Failed to register your account",
      });
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="john doe" {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@gmail.com"
                  {...field}
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="........" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>
      <div className="flex flex-row mt-5 justify-center items-center gap-1">
        <p className="text-sm">sudah memiliki akun?</p>
        <Link
          href="/login"
          className="text-sm text-zinc-700 hover:text-zinc-500"
        >
          Login
        </Link>
      </div>
    </Form>
  );
}

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
import Link from "next/link";
import { signIn } from "next-auth/react";
import { toast } from "./ui/use-toast";
import { useSearchParams } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "minimum password is 8 characters"),
});
export default function LoginForm() {
  const getCallback = useSearchParams();
  const callbackUrl = getCallback.get("callbacks");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, password } = values;
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: callbackUrl || "/",
      });
      console.log(response);
      if (response?.status === 401) {
        toast({
          variant: "destructive",
          description: "email or password incorrect",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: (error as TypeError).message,
      });
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
          Login
        </Button>
      </form>
      <div className="flex flex-row mt-5 justify-center items-center gap-1">
        <p className="text-sm">belum memiliki akun?</p>
        <Link
          href="/register"
          className="text-sm text-zinc-700 hover:text-zinc-500"
        >
          Register
        </Link>
      </div>
    </Form>
  );
}

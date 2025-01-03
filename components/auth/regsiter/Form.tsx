"use client";
import { registerFormSchema } from "@/schema/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Loader } from "lucide-react";
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
import { SIGNUP_MUTATION } from "@/queries";
import { useMutation } from "@apollo/client";
import { DEFAULT_LOGIN_REDIRECT_ROUTE } from "@/constant/routes";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function RegisterForm() {
  const router = useRouter();
  // Default
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  //
  const [signup, { loading }] = useMutation<any, any>(SIGNUP_MUTATION);
  // Submit function
  const onSubmit = async (formData: z.infer<typeof registerFormSchema>) => {
    try {
      const res = await signup({ variables: formData });
      if (res?.data?.signup) {
        const login = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: false,
        });
        // Login user
        if (login?.status === 200) {
          router.push(DEFAULT_LOGIN_REDIRECT_ROUTE);
        } else {
        }
      }else{
        toast.error(res?.errors?.[0]?.message || "Error, Please try again!")
      }
    } catch (err) {
      toast.error( "Error, Please try again!")
    }
  };

  return (
    <Form {...form}>
      <form
        className="mt-8 space-y-4 gap-4 grid md:grid-cols-2 col-span-1"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="col-span-2 md:flex md:gap-4 md:space-y-0 space-y-4">
          <div className="w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    Full name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="block sm:leading-6 w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:!ring-xblue-600 sm:text-sm"
                      placeholder="First Name"
                      {...field}
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="col-span-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </FormLabel>
                <FormControl>
                  <Input
                    className="block sm:leading-6 w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:!ring-xblue-600 sm:text-sm"
                    placeholder="name@example.com"
                    {...field}
                    disabled={loading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-2">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <div className="flex items-center justify-between">
                  <FormLabel>Password</FormLabel>
                </div>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="********"
                    {...field}
                    className="block sm:leading-6 w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:!ring-xblue-600 sm:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-2">
          <Button
            type="submit"
            className="flex w-full items-center justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {!loading ? (
              "Sign Up"
            ) : (
              <Loader className="my-0.5 h-5 w-5 animate-spin" />
            )}
          </Button>
        </div>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <a
            href="/auth/login"
            className="font-medium text-primary hover:text-primary-dark dark:text-primary-500"
          >
            Login here
          </a>
        </p>
      </form>
    </Form>
  );
}

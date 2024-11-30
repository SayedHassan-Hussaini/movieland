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

export default function RegisterForm() {
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
  const [signup, { data, loading, error }] = useMutation<any, FormData>(
    SIGNUP_MUTATION
  );
  // Submit function
  const onSubmit = async (formData: z.infer<typeof registerFormSchema>) => {
    try {
      const response = await signup({ variables: formData });
    } catch (err) {
      console.log("err.........", err);
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

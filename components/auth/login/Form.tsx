"use client";
import { loginFormSchema } from "@/schema/login";
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
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DEFAULT_LOGIN_REDIRECT_ROUTE } from "@/constant/routes";
import { useOrigin } from "@/hooks/use-origin";
import { toast } from "sonner";
import { login } from "./action";

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const origin = useOrigin();
  const redirectUrl = `${origin}${DEFAULT_LOGIN_REDIRECT_ROUTE}`;
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // Submit function
  const onSubmit = async (formData: z.infer<typeof loginFormSchema>) => {
    startTransition(() => {
      login(formData)
        .then((data) => {
          if (data?.error) {
            form.reset();
            toast.error(data?.error);
          } else {
            window.location.href = redirectUrl;
          }
        })
        .catch((error) => toast.error(error?.error));
    });
  };

  return (
    <Form {...form}>
      <form className="mt-8 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div>
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
                    autoFocus
                    className="block sm:leading-6 w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:!ring-xblue-600 sm:text-sm"
                    placeholder="name@example.com"
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
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
                    disabled={isPending}
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

        <div>
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md bg-xblue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-xblue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-xblue-600 disabled:cursor-not-allowed"
            disabled={isPending}
          >
            {!isPending ? (
              "Sign in"
            ) : (
              <Loader className="my-0.5 h-5 w-5 animate-spin" />
            )}
          </button>
        </div>
      </form>
    </Form>
  );
}

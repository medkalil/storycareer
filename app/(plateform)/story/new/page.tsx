"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

const formSchema = z.object({
  title: z.string().min(2, { message: "Title is Required!!!" }).max(50),
});

const NewStorypage = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const { userId } = useAuth();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      toast("Story is creating...");

      const res = await axios.post("/api/story", {
        ...values,
        userId,
      });

      if (res.status == 201) {
        toast("Story is created", {
          className: "bg-emerald-500 text-white",
        });
        router.refresh();
      }
    } catch (error) {
      toast("Something went wrong", {
        className: "bg-rose-500 text-white",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="flex flex-col space-x-10">
        <div>
          <h1 className="text-2xl font-semibold">Give Your Story a Title</h1>
          <p className="text-sm text-muted-foreground">
            Name Your Story don&apos;t worry you can change it later
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="(ex: today i deplouerd my first project)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting && <Loader className="mr-2 w-5 h-5 animate-spin" />}
              Create
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default NewStorypage;

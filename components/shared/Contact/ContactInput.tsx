"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters." }),
  inquiryType: z.string({ message: "Inquiry Type is required" }),
  howDidYouHearAboutUs: z.string({ message: "You must select a option " }),
  message: z
    .string()
    .min(2, { message: "Message must be at least 2 characters." }),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  inquiryType: "",
  howDidYouHearAboutUs: "",
  message: "",
  terms: false,
};

export default function ContactInput() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <section className="flex flex-col container mx-auto text-white mt-[40px]">
      <div className="mt-[40px] w-full border border-[var(--color-gray_15)] rounded-xl shadow-2xl p-[100px] ">
        <Form {...form}>
          <form
            className="w-full flex flex-col gap-[50px]"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-3 gap-[50px]">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-semibold leading-[150%]">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[var(--color-gray_10)] outline-none border border-[var(--color-gray_15)] min-h-[60px] shadow-md placeholder:text-lg placeholder:text-[var(--color-gray_60)] placeholder:font-normal"
                        placeholder="Enter First Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-semibold leading-[150%]">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[var(--color-gray_10)] outline-none border border-[var(--color-gray_15)] min-h-[60px] shadow-md placeholder:text-lg placeholder:text-[var(--color-gray_60)] placeholder:font-normal"
                        placeholder="Enter Last Name"
                        {...field}
                      />
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
                    <FormLabel className="text-[20px] font-semibold leading-[150%]">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[var(--color-gray_10)] outline-none border border-[var(--color-gray_15)] min-h-[60px] shadow-md placeholder:text-lg placeholder:text-[var(--color-gray_60)] placeholder:font-normal"
                        placeholder="Enter your Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-3 gap-[50px]">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-semibold leading-[150%]">
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[var(--color-gray_10)] outline-none border border-[var(--color-gray_15)] min-h-[60px] shadow-md placeholder:text-lg placeholder:text-[var(--color-gray_60)] placeholder:font-normal"
                        placeholder="Enter Phone Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="inquiryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-semibold leading-[150%]">
                      Inquiry Type
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-[var(--color-gray_10)] outline-none border border-[var(--color-gray_15)] min-h-[60px] shadow-md placeholder:text-lg placeholder:text-[var(--color-gray_60)] placeholder:font-normal">
                          <SelectValue placeholder="Select Inquiry Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[var(--color-gray_08)] text-white border-none font-normal text-base">
                        <SelectItem value="Basic">Basic</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Final">Final</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="howDidYouHearAboutUs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-semibold leading-[150%]">
                      How Did You Hear About Us?
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-[var(--color-gray_10)] outline-none border border-[var(--color-gray_15)] min-h-[60px] shadow-md placeholder:text-lg placeholder:text-[var(--color-gray_60)] placeholder:font-normal">
                          <SelectValue placeholder="Select " />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[var(--color-gray_08)] text-white border-none font-normal text-base">
                        <SelectItem value="Instagram">Instagram</SelectItem>
                        <SelectItem value="Facebook">Facebook</SelectItem>
                        <SelectItem value="Linkedin">Linkedin</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[20px] font-semibold leading-[150%]">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={4}
                      placeholder="Enter your Message here.."
                      className="resize-y bg-[var(--color-gray_10)] min-h-[120px] placeholder:text-lg placeholder:text-[var(--color-gray_60)] placeholder:font-normal outline-none border border-[var(--color-gray_15)] shadow-md "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
                 <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <>
                    <FormItem className="flex justify-center items-center space-x-2">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        ref={field.ref}
                        className="border-[var(--color-gray_15)] size-5 bg-[var(--color-gray_20)]"
                      />
                      <Label>I agree with Terms of Use and Privacy Policy</Label>
                    </FormItem>
                    <FormMessage />
                  </>
                )}
              />

              <Button
                className="py-[18px] px-[46px] h-[60px] rounded-md bg-[var(--color-purple_60)] shadow-md text-lg font-medium leading-[24px] hover:bg-[var(--color-purple_75)]"
                type="submit"
              >
                Send Your Message
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}

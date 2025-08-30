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
import { z } from "zod";

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
  location: z.string({ message: "Location is required." }),
  propertyType: z.string({ message: "Property type is required." }),
  bathrooms: z.string({ message: "Number of bathrooms is required." }),
  bedrooms: z.string({ message: "Number of bedrooms is required." }),
  budget: z
    .string()
    .min(2, { message: "Budget must be at least 2 characters." }),
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
  location: "",
  propertyType: "",
  bathrooms: "",
  bedrooms: "",
  budget: "",
  message: "",
  terms: false,
};

const MakeInput = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <section className="flex flex-col container mx-auto text-white mt-[40px]">
      <div className="w-[70%] flex items-start justify-center flex-col gap-10">
        <h2 className="text-5xl font-semibold leading-1.5">{`Let's Make it Happen`}</h2>
        <p>{`Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.`}</p>
      </div>
      <div className="mt-[40px] w-full border border-[var(--color-gray_15)] rounded-xl shadow-2xl p-[100px] flex flex-col gap-[50px]">
        <Form {...form}>
          <form
            className="w-full flex flex-col gap-[50px]"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* Personal Info */}
            <div className="grid grid-cols-4 gap-[50px]">
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
            </div>
            {/* Select Options */}
            <div className="grid grid-cols-4 gap-[50px]">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-semibold leading-[150%]">
                      Preferred Location
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-[var(--color-gray_10)] outline-none border border-[var(--color-gray_15)] min-h-[60px] shadow-md placeholder:text-lg placeholder:text-[var(--color-gray_60)] placeholder:font-normal">
                          <SelectValue placeholder="Select Location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="New York">New York</SelectItem>
                        <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                        <SelectItem value="Chicago">Chicago</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-semibold leading-[150%]">
                      Property Type
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-[var(--color-gray_10)] outline-none border border-[var(--color-gray_15)] min-h-[60px] shadow-md placeholder:text-lg placeholder:text-[var(--color-gray_60)] placeholder:font-normal">
                          <SelectValue placeholder="Select Property Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Apartment">Apartment</SelectItem>
                        <SelectItem value="House">House</SelectItem>
                        <SelectItem value="Condo">Condo</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bathrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-semibold leading-[150%]">
                      No. of Bathrooms
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-[var(--color-gray_10)] outline-none border border-[var(--color-gray_15)] min-h-[60px] shadow-md placeholder:text-lg placeholder:text-[var(--color-gray_60)] placeholder:font-normal">
                          <SelectValue placeholder="Select no of Bathrooms" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-semibold leading-[150%]">
                      No. of Bedrooms
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-[var(--color-gray_10)] outline-none border border-[var(--color-gray_15)] min-h-[60px] shadow-md">
                          <SelectValue placeholder="Select no of Bedrooms" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Budget */}
            <div className="grid grid-cols-2 gap-[50px]">
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-semibold leading-[150%]">
                      Budget
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-[var(--color-gray_10)] outline-none border border-[var(--color-gray_15)] min-h-[60px] shadow-md ">
                          <SelectValue placeholder="Select Budget" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="$100000">$100000</SelectItem>
                        <SelectItem value="$150000">$150000</SelectItem>
                        <SelectItem value="$200000">$200000</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Message */}
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
                      placeholder="Enter your Message here.."
                      className="resize-y bg-[var(--color-gray_10)] min-h-[120px] placeholder:text-lg placeholder:text-[var(--color-gray_60)] placeholder:font-normal outline-none border border-[var(--color-gray_15)] shadow-md "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Terms and Submit */}
            <div className="w-full flex items-center justify-between">
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
                      />
                      <Label>I accept the terms and conditions</Label>
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
};

export default MakeInput;

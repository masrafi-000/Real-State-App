"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
const formSchema = z.object({
    firstName: z.string().min(2, {message: "First name must be at least 2 characters."}),
    lastName: z.string().min(2, {message: "Last name must be at least 2 characters."}),
    email: z.string().email({message: "Invalid email address."}),
    phone: z.string().min(10, {message: "Phone number must be at least 10 characters."}),
})

const MakeInput = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: ""
        }
    })

  return (
    <section className=' flex flex-col container mx-auto text-white mt-[40px]'>

        <div className=' w-[70%] flex items-start justify-center flex-col gap-10  '>
                <h2 className=' text-5xl font-semibold leading-1.5 ' >{`Let's Make it Happen`}</h2>
                <p>{`Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.`}</p>
        </div>
        <div className=' mt-[40px] w-full border border-[var(--color-gray_15)] shadow-2xl p-[100px] flex flex-col gap-[50px] '>
            <Form {...form}>
                    <form className='w-full grid grid-cols-4 gap-[50px]'>
                        <FormField control={form.control} name='firstName' render={({field}) => (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input placeholder='Enter First Name' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <FormField control={form.control} name='lastName' render={({field}) => (
                            <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder='Enter Last Name' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <FormField control={form.control} name='email' render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder='Enter your Email' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <FormField control={form.control} name='phone' render={({field}) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input placeholder='Enter Phone Number' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>

                        
                    </form>
            </Form>
            <div className='grid grid-cols-4 gap-[50px]'></div>
            <div className='grid grid-cols-3 gap-[50px]'></div>
            <div></div>
            <div></div>
        </div>
    </section>
  )
}

export default MakeInput
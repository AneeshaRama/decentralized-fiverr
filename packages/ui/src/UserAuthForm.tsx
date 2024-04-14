"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './shadcn/ui/form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from './shadcn/ui/input'
import { Button } from './shadcn/ui/button'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const formSchema = z.object({
  email: z.string().min(2, {message: 'email address is required'}).email({message: "Please enter valid email address"}),
  password: z.string().min(6, {message: 'Password must contain atleast 6 characters'}),
})

export const UserAuthForm = () => {

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''      
    },
  })

  const handleSignUp = async()=>{

  }

  return (
    <div className='mt-5'>
       <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-8">
              <div className='flex flex-col items-center justify-center gap-y-4'>
                <FormField
                  control={form.control}
                    name='email'
                      render={({field})=>(
                        <FormItem>
                          <FormControl>
                              <Input className='lg:w-[24rem]' placeholder='email address' {...field}/>
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                <FormField
                  control={form.control}
                    name='password'
                      render={({field})=>(
                        <FormItem>
                          <FormControl>
                              <div className='relative'>
                                <Input className='lg:w-[24rem]' type={showPassword ? 'text' : 'password'} placeholder='password' {...field}/>
                                <div className='absolute top-3 right-2 cursor-pointer'>
                                  {showPassword ? <Eye onClick={()=> setShowPassword(!showPassword)} className='h-4 w-4 text-primary'/> : <EyeOff onClick={()=> setShowPassword(!showPassword)}  className='h-4 w-4 text-primary'/>}
                                </div>
                              </div>
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
              </div>
              <Button className='w-full' variant={'primary'}>
                      Submit
              </Button>
            </form>
        </Form>
    </div>
  )
}

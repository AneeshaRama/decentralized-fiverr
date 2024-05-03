"use client"

import { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './shadcn/ui/form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from './shadcn/ui/input'
import { BecomeSellerProgressBar } from './BecomeSellerProgressBar'
import { Button } from './shadcn/ui/button'
import { ArrowRight } from 'lucide-react'
import { Textarea } from './shadcn/ui/textarea'

const formSchema = z.object({
    firstName: z.string().min(2, {message: 'first name is required'}),
    lastName: z.string().min(2, {message: 'last name name is required'}),
    bio: z.string().optional(),
    location: z.string().optional(),
    website: z.string().optional(),
    profession: z.string(),
    experience: z.string(),
    achievements: z.string()    
})


export const SellerInfoForm = ({isProfilePage}: {isProfilePage: boolean}) => {

  const [page, setPage] = useState("personalInfo");

  const nextPage = (page: string) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber: string) => {
    switch (pageNumber) {
      case "1":
        setPage("personalInfo");
        break;
      case "2":
        setPage("professionalInfo");
        break;
      case "3":
        setPage("avatar");
        break;
      case "4":
        setPage("preview")
        break;
      default:
        setPage("1");
    }
  };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          firstName: '',
          lastName: '',
          bio:'',
          location: '',
          website: '',
          profession: '',
          experience: '',
          achievements: ''
        },
      })

      const onSubmit = async ()=>{

      }

  return (
    <div>
      {!isProfilePage && <BecomeSellerProgressBar page={page} onPageNumberClick={nextPageNumber} />}
      <Form  {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {
          page === 'personalInfo' && (
            <div className='flex flex-col'>
              <div className='px-10 md:p-2 md:flex items-center justify-center w-full mt-20 gap-x-5'>
                <FormField
                  control={form.control}
                    name='firstName'
                      render={({field})=>(
                        <FormItem>
                          <FormLabel className='text-secondary'>What is your first name?</FormLabel>
                          <FormControl>
                              <Input className='lg:w-[24rem]' placeholder='first name' {...field}/>
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                />
                <FormField
                  control={form.control}
                    name='lastName'
                      render={({field})=>(
                        <FormItem>
                          <FormLabel className='text-secondary'>What is your last name?</FormLabel>
                          <FormControl>
                              <Input className='lg:w-[24rem]' placeholder='last name' {...field}/>
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                />
              </div>
              <div className='px-10 md:p-2 md:flex items-center justify-center w-full gap-x-5'>
                <FormField
                  control={form.control}
                    name='website'
                      render={({field})=>(
                        <FormItem>
                          <FormLabel className='text-secondary'>Do you have a web site?</FormLabel>
                          <FormControl>
                              <Input className='lg:w-[24rem]' placeholder='website url' {...field}/>
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                />
                <FormField
                  control={form.control}
                    name='location'
                      render={({field})=>(
                        <FormItem>
                          <FormLabel className='text-secondary'>Where are you from?</FormLabel>
                          <FormControl>
                              <Input className='lg:w-[24rem]' placeholder='city name' {...field}/>
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                />
              </div>
             <div className='px-10 md:p-2 md:flex items-center justify-center w-full gap-x-5'>
             <FormField
                  control={form.control}
                    name='bio'
                      render={({field})=>(
                        <FormItem>
                          <FormLabel className='text-secondary'>What describes you?</FormLabel>
                          <FormControl>
                              <Textarea className='lg:w-[50rem]' placeholder='your bio..' {...field}/>
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                />
             </div>
              <div className='px-10 md-p-2 md:flex items-center justify-center gap-x-5 mt-10'>
                <Button className='w-80 text-white dark:bg-white dark:text-secondary flex items-center justify-center gap-x-2' onClick={()=> nextPage("professionalInfo")}>
                      <p>Next</p>
                      <ArrowRight className='h4 w-4'/>
                </Button>
              </div>
            </div>
          )
        }
        {
          page === "professionalInfo" && (
            <div>
              <div className='px-10 md-p-2 md:flex items-center justify-center w-full mt-20 gap-x-5'>
                  <FormField
                    control={form.control}
                      name='profession'
                        render={({field})=>(
                          <FormItem>
                            <FormLabel className='text-secondary'>What is your profession?</FormLabel>
                            <FormControl>
                                <Input className='lg:w-[24rem]' placeholder='your profession' {...field}/>
                            </FormControl>
                            <FormMessage/>
                          </FormItem>
                      )}
                  />
                  <FormField
                    control={form.control}
                      name='experience'
                        render={({field})=>(
                          <FormItem>
                            <FormLabel className='text-secondary'>How much experience you have?</FormLabel>
                            <FormControl>
                                <Input className='lg:w-[24rem]' placeholder='your profession' {...field}/>
                            </FormControl>
                            <FormMessage/>
                          </FormItem>
                      )}
                  />
              </div>
              <div className='px-10 md:p-2 md:flex items-center justify-center w-full gap-x-5'>
             <FormField
                  control={form.control}
                    name='bio'
                      render={({field})=>(
                        <FormItem>
                          <FormLabel className='text-secondary'>What are your achievements?</FormLabel>
                          <FormControl>
                              <Textarea rows={7} className='lg:w-[50rem]' placeholder='your achievements..' {...field}/>
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                />
             </div>
             <div className='px-10 md-p-2 md:flex items-center justify-center gap-x-5 mt-10'>
                <Button className='w-80 text-white dark:bg-white dark:text-secondary flex items-center justify-center gap-x-2' onClick={()=> nextPage("avatar")}>
                      <p>Next</p>
                      <ArrowRight className='h4 w-4'/>
                </Button>
              </div>
            </div>
          )
        }
      </form>
    </Form>
    </div>
  )
}
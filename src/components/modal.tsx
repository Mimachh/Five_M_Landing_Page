"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useRouter, usePathname } from "next/navigation"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm } from "react-hook-form"
import Link from "next/link"

import { formSchema } from "@/utils/zod"
import { useState } from "react"
import { Loader } from "./loader"
import { DialogClose } from "@/components/ui/close-modale"


const modal = () => {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            terms: false
        },
      })

      const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true);  
            await axios.post('/api/inscriptions', values); 
            toast.success("Vous êtes pré-inscrit !");
            document.getElementById('closeDialog')?.click();

        } catch (error) {
            toast.error('Une erreur est survenue.');
        }  finally {
            setLoading(false); 
        }
        console.log(values)
      }

  return (
    <Dialog>
    <DialogTrigger className="bg-dark" asChild>
        <Button  size="xl" variant="destructive"  
        className="bg-dark text-md md:text-lg
        hover:bg-transparent group
        ">
        <span className="text-transparent bg-clip-text gradient-perso">Pré-inscription</span>
        </Button>
    </DialogTrigger>
    <DialogContent className="bg-light text-dark">
        <DialogClose>
        </DialogClose>
      <DialogHeader className="border-b  pb-4">
        <DialogTitle>Pré-inscription</DialogTitle>
        <DialogDescription>
          Nous reviendrons vers vous par mail à l'ouverture officielle du serveur. Soyez au aguet !
        </DialogDescription>
      </DialogHeader>
        <div >

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="py-4 space-y-4">            
                    {loading? (
                        <div className="flex justify-center">
                            <Loader />
                        </div> 
                    ) : (
                        <div className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Nom</FormLabel>
                                <FormControl>
                                    <Input placeholder="Votre nom" {...field} />
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
                                <FormLabel>Email*</FormLabel>
                                <FormControl>
                                    <Input type="mail" placeholder="Votre mail" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="terms"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">
                                <FormControl>
                                    <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>
                                    J'ai pris connaissance des <Link className="text-primary underline" href="/examples/forms">conditions d'utilisation</Link>*.
                                    </FormLabel>
                                    <FormMessage />
                                </div>
                                </FormItem>
                            )}
                        />
                        </div>
                    )}

                    <Button disabled={loading} type="submit" className="text-light">Envoyer</Button>
                </form>
            </Form>
        </div>
    </DialogContent>
  </Dialog>
  )
}

export default modal
"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMail } from "@/lib/send-mail";
import { toast } from "sonner";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaViber } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Molimo unesite vase ime i prezime" }),
  phone: z.string().min(2, { message: "Molimo unesite vas broj telefona" }),
  email: z.string().email({ message: "Molimo unesite vasu email adresu" }),
  message: z.string().min(10, {
    message: "Poruka mora imati najmanje 10 karaktera.",
  }),
});
export default function Contact() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `Ime: ${values.name}\n Telefon: ${values.phone}\n Email: ${values.email}\n Poruka: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: "New Contact Us Form",
      text: mailText,
    });

    if (response?.messageId) {
      toast.success("Application Submitted Successfully.");
    } else {
      toast.error("Failed To send application.");
    }
    form.reset();
  };
  return (
    <div className=" bg-muted-foreground text-muted">
      <div className="container mx-auto pt-28 pb-16 px-2 md:px-8 md:py-32 space-y-8 md:space-y-24">
        <h1 className="text-2xl md:text-5xl pl-2 md:px-32">
          Kontakt enterijeri Kankan
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className=" mx-6 md:mx-20">
            <div className="space-y-3 md:space-y-10 text-lg md:text-2xl">
              <a
                href="tel:+38163216444"
                className="py-[7px] flex border-b-[1px] border-primary"
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  <FaPhone className="text-[20px] lg:text-[30px]" />
                  +38163 216 444
                </button>
              </a>
              <a
                href="viber://chat?number=%2B38163216444"
                className="py-[7px] flex border-b-[1px] border-primary"
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  <FaViber className="text-[28px] lg:text-[35px] p-1 bg-purple-600 text-white rounded-xl rounde" />{" "}
                  +38163 216 444
                </button>
              </a>
              <a
                href="https://wa.me/38163216444"
                className="py-[7px] flex border-b-[1px] border-primary"
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  <FaWhatsappSquare className="text-[30px] lg:text-[35px] rounded-2xl text-green-700 " />{" "}
                  +38163 216 444
                </button>
              </a>
              <a
                href="mailto:kankan732@gmail.com

                "
                className="py-[7px] flex border-b-[1px] border-primary"
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  <Mail className=" w-[28px] h-[28px]" /> kankan732@gmail.com
                </button>
              </a>
              <a
                href="https://www.instagram.com/enterijeri_kankan/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-[7px] flex border-b-[1px] border-primary "
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  {" "}
                  <FaInstagram className=" text-[28px] lg:text-[30px]" />
                  enterijeri_kankan
                </button>
              </a>
            </div>
            <div className="pl-4 md:pl-7 pt-4 lg:pt-12"></div>
          </div>
          <div className="mx-6 md:mx-20 bg-muted rounded-3xl text-muted-foreground">
            <Form {...form}>
              <form
                className="grid grid-cols-3 items-center p-4 lg:p-10"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="col-span-3 flex flex-col gap-4 lg:col-span-3 lg:gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="lg:text-xl">
                          Ime i Prezime:
                        </FormLabel>

                        <FormControl>
                          <Input
                            placeholder="Unesite ime i prezime"
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
                        <FormLabel className="lg:text-xl">
                          Broj telefona:
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Unesite vas broj telefona"
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
                        <FormLabel className="lg:text-xl">Email:</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="lg:text-xl">
                          Vasa poruka:
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Vasa poruka za nas"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    disabled={isLoading}
                    className="bg-primary  hover:bg-gray-600 transition-colors ease-in-out duration-500"
                  >
                    {isLoading ? "Sending....." : "Send"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ContactFormSchema } from "@/services/contact.schema";
import type { ContactForm } from "@/services/contact.schema";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      content: "",
    },
  });

  function onSubmit(data: ContactForm) {
    setSubmitting(true);

    const request = fetch("/api/contact", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    toast.promise(request, {
      loading: "Chargement en cours...",
      success: (_data) => {
        form.reset();
        setSubmitting(false);
        return "Votre message a bien été envoyé. Merci !";
      },
      error(_error) {
        setSubmitting(false);
        return "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.";
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Saisissez votre nom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Saisissez votre email"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Saisissez un message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-row-reverse">
          <Button
            type="submit"
            variant="outline"
            className="border-primary"
            disabled={submitting}
          >
            Envoyer
          </Button>
        </div>
      </form>
    </Form>
  );
}

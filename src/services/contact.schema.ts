import { z } from "zod";

export const ContactFormSchema = z.object({
  // Maximum allowed by discord title is 256
  name: z
    .string()
    .min(2, {
      message: "Le nom doit contenir au moins 2 caractères.",
    })
    .max(100, {
      message: "Le nom doit contenir au maximum 100 caractères.",
    }),
  // Maximum allowed by discord footer.text is 2048
  email: z.string().email({ message: "L'email n'est pas valide" }).max(256, {
    message: "L'email doit contenir au maximum 256 caractères.",
  }),
  // Maximum allowed by discord description is 4096
  content: z
    .string()
    .min(10, {
      message: "Le contenu doit contenir au moins 10 caractères.",
    })
    .max(2048, {
      message: "Le contenu doit contenir au maximum 2048 caractères.",
    }),
});
export type ContactForm = z.infer<typeof ContactFormSchema>;

import { ContactFormSchema } from "@/services/contact.schema";

export const runtime = "edge";

export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    // The request was not a JSON
    return Response.json(
      { success: false, error: "Expected a JSON body." },
      { status: 400 }
    );
  }

  const contactForm = ContactFormSchema.safeParse(body);
  if (!contactForm.success || !contactForm.data) {
    return Response.json(
      {
        success: false,
        error: contactForm.error.errors
          .map((e) => e.path + ": " + e.message)
          .join("; "),
      },
      { status: 400 }
    );
  }

  const { name, email, content } = contactForm.data;
  try {
    if (!process.env.API_CONTACT_DISCORD_WEBHOOK) {
      throw new Error("Missing environment variable.");
    }

    await fetch(process.env.API_CONTACT_DISCORD_WEBHOOK, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "clementricatte.fr",
        avatar_url: "https://avatars3.githubusercontent.com/u/27494805",
        embeds: [
          {
            title: name,
            description: content,
            color: 15712038, // #efbf26
            footer: {
              text: email,
            },
          },
        ],
      }),
    });
  } catch (error) {
    // The request was not JSON
    return Response.json(
      {
        success: false,
        error:
          "Une erreur est survenue lors de la livraison de votre message. Veuillez réessayer.",
      },
      { status: 400 }
    );
  }

  return new Response(null, { status: 204 });
}

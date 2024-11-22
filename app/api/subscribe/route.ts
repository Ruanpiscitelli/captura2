import { NextResponse } from "next/server";
import { z } from "zod";
import { sendWelcomeEmail, addToMarketingList } from "@/lib/sendgrid";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // Adiciona o contato à lista de marketing do SendGrid
    await addToMarketingList(data);

    // Envia o email de boas-vindas
    await sendWelcomeEmail(data);

    return NextResponse.json(
      { message: "Inscrição realizada com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro na inscrição:", error);
    return NextResponse.json(
      { message: "Erro ao processar inscrição" },
      { status: 400 }
    );
  }
}
import { NextResponse } from "next/server";
import {
  PRIVATE_ACCESS_COOKIE,
  createPrivateAccessToken,
} from "@/lib/private-access";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  const caseId = typeof body?.caseId === "string" ? body.caseId.trim() : "";
  const whatsapp = typeof body?.whatsapp === "string" ? body.whatsapp.trim() : "";
  const budget = Number(body?.budget);
  const mlSelection =
    body?.mlSelection === undefined || body?.mlSelection === null || body?.mlSelection === ""
      ? null
      : Number(body?.mlSelection);
  const consentAccepted = body?.consentAccepted === true;

  if (!consentAccepted || !caseId || !whatsapp || Number.isNaN(budget)) {
    return NextResponse.json(
      { ok: false, error: "Dados incompletos para liberar o acesso." },
      { status: 400 },
    );
  }

  if (mlSelection !== null && Number.isNaN(mlSelection)) {
    return NextResponse.json(
      { ok: false, error: "Quantidade de ml inválida." },
      { status: 400 },
    );
  }

  const token = createPrivateAccessToken({
    caseId,
    budget,
    mlSelection,
    whatsapp,
  });

  const response = NextResponse.json({
    ok: true,
    redirectTo: "/privado/acesso",
  });

  response.cookies.set(PRIVATE_ACCESS_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/privado",
    maxAge: 30 * 60,
  });

  return response;
}

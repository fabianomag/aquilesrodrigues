import { createHmac, timingSafeEqual } from "crypto";

export const PRIVATE_ACCESS_COOKIE = "privado_access";
const PRIVATE_ACCESS_SECRET =
  process.env.PRIVATE_ACCESS_SECRET ?? "aquiles-private-access-v1";
const PRIVATE_ACCESS_TTL_MS = 30 * 60 * 1000;

export interface PrivateAccessPayload {
  caseId: string;
  budget: number;
  mlSelection: number | null;
  whatsapp: string;
  consentAccepted: true;
  issuedAt: number;
  expiresAt: number;
}

const encode = (value: string) => Buffer.from(value).toString("base64url");
const decode = (value: string) => Buffer.from(value, "base64url").toString("utf8");

function sign(body: string) {
  return createHmac("sha256", PRIVATE_ACCESS_SECRET).update(body).digest("base64url");
}

export function createPrivateAccessToken(input: {
  caseId: string;
  budget: number;
  mlSelection: number | null;
  whatsapp: string;
}) {
  const payload: PrivateAccessPayload = {
    caseId: input.caseId,
    budget: input.budget,
    mlSelection: input.mlSelection,
    whatsapp: input.whatsapp,
    consentAccepted: true,
    issuedAt: Date.now(),
    expiresAt: Date.now() + PRIVATE_ACCESS_TTL_MS,
  };

  const body = encode(JSON.stringify(payload));
  return `${body}.${sign(body)}`;
}

export function verifyPrivateAccessToken(token: string) {
  const [body, signature] = token.split(".");

  if (!body || !signature) {
    return null;
  }

  const expected = sign(body);

  if (expected.length !== signature.length) {
    return null;
  }

  if (!timingSafeEqual(Buffer.from(expected), Buffer.from(signature))) {
    return null;
  }

  try {
    const payload = JSON.parse(decode(body)) as Partial<PrivateAccessPayload>;

    if (
      payload.consentAccepted !== true ||
      typeof payload.caseId !== "string" ||
      typeof payload.budget !== "number" ||
      typeof payload.whatsapp !== "string" ||
      typeof payload.expiresAt !== "number" ||
      payload.expiresAt < Date.now()
    ) {
      return null;
    }

    return payload as PrivateAccessPayload;
  } catch {
    return null;
  }
}

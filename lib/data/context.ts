import type { DataLayerContext } from "@/lib/types/account";

export type { DataLayerContext };
export function getRequestContext(request: Request): DataLayerContext {
  const sessionToken = request.headers.get("authorization")?.replace("Bearer ", "") ?? null;
  return { userId: null, sessionToken };
}

export async function getServerContext(): Promise<DataLayerContext> {
  return { userId: null };
}

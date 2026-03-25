import { supabaseAdmin } from "@/src/lib/utils/supabase";

export async function PATCH(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  const updates = await req.json();

  const { data, error } = await supabaseAdmin
    .from("games")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  return Response.json({ data, error });
}



export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { data, error } = await supabaseAdmin
    .from("games")
    .select("*")
    .eq("id", params.id)
    .single();

  return Response.json({ data, error });
}
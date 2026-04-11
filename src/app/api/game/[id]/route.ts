import { supabaseAdmin } from "@/src/lib/utils/supabase";

/**
 * Uodates an existing game record with the fields provided in the request body
 * @param req the incoming HTTP request object
 * @param context contains the route parameters, specifically the game ID
 * @returns 
 *  data: the updated game record
 *  error: any error that occurred during the update operation
 */
export async function PATCH(req: Request, context: { params: Promise<{ id: string }> }) {
  // Retrieve the game ID from the route parameters
  const { id } = await context.params;

  // Parse the request body to get the fields to update
  const updates = await req.json();

  // Perform update on the "games" table and return the updated row
  const { data, error } = await supabaseAdmin
    .from("games")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  return Response.json({ data, error });
}

/**
 * Retrieves a single game record by its ID. (Not currently used but may be useful for future features)
 * @param req the incoming HTTP request object
 * @param param1 id- URL param (string)
 * @returns 
 * data: the game record with the specified ID
 * error: any error that occurred during retrieval 
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  // Fetch the game record matching the provided ID
  const { data, error } = await supabaseAdmin
    .from("games")
    .select("*")
    .eq("id", params.id)
    .single();

  return Response.json({ data, error });
}
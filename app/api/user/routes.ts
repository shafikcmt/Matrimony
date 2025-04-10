import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json(
      { error: authError?.message || "Unauthorized" },
      { status: 401 }
    );
  }

  const { data: userDetails, error: userError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (userError) {
    return NextResponse.json({ error: userError.message }, { status: 500 });
  }

  return NextResponse.json(userDetails);
}

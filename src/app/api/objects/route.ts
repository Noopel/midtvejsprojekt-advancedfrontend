import { createSupabaseServer } from "@/utils/supabaseServer";
import { NextResponse } from "next/server";

export async function GET() {
    const supabase = createSupabaseServer()
    
    const {data, error} = await supabase.from("objects").select("*")

    if(error) {
        return NextResponse.json({message: error.message, data: null}, {status: 404})
    }

    return NextResponse.json({message: "Successfully fetched data", data})
}
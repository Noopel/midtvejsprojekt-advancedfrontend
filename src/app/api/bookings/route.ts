import { createSupabaseServer } from "@/utils/supabaseServer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const supabase = createSupabaseServer()
    const body = await req.json()
    console.log(body)
    const {data, error} = await supabase.from("bookings").insert(body).select()

    if(error) {
        return NextResponse.json({message: error.message, data: null}, {status: 404})
    }

    return NextResponse.json({message: "New booking was created", data}, {status: 401})
}


export async function GET() {
    const supabase = createSupabaseServer()
    
    const {data, error} = await supabase.from("bookings").select("*")

    if(error) {
        return NextResponse.json({message: error.message, data: null}, {status: 404})
    }

    return NextResponse.json({message: "Successfully fetched data", data})
}
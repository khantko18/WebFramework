import { NextResponse } from "next/server";
import { getAllEvents, searchEvents, addEvent } from "@/lib/events";

// GET - Fetch all events (with optional search)
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");

  // Use shared data functions
  const events = search ? searchEvents(search) : getAllEvents();

  return NextResponse.json(events);
}

// POST - Create new event
export async function POST(request) {
  const body = await request.json();

  const newEvent = addEvent({
    title: body.title,
    description: body.description,
    date: body.date,
    location: body.location,
    category: body.category,
  });

  return NextResponse.json(newEvent, { status: 201 });
}


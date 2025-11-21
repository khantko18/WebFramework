import { NextResponse } from "next/server";
import { getEventById, updateEvent, deleteEvent } from "@/lib/events";

// GET - Fetch single event by ID
export async function GET(request, { params }) {
  // Next.js 15: params is now a Promise, must await it
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);
  const event = getEventById(id);

  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }

  return NextResponse.json(event);
}

// PUT - Update event
export async function PUT(request, { params }) {
  // Next.js 15: params is now a Promise, must await it
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);
  const body = await request.json();

  const updatedEvent = updateEvent(id, body);

  if (!updatedEvent) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }

  return NextResponse.json(updatedEvent);
}

// DELETE - Remove event
export async function DELETE(request, { params }) {
  // Next.js 15: params is now a Promise, must await it
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);
  
  const success = deleteEvent(id);

  if (!success) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Event deleted successfully" });
}


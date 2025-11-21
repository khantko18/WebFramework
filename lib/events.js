// Persistent Events Data - Using JSON file storage
// In a real app, this would be a database

import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "events.json");

// Helper function to read events from file
function readEventsFromFile() {
  try {
    const fileContents = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    // If file doesn't exist or is invalid, return empty array
    console.error("Error reading events file:", error);
    return [];
  }
}

// Helper function to write events to file
function writeEventsToFile(events) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(events, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing events file:", error);
  }
}

// Helper function to get all events
export function getAllEvents() {
  return readEventsFromFile();
}

// Helper function to get event by ID
export function getEventById(id) {
  const events = readEventsFromFile();
  return events.find((e) => e.id === id);
}

// Helper function to search events
export function searchEvents(query) {
  const events = readEventsFromFile();
  if (!query) return events;

  const lowerQuery = query.toLowerCase();
  return events.filter(
    (event) =>
      event.title.toLowerCase().includes(lowerQuery) ||
      event.description.toLowerCase().includes(lowerQuery) ||
      event.category.toLowerCase().includes(lowerQuery)
  );
}

// Helper function to add event
export function addEvent(eventData) {
  const events = readEventsFromFile();

  // Generate new ID by finding the max ID and adding 1
  const maxId = events.length > 0 ? Math.max(...events.map((e) => e.id)) : 0;
  const newEvent = {
    id: maxId + 1,
    ...eventData,
    likes: 0,
  };

  events.push(newEvent);
  writeEventsToFile(events);

  return newEvent;
}

// Helper function to update event
export function updateEvent(id, eventData) {
  const events = readEventsFromFile();
  const index = events.findIndex((e) => e.id === id);
  if (index === -1) return null;

  events[index] = {
    ...events[index],
    ...eventData,
  };

  writeEventsToFile(events);
  return events[index];
}

// Helper function to delete event
export function deleteEvent(id) {
  const events = readEventsFromFile();
  const index = events.findIndex((e) => e.id === id);
  if (index === -1) return false;

  events.splice(index, 1);
  writeEventsToFile(events);

  return true;
}

// Previous event highlights (Past events with photos)
export const previousEvents = [
  {
    id: 101,
    title: "Winter Festival 2024",
    date: "December 15, 2024",
    description:
      "Amazing winter celebration with lights, music, and food stalls",
    image: "🎄",
    attendees: 450,
  },
  {
    id: 102,
    title: "Global Culture Day",
    date: "November 20, 2024",
    description: "Students showcased cultures from around the world",
    image: "🌍",
    attendees: 380,
  },
  {
    id: 103,
    title: "Sports Tournament Finals",
    date: "October 28, 2024",
    description: "Intense basketball and soccer finals with record attendance",
    image: "🏆",
    attendees: 520,
  },
  {
    id: 104,
    title: "Coding Hackathon 2024",
    date: "September 15, 2024",
    description: "24-hour coding marathon with prizes for best projects",
    image: "💻",
    attendees: 150,
  },
];

export function getPreviousEvents() {
  return previousEvents;
}

// Shared Events Data - Used by both API routes and Server Components
// In a real app, this would be a database

export let events = [
  {
    id: 1,
    title: "Sunmoon Festival 2025",
    description: "Annual university festival with performances, food stalls, and games",
    date: "2025-05-15",
    location: "Main Campus Square",
    category: "Festival",
    likes: 45,
  },
  {
    id: 2,
    title: "Coding Bootcamp",
    description: "Learn web development with React and Next.js",
    date: "2025-04-20",
    location: "IT Building Room 301",
    category: "Workshop",
    likes: 32,
  },
  {
    id: 3,
    title: "K-Pop Dance Competition",
    description: "Show your moves! Register your team today",
    date: "2025-06-10",
    location: "University Auditorium",
    category: "Competition",
    likes: 67,
  },
  {
    id: 4,
    title: "Job Fair 2025",
    description: "Meet recruiters from top companies in Korea",
    date: "2025-05-25",
    location: "Sports Complex Hall",
    category: "Career",
    likes: 89,
  },
  {
    id: 5,
    title: "English Conversation Club",
    description: "Practice English with international students",
    date: "2025-04-05",
    location: "Language Center",
    category: "Club",
    likes: 23,
  },
];

// Helper function to get all events
export function getAllEvents() {
  return events;
}

// Helper function to get event by ID
export function getEventById(id) {
  return events.find((e) => e.id === id);
}

// Helper function to search events
export function searchEvents(query) {
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
  const newEvent = {
    id: events.length + 1,
    ...eventData,
    likes: 0,
  };
  events.push(newEvent);
  return newEvent;
}

// Helper function to update event
export function updateEvent(id, eventData) {
  const index = events.findIndex((e) => e.id === id);
  if (index === -1) return null;
  
  events[index] = {
    ...events[index],
    ...eventData,
  };
  return events[index];
}

// Helper function to delete event
export function deleteEvent(id) {
  const index = events.findIndex((e) => e.id === id);
  if (index === -1) return false;
  
  events.splice(index, 1);
  return true;
}


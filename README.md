# 🎓 CampusConnect - Sunmoon University Events Platform

A Next.js 15 App Router project showcasing **Server Components, Client Components, API Routes, Parallel Routes**, and modern web development practices.

## 🏫 About

**CampusConnect** is an event management platform for Sunmoon University (선문대학교) located in Cheonan Asan, South Korea. Students can browse upcoming campus events, search for specific topics, and like their favorite events. Organizers can manage events through an admin dashboard.

---

## 🎯 Learning Objectives Covered

This project demonstrates ALL key concepts from the Web Framework curriculum:

### ✅ **1. Server vs Client Components**

- **Server Components**: Event listings, detail pages (SEO-friendly, fast)
- **Client Components**: Search bar, Like button (interactive)
- **Composition Pattern**: Mixing both component types

### ✅ **2. File-based Routing**

- `/` - Homepage
- `/events` - All events list
- `/events/[id]` - Dynamic route for single event
- `/dashboard` - Admin dashboard

### ✅ **3. API Routes (CRUD Operations)**

- `GET /api/events` - Fetch all events
- `GET /api/events/[id]` - Fetch single event
- `POST /api/events` - Create new event
- `PUT /api/events/[id]` - Update event
- `DELETE /api/events/[id]` - Delete event

### ✅ **4. Dynamic Metadata (SEO)**

- Each event page has unique title and description
- Optimized for search engines

### ✅ **5. Error & Loading States**

- `loading.js` - Loading skeleton UI
- `error.js` - Error boundary with retry
- `not-found.js` - 404 page

### ✅ **6. Parallel Routes (Advanced)**

- Dashboard uses `@stats` and `@recent` slots
- Both load simultaneously (non-blocking)

### ✅ **7. Server Rendering Strategies**

- Dynamic rendering with `cache: 'no-store'`
- Real-time data fetching

---

## 📁 Project Structure

```
campus-connect/
├── app/
│   ├── layout.js                 # Global layout (Navbar + Footer)
│   ├── page.js                   # Homepage (Server Component)
│   ├── not-found.js              # 404 page
│   │
│   ├── api/                      # API Routes
│   │   └── events/
│   │       ├── route.js          # GET all, POST new
│   │       └── [id]/
│   │           └── route.js      # GET, PUT, DELETE by ID
│   │
│   ├── events/                   # Events Pages
│   │   ├── page.js               # List all events (Server)
│   │   ├── SearchBar.js          # Search component (Client)
│   │   └── [id]/                 # Dynamic Route
│   │       ├── page.js           # Event detail (Server)
│   │       ├── LikeButton.js     # Like button (Client)
│   │       ├── loading.js        # Loading skeleton
│   │       └── error.js          # Error boundary
│   │
│   └── dashboard/                # Admin Dashboard
│       ├── layout.js             # Dashboard shell
│       ├── page.js               # Main dashboard
│       ├── @stats/               # PARALLEL ROUTE 1
│       │   └── page.js           # Stats card
│       └── @recent/              # PARALLEL ROUTE 2
│           └── page.js           # Recent activity
│
├── public/                       # Static assets
├── package.json                  # Dependencies
└── README.md                     # This file
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

### 3. Open in Browser

Visit: **http://localhost:3000**

---

## 📖 How to Use

### **For Students (Public):**

1. **Browse Events**: Go to `/events` to see all campus events
2. **Search**: Use the search bar to find events (e.g., "Coding", "Festival")
3. **View Details**: Click any event to see full information
4. **Like Events**: Click the ❤️ button to show interest

### **For Admins (Dashboard):**

1. **View Dashboard**: Go to `/dashboard`
2. **See Stats**: Total events and average likes (loaded in parallel)
3. **Recent Activity**: Last added event (loaded in parallel)
4. **Manage Events**: View all events in a table

---

## 🎨 Key Features

### 1. **Real Sunmoon University Events**

Sample events include:

- 🎉 Sunmoon Festival 2025
- 💻 Coding Bootcamp
- 🎵 K-Pop Dance Competition
- 💼 Job Fair 2025
- 🗣️ English Conversation Club

### 2. **Smart Search**

Search works across:

- Event titles
- Descriptions
- Categories

### 3. **Interactive UI**

- Real-time like counter
- Loading skeletons
- Error handling with retry
- Responsive design (mobile-friendly)

### 4. **Admin Dashboard**

- Parallel loading of stats and recent activity
- Event management table
- Quick actions

---

## 🔧 Technical Implementation

### Server Component Example (Events List)

```javascript
// app/events/page.js
async function getEvents(search) {
  const res = await fetch(`/api/events?search=${search}`, {
    cache: "no-store", // Dynamic rendering
  });
  return res.json();
}

export default async function EventsPage({ searchParams }) {
  const events = await getEvents(searchParams.search);
  // Render events...
}
```

### Client Component Example (Like Button)

```javascript
// app/events/[id]/LikeButton.js
"use client";

export default function LikeButton({ initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return <button onClick={handleLike}>❤️ {likes}</button>;
}
```

### API Route Example (GET)

```javascript
// app/api/events/route.js
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");

  // Filter events based on search
  return NextResponse.json(filteredEvents);
}
```

### Parallel Routes (Dashboard)

```javascript
// app/dashboard/layout.js
export default function DashboardLayout({ stats, recent, children }) {
  return (
    <div>
      {stats} {/* Loads independently */}
      {recent} {/* Loads independently */}
      {children}
    </div>
  );
}
```

---

## 🎓 Curriculum Alignment

| Lecture Topic            | Implementation            | File Location                   |
| ------------------------ | ------------------------- | ------------------------------- |
| **Server Components**    | Event lists, detail pages | `app/events/page.js`            |
| **Client Components**    | Search, Like button       | `SearchBar.js`, `LikeButton.js` |
| **Basic API Routes**     | GET, POST                 | `app/api/events/route.js`       |
| **Advanced API Routes**  | PUT, DELETE               | `app/api/events/[id]/route.js`  |
| **Dynamic Routing**      | Event detail pages        | `app/events/[id]/page.js`       |
| **Metadata**             | SEO for each event        | `generateMetadata()` function   |
| **Error Handling**       | Error boundary            | `app/events/[id]/error.js`      |
| **Loading States**       | Skeleton UI               | `app/events/[id]/loading.js`    |
| **Parallel Routes**      | Dashboard stats           | `@stats/`, `@recent/`           |
| **Rendering Strategies** | Dynamic rendering         | `cache: 'no-store'`             |

---

## 📦 Dependencies

```json
{
  "next": "^16.0.3",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "tailwindcss": "latest"
}
```

---

## 🌟 Future Enhancements

- [ ] Add user authentication (login/register)
- [ ] Connect to real database (MongoDB/PostgreSQL)
- [ ] Implement actual event creation form
- [ ] Add calendar view
- [ ] Email notifications
- [ ] QR code for event check-in
- [ ] Image upload for events
- [ ] Comments section

---

## 📍 About Sunmoon University

**Location**: Cheonan Asan, South Korea  
**Korean Name**: 선문대학교

This platform is designed to help students stay connected with the vibrant campus life at Sunmoon University, where numerous cultural, academic, and social events take place throughout the year.

---

## 👨‍💻 Development Notes

- All files use `.js` extension (JavaScript, not TypeScript)
- Uses Next.js 15 App Router
- Tailwind CSS for styling
- Mock data in API routes (replace with database later)
- Follows professor's curriculum structure

---

## 📝 License

Academic project for Web Framework course.

---

## 🙏 Acknowledgments

Built for Sunmoon University students as part of the Backend/Web Framework curriculum.

**Made with ❤️ for the Sunmoon University community**

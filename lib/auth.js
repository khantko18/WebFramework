// Simple Authentication Utilities
// No external libraries - just cookies and basic validation

// Mock users database (In real app, use a database)
export const users = [
  {
    id: 1,
    email: "admin@sunmoon.ac.kr",
    password: "admin123", // In real app, hash this!
    role: "admin",
    name: "Admin User",
  },
  {
    id: 2,
    email: "student@sunmoon.ac.kr",
    password: "student123",
    role: "user",
    name: "Student User",
  },
];

// Validate login credentials
export function validateCredentials(email, password) {
  const user = users.find(
    (u) => u.email === email && u.password === password
  );
  
  if (!user) {
    return { success: false, error: "Invalid email or password" };
  }
  
  return {
    success: true,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    },
  };
}

// Create auth token (simple version - just user data as JSON)
export function createAuthToken(user) {
  return Buffer.from(JSON.stringify(user)).toString("base64");
}

// Decode auth token
export function decodeAuthToken(token) {
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    return JSON.parse(decoded);
  } catch {
    return null;
  }
}

// Get user from cookies (for Server Components)
export function getUserFromCookies(cookieString) {
  if (!cookieString) return null;
  
  // Parse auth_token from cookie string
  const cookies = cookieString.split("; ");
  const authCookie = cookies.find((c) => c.startsWith("auth_token="));
  
  if (!authCookie) return null;
  
  const token = authCookie.split("=")[1];
  return decodeAuthToken(token);
}

// Check if user is admin
export function isAdmin(user) {
  return user && user.role === "admin";
}

// Check if user is logged in
export function isLoggedIn(user) {
  return user !== null;
}


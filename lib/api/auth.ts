// Lightweight client-side API helpers for auth endpoints.
// These functions always use `credentials: 'include'` so the httpOnly cookie
// containing the JWT is sent with requests but never exposed to JavaScript.
// This helps keep the token from leaking to client-side code or logs.

export type User = {
  _id?: string;
  name: string;
  email: string;
  avatar?: string;
  interests?: string[];
};

async function safeJson(response: Response) {
  const text = await response.text();
  try {
    return JSON.parse(text || "null");
  } catch (e) {
    return text;
  }
}

export async function getMe(): Promise<{ user: User } | null> {
  const res = await fetch("/api/auth/me", {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
    },
  });

  if (res.status === 204) return null;
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  if (res.status === 401) return null;
  const body = await safeJson(res);
  throw new Error(
    (body && (body.error || body.message)) || `Request failed: ${res.status}`
  );
}

export async function login(
  email: string,
  password: string
): Promise<{ user: User }> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const body = await safeJson(res);
    throw new Error(
      (body && (body.error || body.message)) || `Login failed: ${res.status}`
    );
  }

  return res.json();
}

export async function register(
  name: string,
  email: string,
  password: string,
  interests: string[] = []
): Promise<{ user: User }> {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ name, email, password, interests }),
  });

  if (!res.ok) {
    const body = await safeJson(res);
    throw new Error(
      (body && (body.error || body.message)) ||
        `Registration failed: ${res.status}`
    );
  }

  return res.json();
}

export async function logout(): Promise<void> {
  const res = await fetch("/api/auth/logout", {
    method: "POST",
    credentials: "include",
  });
  if (!res.ok) {
    const body = await safeJson(res);
    throw new Error(
      (body && (body.error || body.message)) || `Logout failed: ${res.status}`
    );
  }
}

export async function updateProfile(
  updates: Partial<User>
): Promise<{ user: User }> {
  const res = await fetch("/api/auth/me", {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(updates),
  });

  if (!res.ok) {
    const body = await safeJson(res);
    throw new Error(
      (body && (body.error || body.message)) || `Update failed: ${res.status}`
    );
  }

  return res.json();
}

export default {
  getMe,
  login,
  register,
  logout,
  updateProfile,
};

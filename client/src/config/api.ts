// API configuration for different environments
// In production (Coolify), VITE_SERVER_BASE_URL points to the server's public URL
// In development, it's empty and we use relative paths (proxied by Vite)

export const API_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL || '';

export const getApiUrl = (path: string): string => {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
};

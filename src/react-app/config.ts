// Centralized configuration for the React app
// During local development, this defaults to localhost:3333
// In production (Dokploy), we'll override it with an environment variable VITE_FFMPEG_URL

export const FFMPEG_URL = import.meta.env.VITE_FFMPEG_URL || 'http://localhost:3333';

console.log('Using FFmpeg Engine URL:', FFMPEG_URL);

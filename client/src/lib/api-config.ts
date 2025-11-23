/**
 * API Configuration
 * 
 * Para deploy CONJUNTO (Vercel full-stack ou Replit):
 * - Não defina VITE_API_URL ou deixe vazio
 * - As chamadas usarão URLs relativas (/api/...)
 * 
 * Para deploy SEPARADO (Frontend Vercel + Backend Render):
 * - Defina VITE_API_URL com a URL do backend
 * - Exemplo: VITE_API_URL=https://seu-backend.onrender.com
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

/**
 * Retorna a URL completa da API
 * @param path - Caminho da API (ex: /api/portfolio)
 * @returns URL completa
 */
export function getApiUrl(path: string): string {
  // Se tiver base URL configurada, concatena
  if (API_BASE_URL) {
    return `${API_BASE_URL}${path}`;
  }
  // Caso contrário, usa URL relativa (mesmo servidor)
  return path;
}

/**
 * Verifica se está usando backend separado
 */
export function isUsingExternalBackend(): boolean {
  return !!API_BASE_URL;
}

/**
 * Retorna a URL base da API
 */
export function getApiBaseUrl(): string {
  return API_BASE_URL;
}

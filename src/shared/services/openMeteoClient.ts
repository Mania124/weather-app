const BASE_URL = 'https://api.open-meteo.com/v1';

export async function get<T>(url: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${url}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
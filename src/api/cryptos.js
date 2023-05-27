import { API_KEY, API_URL } from "../consts";

export default async function getCryptos() {
  const response = await fetch(`${API_URL}?access_key=${API_KEY}`);
  const data = await response.json();
  return data;
}

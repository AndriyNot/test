import { useEffect, useState } from 'react';

const API_USERNAME = 'kabachok513'; // Ваш логін GeoNames

const useCitySuggestions = (query: string) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(`http://api.geonames.org/searchJSON?q=${query}&maxRows=5&username=${API_USERNAME}`);
        if (!response.ok) {
          throw new Error('Failed to fetch city suggestions');
        }
        const data = await response.json();
        const cities = data.geonames.map((city: { name: string }) => city.name);
        setSuggestions(cities);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    if (query) {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return suggestions;
};

export default useCitySuggestions;
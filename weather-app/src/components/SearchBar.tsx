import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Input, SuggestionList, SuggestionItem, SearchButton, SearchButtonToggle } from '../styles/SearchBarStyles'; // Імпортуємо стилі
import useCitySuggestions from '../hooks/useCitySuggestions'; // Імпортуємо хук для отримання підказок
import SearchIcon from '@mui/icons-material/Search'; // Імпорт іконки лупи

interface SearchBarProps {
  fetchWeather: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ fetchWeather }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showInput, setShowInput] = useState(false);

  // Отримуємо підказки на основі введеного значення
  const citySuggestions = useCitySuggestions(inputValue);

  useEffect(() => {
    setSuggestions(citySuggestions);
  }, [citySuggestions]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSuggestionClick = (city: string) => {
    setInputValue(city);
    setSuggestions([]);
    fetchWeather(city); // Відразу викликаємо функцію fetchWeather при виборі міста
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.length > 1) {
      // Перевіряємо, чи введене місто є в списку підказок
      if (suggestions.includes(inputValue)) {
        fetchWeather(inputValue);
        setSuggestions([]); // Очищаємо підказки після виклику
      } else {
        console.log('Місто не знайдено в підказках:', inputValue);
      }
    }
  };

  const handleSearchClick = () => {
    if (inputValue.length > 1) {
      if (suggestions.includes(inputValue)) {
        fetchWeather(inputValue);
        setSuggestions([]); // Очищаємо підказки після виклику
      } else {
        console.log('Місто не знайдено в підказках:', inputValue);
      }
    }
  };

  const toggleInputVisibility = () => {
    setShowInput(prev => !prev);
    if (showInput) {
      setInputValue(''); // Очищаємо поле вводу, якщо закриваємо
      setSuggestions([]); // Очищаємо підказки
    }
  };

  const { t } = useTranslation();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
      <SearchButtonToggle onClick={toggleInputVisibility}>
        <SearchIcon />
      </SearchButtonToggle>
      {showInput && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={t('enter_the_city')}
          />
          <SearchButton onClick={handleSearchClick} style={{ marginLeft: '10px' }}>
            <SearchIcon />
          </SearchButton>
        </div>
      )}
      {suggestions.length > 0 && showInput && (
        <SuggestionList>
          {suggestions.map((city, index) => (
            <SuggestionItem key={index} onClick={() => handleSuggestionClick(city)}>
              {city}
            </SuggestionItem>
          ))}
        </SuggestionList>
      )}
    </div>
  );
};

export default SearchBar;
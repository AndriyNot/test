import styled from '@mui/material/styles/styled';
import { Button } from '@mui/material';

export const SearchButtonToggle = styled(Button)({
  backgroundColor: '#3A3A5A',
  color: 'white',
  borderRadius: '50%',
  padding: '10px',
  cursor: 'pointer',
  marginRight: '10px', // Відступ між кнопкою та полем вводу
  '&:hover': {
    backgroundColor: '#5A5A7A',
  },
});

export const SearchButton = styled(Button)({
  backgroundColor: '#D3D3D3',
  color: 'white',
  borderRadius: '10%',
  padding: '8px',
  cursor: 'pointer',
  marginRight: '10px', // Відступ між кнопкою та полем вводу
  '&:hover': {
    backgroundColor: '#C0C0C0',
  },
});

export const Input = styled('input')({
  width: '300px', // Розширюємо ширину поля вводу
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  paddingLeft: '40px', // Відступ для іконки
  position: 'relative', // Додаємо позицію для налаштування підказок
  zIndex: 1, // Задаємо z-index, щоб поле вводу було вище підказок
});

export const SuggestionList = styled('ul')({
  listStyleType: 'none',
  margin: '0', // Нульові відступи
  padding: '0',
  position: 'absolute',
  backgroundColor: '#fff',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  maxHeight: '150px',
  overflowY: 'auto',
  zIndex: 1000,
  display: 'inline-block',
  width: '280px', // Встановлюємо ширину підказок по ширині поля вводу
  marginTop: '50px', // Відстань між полем вводу та підказками
});

export const SuggestionItem = styled('li')({
  padding: '8px',
  cursor: 'pointer',
  color: '#000',
  whiteSpace: 'nowrap',
  '&:hover': {
    backgroundColor: '#eee',
  },
});
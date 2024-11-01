import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 20px 0;
`;

export const SearchContainer = styled.div`
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  margin: 20px 0;
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const WeatherCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Temperature = styled.h2`
  font-size: 2em;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1em;
  color: #6c757d;
`;
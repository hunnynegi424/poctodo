import React from 'react';

// components
import {
  StyledHeader,
  StyledLogoContainer,
  StyledUserInfo,
  StyledSelect,
} from './Header.styles';

const AppBar = (props) => {
  const {
    weatherData,
    language,
    onSelectLanguage,
  } = props;

  return <StyledHeader>
    <StyledLogoContainer>Welcome to Todo App</StyledLogoContainer>
    <StyledUserInfo>
      {weatherData && weatherData.main && <div>{weatherData.name}, {weatherData.main.temp}°C</div>}

      <StyledSelect value={language} onChange={({ target }) => onSelectLanguage(target.value)}>
        <option value='en'>English</option>
        <option value='hi'>Hindi</option>
        <option value='locale'>Locale</option>
      </StyledSelect>
    </StyledUserInfo>
  </StyledHeader>
}

export default AppBar;
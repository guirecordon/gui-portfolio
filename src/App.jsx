import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/light';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Home />

      <GlobalStyle />
    </ThemeProvider>
  );
}

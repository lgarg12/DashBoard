import { useRoutes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { routes } from './routes';
import { ThemeContextProvider } from './Context/ThemeContext';
import 'simplebar-react/dist/simplebar.min.css';

export const App = () => {
  const element = useRoutes(routes);

  return (
    <ThemeContextProvider>
      <CssBaseline />
      {element}
    </ThemeContextProvider>
  );
};

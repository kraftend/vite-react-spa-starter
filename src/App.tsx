import { Helmet } from 'react-helmet';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { GlobalLayout } from '@/components/GlobalLayout';
import { Home } from '@/components/Home';
import { useVhValue } from '@/hooks/useVhValue';

import 'focus-visible';
import './global.css';
import '@fontsource/inter/variable.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);

function App() {
  useVhValue();

  return (
    <>
      <Helmet titleTemplate="%s - Kraftend App" defaultTitle="Kraftend App" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage';
import './App.css';
import Products from './pages/Products/Products';
import Root from './pages/Root';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/', element: <Homepage />
      },
      { path: '/products', element: <Products /> }
    ]
  },

])

function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;

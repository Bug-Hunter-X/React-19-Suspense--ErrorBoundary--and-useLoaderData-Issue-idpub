```javascript
// App.js
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>,
    errorElement: <ErrorBoundary/>,
  },
  // ...other routes
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

//Home.js
import { useLoaderData } from 'react-router-dom';

function Home(){
  const data = useLoaderData();
  // ...
}

export default Home;
```
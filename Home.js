```javascript
// App.js
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </ErrorBoundary>
    ),
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

//ErrorBoundary.js
import { ErrorElement } from 'react';

function ErrorBoundary({ children }) {
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error, errorInfo);
  }, [error]);

  if (error) {
    return (
      <ErrorElement error={error} errorInfo={errorInfo}>
       <h1>Something went wrong.</h1>
      </ErrorElement>
    );
  }

  return children;
}

export default ErrorBoundary;
```
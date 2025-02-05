# React 19 Suspense, ErrorBoundary, and useLoaderData Issue

This repository demonstrates a bug encountered when using React 19's `Suspense`, `ErrorBoundary`, and `useLoaderData` together.  The expected behavior is that if `useLoaderData` throws an error, the `Suspense` fallback component should display while the `ErrorBoundary` catches and gracefully handles the error. However, this doesn't work consistently.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the directory:
   ```bash
   cd <repository_directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```

## Bug Description

The `Home` component utilizes `useLoaderData` to fetch data. If an error occurs during data fetching, the `Suspense` fallback isn't shown, and the ErrorBoundary does not catch the exception, leading to a crash or unexpected behavior.

## Solution

The solution involves restructuring the component hierarchy to ensure that the `ErrorBoundary` encompasses the entire `Suspense` component and its children, providing a proper error handling mechanism within the asynchronous operation.
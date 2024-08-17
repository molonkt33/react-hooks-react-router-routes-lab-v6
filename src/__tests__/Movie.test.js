// src/__tests__/Movie.test.js
import { render, screen, waitFor } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movie from '../pages/Movie';

const router = createBrowserRouter([
  {
    path: '/movie/:id',
    element: <Movie />,
  },
]);

test("renders movie's title in an h1", async () => {
  render(<RouterProvider router={router} />);

  await waitFor(() => {
    expect(screen.getByText(/Doctor Strange/)).toBeInTheDocument();
  });

  const h1 = screen.getByText(/Doctor Strange/);
  expect(h1.tagName).toBe("H1");
});

test("renders movie's time within a p tag", async () => {
  render(<RouterProvider router={router} />);

  await waitFor(() => {
    expect(screen.getByText(/115/)).toBeInTheDocument();
  });

  const p = screen.getByText(/115/);
  expect(p.tagName).toBe("P");
});

test("renders genres in span tags", async () => {
  render(<RouterProvider router={router} />);

  await waitFor(() => {
    ["Action", "Adventure", "Fantasy"].forEach(async (genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
      expect(screen.getByText(genre).tagName).toBe("SPAN");
    });
  });
});

test("renders the <NavBar /> component", async () => {
  render(<RouterProvider router={router} />);

  expect(await screen.findByRole("navigation")).toBeInTheDocument();
});

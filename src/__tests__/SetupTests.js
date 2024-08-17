// src/setupTests.js
import { server } from './mocks/server'; // or where your MSW server is set up
import '@testing-library/jest-dom';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

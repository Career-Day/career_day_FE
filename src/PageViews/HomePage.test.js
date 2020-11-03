import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import HomePage from './HomePage'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { fetchAllJobs } from '../api/APICalls'
import { mockFetchAll } from '../FakeData'
import MutationObserver from "@sheerun/mutationobserver-shim";
window.MutationObserver = MutationObserver;
jest.mock('../api/APICalls')

describe('HomePage', () => {
  beforeEach(() => {
let currentlocation = {location: {pathname:'/home-page'}}
fetchAllJobs.mockResolvedValue(mockFetchAll)
      render(
      <MemoryRouter>
        <HomePage location={currentlocation} />
      </MemoryRouter>
    );
  })
  it('should render a search input bar', () => {
    const searchInput = screen.getByPlaceholderText('Search')
    expect(searchInput).toBeInTheDocument()
  })

  it('should render a loading message', () => {
    let loadingMessage = screen.getByText('Loading Jobs...')
    expect(loadingMessage).toBeInTheDocument()
  })
  it('should allow a user to search for a job', async () => {
    let searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument()
    await waitFor(() => fireEvent.change(searchInput, {target: {name: 'search', value: 'Graphic'}}))
    expect(searchInput.value).toBe('Graphic')
  })

  it('should have a hamburger button that opens access to a slider', async() => {
    let slider = await waitFor(() => screen.getByText('Salary Range:'))
    let burgerbtn = screen.getByTestId('burgerbtn')
    expect(slider).toBeInTheDocument()
    expect(burgerbtn).toBeInTheDocument()
  })
})
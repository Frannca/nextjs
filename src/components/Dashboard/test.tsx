import { render, screen } from '@testing-library/react'

import Dashboard from '.'

beforeEach(() => {
  render(<Dashboard />)
})

describe('<Dashboard />', () => {
  it('should render a <Dashboard /> component', () => {
    expect(screen.getByTestId('dashboard')).toBeVisible()
  })
})

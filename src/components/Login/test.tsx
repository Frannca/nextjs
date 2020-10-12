import { render, screen } from '@testing-library/react'
import Login from '.'

beforeEach(() => {
  render(<Login />)
})

describe('<Login />', () => {
  it('should render a <Login /> component', () => {
    expect(screen.getByTestId('login')).toBeVisible()
  })
})

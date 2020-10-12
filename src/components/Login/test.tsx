import { render, screen } from '@testing-library/react'
import Login from '.'

beforeEach(() => {
  render(<Login />)
})

describe('<Login />', () => {
  it('should render a <Login /> component', () => {
    expect(screen.getByTestId('login')).toBeVisible()
  })

  it('should have a welcome title', () => {
    expect(screen.getByText('Welcome to the Frannca Dashboard!')).toBeVisible()
  })

  it('should have a login title', () => {
    expect(screen.getByText('Login to your account')).toBeVisible()
  })

  it('should have an email input', () => {
    expect(screen.getByLabelText('Email *')).toBeVisible()
  })

  it('should have a password input', () => {
    expect(screen.getByLabelText('Password *')).toBeVisible()
  })

  it('should have a login button', () => {
    expect(screen.getByRole('button', { name: /login/i })).toBeVisible()
  })
})

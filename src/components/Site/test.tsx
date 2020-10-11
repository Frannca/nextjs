import { render, screen } from '@testing-library/react'

import Site from '.'

beforeEach(() => {
  render(<Site />)
})

describe('<Site />', () => {
  it('should render a <Site /> component', () => {
    expect(screen.getByTestId('site')).toBeVisible()
  })
})

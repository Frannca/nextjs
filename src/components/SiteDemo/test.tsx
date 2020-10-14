import { render, screen } from '@testing-library/react'

import SiteDemo from '.'

const siteDemoProps = {
  testID: 'site-demo'
}

beforeEach(() => {
  render(<SiteDemo {...siteDemoProps} />)
})

describe('<SiteDemo />', () => {
  it('should render a <SiteDemo /> component', () => {
    expect(screen.getByTestId('site-demo')).toBeVisible()
  })
})

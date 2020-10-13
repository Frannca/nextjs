import { render, screen } from '@testing-library/react'

import AppBar from '.'
import { IAppBar } from './types'

const appBarProps: IAppBar = {
  testID: 'app-bar',
  secondaryAppBar: {
    leftContent: [
      {
        text: 'Left item'
      }
    ],
    rightContent: [
      {
        text: 'SiteFácil',
        link: {
          aria: 'Link to SiteFácil',
          url: 'http://sitefacil.co'
        }
      }
    ]
  }
}

beforeEach(() => {
  render(<AppBar {...appBarProps} />)
})

describe('<AppBar />', () => {
  it('should render an <AppBar /> component', () => {
    expect(screen.getByTestId('app-bar')).toBeVisible()
  })

  it('should have a Left item', () => {
    expect(screen.getByText('Left item')).toBeVisible()
  })

  it('should have a link to SiteFácil', () => {
    expect(screen.getByRole('link', { name: 'Link to SiteFácil' })).toBeVisible
  })
})

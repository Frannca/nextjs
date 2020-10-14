import { render, screen } from '@testing-library/react'

import AppBar from '.'
import { IAppBar } from './types'

const appBarProps: IAppBar = {
  testID: 'app-bar',
  color: 'primary',
  menus: [
    {
      text: 'Home',
      url: '#',
      aria: 'Link to home',
      icon: false,
      link: true
    }
  ],
  secondaryAppBar: {
    leftContent: [
      {
        text: 'Left item',
        aria: '',
        url: '',
        icon: false,
        link: false
      }
    ],
    rightContent: [
      {
        text: 'SiteFácil',
        aria: 'Link to SiteFácil',
        url: 'http://sitefacil.co',
        icon: false,
        link: false
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
})

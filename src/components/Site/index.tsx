import { IAppBar } from 'components/AppBar/types'
import * as S from './styles'
import { ISite } from './types'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import Slider from 'components/Slider'
import { ISlider } from 'components/Slider/types'

const appBarProps: IAppBar = {
  secondaryAppBar: {
    leftContent: [
      {
        text: 'Frannca',
        link: {
          url: 'http://frannca.com',
          aria: 'Link to Frannca',
          icon: false
        }
      }
    ],
    rightContent: [
      {
        text: <FacebookIcon />,
        link: {
          url: 'https://facebook.com',
          aria: 'Link to Facebook',
          icon: true
        }
      },
      {
        text: <TwitterIcon />,
        link: {
          url: 'https://twitter.com',
          aria: 'Link to Twitter',
          icon: true
        }
      },
      {
        text: <InstagramIcon />,
        link: {
          url: 'https://www.instagram.com',
          aria: 'Link to Instagram',
          icon: true
        }
      }
    ]
  }
}

const sliderProps: ISlider = {
  images: [
    'https://images.unsplash.com/photo-1553551427-d4bbcd986ff5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
    'https://images.unsplash.com/photo-1551125337-ca452e9e0339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  ]
}

const Site = ({ testID }: ISite) => {
  return (
    <S.Wrapper data-testid={testID}>
      <S.AppBar {...appBarProps} />
      <Slider {...sliderProps}></Slider>
    </S.Wrapper>
  )
}

Site.defaultProps = {
  testID: 'site'
}

export default Site

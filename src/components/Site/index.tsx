import { IAppBar } from 'components/AppBar/types'
import * as S from './styles'
import { ISite } from './types'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'

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

const Site = ({ testID }: ISite) => {
  return (
    <S.Wrapper data-testid={testID}>
      <S.AppBar {...appBarProps} />
    </S.Wrapper>
  )
}

Site.defaultProps = {
  testID: 'site'
}

export default Site

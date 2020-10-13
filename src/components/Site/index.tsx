import { IAppBar } from 'components/AppBar/types'
import * as S from './styles'
import { ISite } from './types'

const appBarProps: IAppBar = {
  secondaryAppBar: {
    leftContent: [
      {
        text: 'item'
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

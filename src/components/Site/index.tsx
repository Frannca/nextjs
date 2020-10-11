import * as S from './styles'
import { ISite } from './types'

const Site = ({ testID }: ISite) => {
  return <S.Wrapper data-testid={testID}>Site</S.Wrapper>
}

Site.defaultProps = {
  testID: 'site'
}

export default Site

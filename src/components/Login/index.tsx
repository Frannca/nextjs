import * as S from './styles'
import { ILogin } from './types'

const Login = ({ testID }: ILogin) => {
  return <S.Wrapper data-testid={testID}>Login</S.Wrapper>
}

Login.defaultProps = {
  testID: 'login'
}

export default Login

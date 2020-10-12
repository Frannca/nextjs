import { useTheme } from '@material-ui/core'
import * as S from './styles'
import { ILogin } from './types'

const Login = ({ testID }: ILogin) => {
  const theme = useTheme()

  return (
    <S.Wrapper data-pallete={theme.palette} data-testid={testID}>
      <S.WelcomeWrapper>
        <S.WelcomeTitle>Welcome to the Frannca Dashboard!</S.WelcomeTitle>
      </S.WelcomeWrapper>
      <S.FormWrapper noValidate autoComplete="off">
        <S.FormTitle>Login to your account</S.FormTitle>

        <S.FormEmail
          required
          id="form-email"
          label="Email"
          variant="outlined"
        />
        <S.FormPassword
          required
          id="form-password"
          type="password"
          label="Password"
          variant="outlined"
        />
        <S.FormSubmit
          type="submit"
          variant="contained"
          size="large"
          color="primary"
        >
          Login
        </S.FormSubmit>
      </S.FormWrapper>
    </S.Wrapper>
  )
}

Login.defaultProps = {
  testID: 'login'
}

export default Login

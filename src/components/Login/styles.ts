import { Button, TextField } from '@material-ui/core'
import styled from 'styled-components'

export const Wrapper = styled.div`
  background: linear-gradient(
    to right,
    ${(props) => props['data-pallete'].primary.main} 0%,
    rgba(0, 0, 0, 1) 120%
  );
  display: flex;
  height: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const WelcomeWrapper = styled.div`
  align-items: baseline;
  color: #ffffff;
  display: flex;
  flex: 10;
  flex-direction: column;
  justify-content: center;
  padding: 96px;

  @media (max-width: 960px) {
    flex: 50%;
  }
`

export const LogoIcon = styled.img`
  margin-bottom: 48px;
  max-width: 100px;
`

export const WelcomeTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 300;
`

export const FormWrapper = styled.form`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  flex: 1 1 400px;
  justify-content: center;
  padding: 48px;

  @media (max-width: 960px) {
    flex: 50%;
  }
`

export const FormTitle = styled.h1`
  font-weight: 400;
  margin-bottom: 48px !important;
`

export const FormEmail = styled(TextField)`
  margin-bottom: 24px !important;
`

export const FormPassword = styled(TextField)`
  margin-bottom: 24px !important;
`

export const FormSubmit = styled(Button)``

import {
  AppBar as AppBarCore,
  Button as ButtonCore,
  Container,
  darken,
  IconButton as IconButtonCore,
  Toolbar as ToolbarCore
} from '@material-ui/core'
import styled from 'styled-components'

export const Wrapper = styled.div``

export const AppBar = styled(AppBarCore)`
  top: ${(props) => (props['data-secondary-app-bar'] ? '40px' : 0)};
`

export const SecondaryAppBar = styled.div`
  align-items: center;
  background-color: ${darken('#1db78d', 0.1)};
  color: #ffffff;
  display: flex;
  height: 40px;
  position: relative;
  z-index: 1200;
`

export const SecondaryAppBarContainer = styled(Container)`
  display: flex;
`

export const SecondaryAppBarLeftContent = styled.div`
  display: flex;
  flex: 1;
`

export const SecondaryAppBarRightContent = styled.div``

export const IconButton = styled(IconButtonCore)``

export const Toolbar = styled(ToolbarCore)`
  padding-left: 0;
  padding-right: 0;
`

export const Button = styled(ButtonCore)``

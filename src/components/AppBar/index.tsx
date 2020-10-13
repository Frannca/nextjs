import * as S from './styles'
import { IAppBar } from './types'
import MenuIcon from '@material-ui/icons/Menu'
import { Container } from '@material-ui/core'

const AppBar = ({ testID, secondaryAppBar }: IAppBar) => {
  return (
    <S.Wrapper data-testid={testID}>
      <S.SecondaryAppBar>
        <Container>
          {secondaryAppBar?.leftContent && (
            <S.SecondaryAppBarLeftContent>
              {secondaryAppBar.leftContent.map((item, index) => {
                return (
                  (item.link && (
                    <a
                      key={index}
                      aria-label={item.link.aria}
                      href={item.link.url}
                    >
                      {item.text}
                    </a>
                  )) ||
                  item.text
                )
              })}
            </S.SecondaryAppBarLeftContent>
          )}
          {secondaryAppBar?.rightContent && (
            <S.SecondaryAppBarRightContent>
              {secondaryAppBar.rightContent.map((item, index) => {
                return (
                  (item.link && (
                    <a
                      key={index}
                      aria-label={item.link.aria}
                      href={item.link.url}
                    >
                      {item.text}
                    </a>
                  )) ||
                  item.text
                )
              })}
            </S.SecondaryAppBarRightContent>
          )}
        </Container>
      </S.SecondaryAppBar>
      <S.AppBar color="secondary">
        <S.Toolbar>
          <Container>
            <S.IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </S.IconButton>
          </Container>
        </S.Toolbar>
      </S.AppBar>
    </S.Wrapper>
  )
}

export default AppBar

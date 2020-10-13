import * as S from './styles'
import { IAppBar, ISecondaryAppBarButton } from './types'
import MenuIcon from '@material-ui/icons/Menu'
import { Container } from '@material-ui/core'

const AppBar = ({ testID, secondaryAppBar }: IAppBar) => {
  return (
    <S.Wrapper data-testid={testID}>
      {secondaryAppBar && (
        <S.SecondaryAppBar>
          <S.SecondaryAppBarContainer>
            {secondaryAppBar?.leftContent && (
              <S.SecondaryAppBarLeftContent>
                {secondaryAppBar.leftContent.map((item, index) => {
                  return (item.link && getButton({ index, item })) || item.text
                })}
              </S.SecondaryAppBarLeftContent>
            )}
            {secondaryAppBar?.rightContent && (
              <S.SecondaryAppBarRightContent>
                {secondaryAppBar.rightContent.map((item, index) => {
                  return (item.link && getButton({ index, item })) || item.text
                })}
              </S.SecondaryAppBarRightContent>
            )}
          </S.SecondaryAppBarContainer>
        </S.SecondaryAppBar>
      )}
      <S.AppBar color="secondary" data-secondary-app-bar={secondaryAppBar}>
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

const getButton = ({ index, item }: ISecondaryAppBarButton) => {
  return (
    (item.link?.icon && (
      <S.IconButton
        size="small"
        key={index}
        onClick={() => window.open(item.link?.url, '_blank')}
        aria-label={item.link?.aria}
      >
        {item.text}
      </S.IconButton>
    )) || (
      <S.Button
        size="small"
        key={index}
        href={item.link?.url}
        aria-label={item.link?.aria}
      >
        {item.text}
      </S.Button>
    )
  )
}

export default AppBar

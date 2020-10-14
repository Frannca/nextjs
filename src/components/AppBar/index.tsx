import * as S from './styles'
import { IAppBar, ISecondaryAppBarButton } from './types'
import { MenuItem, useTheme } from '@material-ui/core'

const AppBar = ({ testID, secondaryAppBar, color, menus }: IAppBar) => {
  const theme = useTheme()

  return (
    <S.Wrapper data-testid={testID}>
      {secondaryAppBar && (
        <S.SecondaryAppBar color={color} data-theme={theme}>
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
      <S.AppBar
        color={color}
        position="static"
        data-secondary-app-bar={secondaryAppBar}
      >
        <S.Toolbar>
          <S.ToolbarContainer>
            {/* <S.IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </S.IconButton> */}

            {menus &&
              menus.map((menu, index) => (
                <MenuItem component="a" href={menu.url} key={index}>
                  <p>{menu.text}</p>
                </MenuItem>
              ))}
          </S.ToolbarContainer>
        </S.Toolbar>
      </S.AppBar>
    </S.Wrapper>
  )
}

const getButton = ({ index, item }: ISecondaryAppBarButton) => {
  return (
    (item?.icon && (
      <S.IconButton
        size="small"
        key={index}
        onClick={() => window.open(item?.url, '_blank')}
        aria-label={item?.aria}
      >
        {item.text}
      </S.IconButton>
    )) || (
      <S.Button
        size="small"
        key={index}
        href={item?.url}
        aria-label={item?.aria}
      >
        {item.text}
      </S.Button>
    )
  )
}

AppBar.defaultProps = {
  color: 'primary'
}

export default AppBar

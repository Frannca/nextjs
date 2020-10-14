import { ReactElement } from 'react'

export interface IAppBar {
  testID?: string
  secondaryAppBar?: ISecondaryAppBar
  menus?: IAppBarItem[]
  color:
    | 'default'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'transparent'
    | undefined
}

export interface ISecondaryAppBar {
  leftContent?: IAppBarItem[]
  rightContent?: IAppBarItem[]
}

export interface IAppBarItem {
  text: string | ReactElement
  url: string
  aria: string
  icon?: boolean
  link: boolean
}

export interface ISecondaryAppBarButton {
  index: number
  item: IAppBarItem
}

import { ReactElement } from 'react'

export interface IAppBar {
  testID?: string
  secondaryAppBar?: ISecondaryAppBar
}

export interface ISecondaryAppBar {
  leftContent?: ISecondaryAppBarContent[]
  rightContent?: ISecondaryAppBarContent[]
}

export interface ISecondaryAppBarContent {
  text: string | ReactElement
  link?: {
    aria: string
    url: string
    icon: boolean
  }
}

export interface ISecondaryAppBarButton {
  index: number
  item: ISecondaryAppBarContent
}

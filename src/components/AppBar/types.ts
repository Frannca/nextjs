export interface IAppBar {
  testID?: string
  secondaryAppBar?: ISecondaryAppBar
}

export interface ISecondaryAppBar {
  leftContent?: ISecondaryAppBarContent[]
  rightContent?: ISecondaryAppBarContent[]
}

export interface ISecondaryAppBarContent {
  text: string
  link?: {
    aria: string
    url: string
  }
}

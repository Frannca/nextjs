import * as S from './styles'
import { IDashboard } from './types'

const Dashboard = ({ testID }: IDashboard) => {
  return <S.Wrapper data-testid={testID}>Dashboard</S.Wrapper>
}

Dashboard.defaultProps = {
  testID: 'dashboard'
}

export default Dashboard

import { render, screen } from '@testing-library/react'
import Slider from '.'
import { ISlider } from './types'

const sliderProps: ISlider = {
  testID: 'slider'
}

beforeEach(() => {
  render(<Slider {...sliderProps} />)
})

describe('<Slider />', () => {
  it('should render a <Slider /> component', () => {
    expect(screen.getByTestId('slider')).toBeVisible()
  })
})

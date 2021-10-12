import { customRender } from '@/utils/test-utils'
import { screen } from '@testing-library/dom'

import { BInput } from '.'

describe('<BInput />', () => {
  it('should render the input', () => {
    customRender(
      <BInput name="BInput" inputProps={{ 'aria-label': 'BInput' }} />
    )

    expect(screen.getByRole('textbox', { name: 'BInput' })).toBeInTheDocument()
  })

  it('should render the label when passed', () => {
    customRender(
      <BInput
        name="BInput"
        inputProps={{ 'aria-label': 'BInput' }}
        label="LabelText"
      />
    )

    expect(screen.getByText(/labeltext/i)).toBeInTheDocument()
  })

  it('should render the left element when passed', () => {
    customRender(
      <BInput
        name="BInput"
        inputProps={{ 'aria-label': 'BInput' }}
        leftElement={<div data-testid="left"></div>}
      />
    )

    expect(screen.getByTestId('left')).toBeInTheDocument()
  })

  it('should render the right element when passed', () => {
    customRender(
      <BInput
        name="BInput"
        inputProps={{ 'aria-label': 'BInput' }}
        rightElement={<div data-testid="right"></div>}
      />
    )

    expect(screen.getByTestId('right')).toBeInTheDocument()
  })
})

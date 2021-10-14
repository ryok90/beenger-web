import { customRender } from '@/utils/test-utils'
import { screen } from '@testing-library/dom'

import { BButton } from '.'

describe('<BButton />', () => {
  it('should render the button', () => {
    customRender(<BButton label="Test" />)

    expect(screen.getByRole('button', { name: /Test/i })).toBeInTheDocument()
  })
})

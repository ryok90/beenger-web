import { customRender } from '@/utils/test-utils'
import { screen } from '@testing-library/dom'
import { MemoryRouter } from 'react-router'
import { IconLogo, IconLogoText } from '.'

describe('Icons Tests', () => {
  it('should render all the icons with default props', () => {
    customRender(
      <>
        <IconLogo />
        <IconLogoText />
      </>,
      {
        wrapper: MemoryRouter
      }
    )
    expect(screen.getByTestId('icon-logo')).toBeInTheDocument()
    expect(screen.getByTestId('icon-logo-text')).toBeInTheDocument()
  })
})

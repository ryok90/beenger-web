import { MemoryRouter } from 'react-router'
import { render, screen } from 'utils/test-utils'
import { IconLogo, IconLogoText } from '.'

describe('Icons Tests', () => {
  it('should render all the icons with default props', () => {
    render(
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

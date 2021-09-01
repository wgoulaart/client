import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // 1.Render component `render`
    renderWithTheme(<Logo />)
    // 2. Selecionar o elemento a ser testado `Screen (queries) - getByLabel...`
    const logoComponent = screen.getByLabelText(/won-games/i).parentElement
    // 3. Expection -  assertion test
    expect(logoComponent).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})

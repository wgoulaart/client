import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('/fonts/poppins-300.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/poppins-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/poppins-300.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/poppins-300.woff') format('woff'), /* Modern Browsers */
        url('/fonts/poppins-300.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/poppins-300.svg#Poppins') format('svg'); /* Legacy iOS */
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/poppins-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/poppins-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/poppins-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/poppins-regular.woff') format('woff'), /* Modern Browsers */
        url('/fonts/poppins-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/poppins-regular.svg#Poppins') format('svg'); /* Legacy iOS */
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/poppins-600.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/poppins-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/poppins-600.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/poppins-600.woff') format('woff'), /* Modern Browsers */
        url('/fonts/poppins-600.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/poppins-600.svg#Poppins') format('svg'); /* Legacy iOS */
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    html,
    body,
    #__next {
      height: 100%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles

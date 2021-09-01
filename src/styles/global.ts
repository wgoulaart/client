import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
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
    src: url('/fonts/poppins-600.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/poppins-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/poppins-600.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/poppins-600.woff') format('woff'), /* Modern Browsers */
        url('/fonts/poppins-600.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/poppins-600.svg#Poppins') format('svg'); /* Legacy iOS */
  }
`

export default GlobalStyles

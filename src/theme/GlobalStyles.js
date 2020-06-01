import { createGlobalStyle } from "styled-components";
import MyriadProRegular from "../static/fonts/myriad-pro/MYRIADPRO-REGULAR.woff"

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Myriad Pro Regular';
        font-style: normal;
        font-weight: normal;
        src: url(${MyriadProRegular}) format('woff');
    }
    
    
    @font-face {
        font-family: 'Myriad Pro Condensed';
        font-style: normal;
        font-weight: normal;
        src: local('Myriad Pro Condensed'), url('MYRIADPRO-COND.woff') format('woff');
    }
    
    
    @font-face {
        font-family: 'Myriad Pro Condensed Italic';
        font-style: normal;
        font-weight: normal;
        src: local('Myriad Pro Condensed Italic'), url('MYRIADPRO-CONDIT.woff') format('woff');
    }
    
    
    @font-face {
        font-family: 'Myriad Pro Light';
        font-style: normal;
        font-weight: normal;
        src: local('Myriad Pro Light'), url('MyriadPro-Light.woff') format('woff');
    }
    
    
    @font-face {
        font-family: 'Myriad Pro Semibold';
        font-style: normal;
        font-weight: normal;
        src: local('Myriad Pro Semibold'), url('MYRIADPRO-SEMIBOLD.woff') format('woff');
    }
    
    
    @font-face {
        font-family: 'Myriad Pro Semibold Italic';
        font-style: normal;
        font-weight: normal;
        src: url('MYRIADPRO-SEMIBOLDIT.woff') format('woff');
    }
    
    
    @font-face {
        font-family: 'Myriad Pro Bold Condensed';
        font-style: normal;
        font-weight: normal;
        src: local('Myriad Pro Bold Condensed'), url('MYRIADPRO-BOLDCOND.woff') format('woff');
    }
    
    
    @font-face {
        font-family: 'Myriad Pro Bold';
        font-style: normal;
        font-weight: normal;
        src: local('Myriad Pro Bold'), url('MYRIADPRO-BOLD.woff') format('woff');
    }
    
    
    @font-face {
        font-family: 'Myriad Pro Bold Italic';
        font-style: normal;
        font-weight: normal;
        src: local('Myriad Pro Bold Italic'), url('MYRIADPRO-BOLDIT.woff') format('woff');
    }
    
    
    @font-face {
        font-family: 'Myriad Pro Bold Condensed Italic';
        font-style: normal;
        font-weight: normal;
        src: local('Myriad Pro Bold Condensed Italic'), url('../static/fonts/myriad-pro/MYRIADPRO-BOLDCONDIT.woff') format('woff');
    }

    body {
        font-family: 'Myriad Pro Regular', sans-serif;
        margin: 0;
        padding: 0;
        
    }
`;

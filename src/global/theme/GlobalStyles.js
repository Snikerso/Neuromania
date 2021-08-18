import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
        @font-face {
            font-family: "first";
            font-weight:700;
            src: url('/assets/fonts/Dosis-SemiBold.ttf');
        }
        @font-face {
            font-family:"first";
            font-weight:400;
            src: url('/assets/fonts/Dosis-Regular.ttf');
        }
        
        @font-face {
            font-family: "first";
            font-weight:300;
            src: url('/assets/fonts/Dosis-Light.ttf');
        }
    *,*::before,*::after{
        box-sizing:border-box;
        margin:0;
        }
    html {
        font-size: 62.5%; 
    }
    body{
        background-color:#19191C;
        color: white;
        font-size:1.6rem;
        margin:0;    
        font-family:first;
        font-weight:300;
        width: 100%;
        min-height:100vh;
        overflow-x:hidden;
        background-image: url('/src/assets/images/interface/background.png');
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media print {
        body {
            color:#19191C;
        }
    }
`;



import { keyframes } from "styled-components"

export const zoomIn = keyframes`
     from { 
        opacity: 0;
        transform: scale3d(0.3, 0.3, 0.3);
     }

    50% {
        opacity: 1;
    }
 `
export const fadeIn = keyframes`
    from {
      opacity: 0;
    }
  
    to {
      opacity: 1;
    }
  `

export const pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`


import { styled } from "@mui/material/styles"

type StyledImageProperties = {
  fit: string
  duration: number
  easing: string
}

const propsToCheck = ["fit", "duration", "easing"]

const validateStyledImageValues = (prop: string) => !propsToCheck.includes(prop)
const StyledImage = styled("img", {
  shouldForwardProp: validateStyledImageValues,
})<StyledImageProperties>(({ fit, easing, duration }) => ({
  width: "100%",
  height: "100%",
  "object-fit": fit,
  animationName: "materialize",
  animationDuration: `${duration}ms`,
  animationTimingFunction: easing,
  "@keyframes materialize": {
    "0%": {
      filter: "saturate(20%) contrast(50%) brightness(160%)",
      opacity: 0,
    },
    "75%": {
      filter: "saturate(60%) contrast(100%) brightness(100%)",
      opacity: 1,
    },
    "100%": {
      filter: "saturate(100%) contrast(100%) brightness(100%)",
      opacity: 1,
    },
  },
}))

export default StyledImage

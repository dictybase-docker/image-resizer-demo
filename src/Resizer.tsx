import Box from "@mui/material/Box"
import { useRef } from "react"
import { useSetAtom } from "jotai"
import { dimesionAtom } from "./state"

type InitialProperties = {
  x: number
  y: number
  width: number
  height: number
}
type ResizerProperties = {
  element: HTMLDivElement
}
type MouseEventProperties = React.MouseEvent<HTMLDivElement>

const ResizerStyles = {
  position: "absolute",
  borderStyle: "solid",
  borderWidth: "3px",
  borderRadius: "50%",
  borderColor: "hsl(190.53,27.8%,40.2%)",
  backgroundColor: "hsl(191,53.57%,78.04%)",
  height: "16px",
  width: "16px",
  top: "4%",
  right: "-1%",
  curosr: "sw-resize",
}

const Resizer = ({ element }: ResizerProperties) => {
  const setDimension = useSetAtom(dimesionAtom)
  const initial = useRef<InitialProperties>({
    width: element.getBoundingClientRect().width,
    height: element.getBoundingClientRect().height,
    x: 0,
    y: 0,
  })
  const handleOnMouseDown = (event: MouseEventProperties) => {
    initial.current.x = event.clientX
    initial.current.y = event.clientY
    document.addEventListener("mousemove", handleOnMouseMove)
    document.addEventListener("mouseup", handleOnMouseUp)
  }
  const handleOnMouseMove = (event: MouseEvent) => {
    setDimension({
      width: initial.current.width - (initial.current.x - event.clientX),
      height: initial.current.height - (event.clientY - initial.current.y),
    })
  }
  const handleOnMouseUp = () => {
    document.removeEventListener("mousemove", handleOnMouseMove)
  }
  return <Box sx={ResizerStyles} onMouseDown={handleOnMouseDown} />
}

export default Resizer

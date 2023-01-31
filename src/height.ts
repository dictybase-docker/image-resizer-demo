const percentWindowWidth = (percent: number) =>
  Math.round((percent * window.innerWidth) / 100)

const percentWindowHeight = (percent: number) =>
  Math.round((percent * window.innerHeight) / 100)

export { percentWindowHeight, percentWindowWidth }

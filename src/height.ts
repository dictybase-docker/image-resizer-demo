const percentWindowHeight = (percent: number) =>
  Math.round((percent * window.innerHeight) / 100)

export default percentWindowHeight

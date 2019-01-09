module.exports = {
  scoreFrame
}

function scoreFrame (frame, nextFrame) {
  if (frame[0] + frame[1] === 10) {
    return 10 + nextFrame[0]
  } else {
    return frame[0] + frame[1]
  }
}

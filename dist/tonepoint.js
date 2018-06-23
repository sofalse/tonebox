/* eslint-disable */
class Tonepoint {

  constructor (noiseOffset) {
    let blockwidth = width / 5
    this.played = false

    // Base frequency in Hz
    const baseFreq = 440

    // Randomize position and align to the block grid
    let x = floor((noise(noiseOffset)*6)-0.01) * blockwidth + blockwidth / 2
    let randArray = [-100, -50]
    // Randomize note lenght
    let y = random(randArray)

    this.pos = createVector(x, y)
    this.vel = createVector(0, 1)
    let block = floor(this.pos.x / blockwidth)
    this.osc = new p5.Oscillator()
    this.osc.setType('sine')
    const tone = x => Math.pow(Math.pow(2, 1/12), x) * baseFreq
    switch(block) {
      case 0:
        this.osc.freq(tone(0))
        break
      case 1:
        this.osc.freq(tone(3))
        break
      case 2:
        this.osc.freq(tone(5))
        break
      case 3:
        this.osc.freq(tone(7))
        break
      case 4:
        this.osc.freq(tone(10))
        break
      default:
        this.osc.freq(tone(12))
        break
    }
    this.osc.amp(0)
    this.osc.start()
  }

  update () {
    this.pos.add(this.vel)
  }

  render () {
    stroke(255)
    strokeWeight(4)
    point(this.pos.x, this.pos.y)
  }
}

let notes = []
let timer = 0.0
let noiseOffset = 0.1

function setup () {
  createCanvas(window.innerWidth, window.innerHeight)
}

function draw () {
  background(0)
  line(0, 2/3*height, width, 2/3*height)
  strokeWeight(1)
  for(let i=0; i<5; i++) {
    let blockwidth = width / 5
    line(i*blockwidth, 0, i*blockwidth, height)
  }

  // Spawn new tonepoint every 200ms
  if(millis() - timer >= 500) {
    for(let i=0; i<=round(random(0,2));i++) {
      notes.push(new Tonepoint(noiseOffset))
      noiseOffset += 0.5
    }
    timer = millis()
  }

  // Update & render position of each tonepoint
  for (note of notes) {
    note.update()
    note.render()

    // play each note if on line
    if (!note.played && note.pos.y > 2/3*height) {
      note.osc.amp(0.2, 0.1)
      note.osc.amp(0, 0.5, 0.1)
      console.log('note played')
      note.played = true
    }
    // if(note.played) {
    //   setTimeout(() => {
    //   }, 10)
    // }
  }

  // Delete unvisible notes
  notes = notes.filter((val) => {
    if(val.pos.y > height) {
      return false
    }
    return true
  })
}

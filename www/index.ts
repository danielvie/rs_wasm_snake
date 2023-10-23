import init, { World, Direction } from "snake_game"
import  { rnd } from './utils/rnd'

init().then(wasm => {
  
  const CELL_SIZE = 40
  const WORLD_WIDTH = 8
  const snakeSpawnIdx = rnd(WORLD_WIDTH * WORLD_WIDTH)

  const world = World.new(WORLD_WIDTH, snakeSpawnIdx)
  const worldWidth =  world.width()

  const canvas = document.getElementById('snake-canvas') as HTMLCanvasElement
  const ctx = canvas.getContext("2d")
  
  canvas.height = worldWidth * CELL_SIZE
  canvas.width = worldWidth * CELL_SIZE
  
  document.addEventListener("keydown", (e) => {
    switch(e.code) {
      case "ArrowUp":
        world.change_snake_dir(Direction.Up)
        break;
      case "ArrowRight":
        world.change_snake_dir(Direction.Right)
        break;
      case "ArrowDown":
        world.change_snake_dir(Direction.Down)
        break;
      case "ArrowLeft":
        world.change_snake_dir(Direction.Left)
        break;
    }
  })
  
  function drawWorld() {
    if (!ctx) return;

    ctx.beginPath()
    
    ctx.strokeStyle = '#aaa'
    for (let x = 0; x < worldWidth + 1; x++) {
      ctx.moveTo(CELL_SIZE * x, 0)
      ctx.lineTo(CELL_SIZE * x, worldWidth * CELL_SIZE)
    }    

    for (let y = 0; y < worldWidth + 1; y++) {
      ctx.moveTo(0, CELL_SIZE * y)
      ctx.lineTo(worldWidth * CELL_SIZE, CELL_SIZE * y)
    }    

    ctx.stroke()
  }

  function drawReward() {
    
    if (!ctx) return

    const idx = world.reward_cell()
    const col = idx % worldWidth
    const row = Math.floor(idx / worldWidth)

    ctx.beginPath()
    ctx.fillStyle = "#FF0000"

    ctx.fillRect(
      col * CELL_SIZE, 
      row * CELL_SIZE, 
      CELL_SIZE, 
      CELL_SIZE, 
    )
    ctx.stroke()
    
    if (idx == 1000) {
      alert('You won!!!')
    }
  }
  
  function drawSnake() {
    if (!ctx) return;

    const snakeCells = new Uint32Array(
      wasm.memory.buffer,
      world.snake_cells(),
      world.snake_lenght()
    )
    
    const rcell = world.reward_cell()
    console.log(`reward cell: ${rcell}`)
    
    snakeCells.forEach((cellIdx, i) => {
      const col = cellIdx % worldWidth
      const row = Math.floor(cellIdx / worldWidth)
      
      ctx.fillStyle = i === 0 ? "#7878bd" : "#6699ff"
      
      ctx.beginPath()
      ctx.fillRect(
        col * CELL_SIZE, 
        row * CELL_SIZE, 
        CELL_SIZE, 
        CELL_SIZE, 
      )
    })

    // const snakeIdx = world.snake_head_idx()
    ctx.stroke()
  }
  
  function paint() {
    drawWorld()
    drawSnake()
    drawReward()
  }
  
  function update() {
    const fps = 5
    setTimeout(() => {
      ctx?.clearRect(0, 0, canvas.width, canvas.height)
      world.step()
      paint()
      requestAnimationFrame(update)
    }, 1000 / fps)
  }
  
  paint()
  update()
})
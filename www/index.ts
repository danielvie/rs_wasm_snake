import init, { World, Direction, GameStatus } from "snake_game";
import { rnd } from "./utils/rnd";

init().then((wasm) => {
  const CELL_SIZE = 40;
  const WORLD_WIDTH = 7;
  const snakeSpawnIdx = rnd(WORLD_WIDTH * WORLD_WIDTH);

  const world = World.new(WORLD_WIDTH, snakeSpawnIdx);
  const worldWidth = world.width();

  const points = document.getElementById("points");
  const gameStatus = document.getElementById("game-status");
  const gameControlBtn = document.getElementById("game-control-btn");
  const canvas = document.getElementById("snake-canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");

  canvas.height = worldWidth * CELL_SIZE;
  canvas.width = worldWidth * CELL_SIZE;

  gameControlBtn?.addEventListener("click", (_) => {
    const gameStatus = world.game_status();
    if (gameStatus === undefined) {
      gameControlBtn.textContent = "Playing...";
      world.start_game();
      play();
    } else {
      location.reload();
    }
  });

  document.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "Space":
        gameControlBtn?.click();
        break;
      case "ArrowUp":
        world.change_snake_dir(Direction.Up);
        break;
      case "ArrowRight":
        world.change_snake_dir(Direction.Right);
        break;
      case "ArrowDown":
        world.change_snake_dir(Direction.Down);
        break;
      case "ArrowLeft":
        world.change_snake_dir(Direction.Left);
        break;
    }
  });

  function drawWorld() {
    if (!ctx) return;

    ctx.beginPath();

    ctx.strokeStyle = "#aaa";
    for (let x = 0; x < worldWidth + 1; x++) {
      ctx.moveTo(CELL_SIZE * x, 0);
      ctx.lineTo(CELL_SIZE * x, worldWidth * CELL_SIZE);
    }

    for (let y = 0; y < worldWidth + 1; y++) {
      ctx.moveTo(0, CELL_SIZE * y);
      ctx.lineTo(worldWidth * CELL_SIZE, CELL_SIZE * y);
    }

    ctx.stroke();
  }

  function drawGameStatus() {
    if (!gameStatus || !points || !gameControlBtn) {
      return;
    }

    gameStatus.textContent = world.game_status_text();
    points.textContent = world.points().toString();
  }

  function drawReward() {
    const idx = world.reward_cell();

    if (!idx || !ctx) {
      return;
    }

    const col = idx % worldWidth;
    const row = Math.floor(idx / worldWidth);

    ctx.beginPath();
    ctx.fillStyle = "#FF0000";

    ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    ctx.stroke();
  }

  function drawSnake() {
    if (!ctx) return;

    const snakeCells = new Uint32Array(
      wasm.memory.buffer,
      world.snake_cells(),
      world.snake_lenght()
    );

    snakeCells
      .filter((cellIdx, i) => !(i > 0 && cellIdx === snakeCells[0]))
      .forEach((cellIdx, i) => {
        const col = cellIdx % worldWidth;
        const row = Math.floor(cellIdx / worldWidth);

        ctx.fillStyle = i === 0 ? "#7878bd" : "#6699ff";

        ctx.beginPath();
        ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      });

    // const snakeIdx = world.snake_head_idx()
    ctx.stroke();
  }

  function paint() {
    drawWorld();
    drawSnake();
    drawReward();
    drawGameStatus();
  }

  function play() {
    if (!gameControlBtn) {
      return;
    }
    const status = world.game_status();

    if (status === GameStatus.Won || status === GameStatus.Lost) {
      gameControlBtn.textContent = "Replay";
      return;
    }

    const fps = 3;
    setTimeout(() => {
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      world.step();
      paint();
      requestAnimationFrame(play);
    }, 1000 / fps);
  }

  paint();
});

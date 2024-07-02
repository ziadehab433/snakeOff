class Game extends GameUtils {
    constructor() { 
        super()

        this.buildGrid()
    }

    start() { 
        const snake = new Snake()
        Game.spawnApple()
        setInterval(() => {
            snake.move()
            console.log("score: ", snake.score)
        }, 80)
    }

    static spawnApple() { 
        let randX, randY
        do { 
            randX = Math.floor(Math.random() * GameUtils.colNum), randY = Math.floor(Math.random() * GameUtils.rowNum)
        }while(GameUtils.grid[randY][randX].className == "snake")
        GameUtils.grid[randY][randX].className = "apple"
    }

    buildGrid() { 
        for(let i = 0; i < GameUtils.rowNum; i++){ 
            let row = []
            for(let j = 0; j < GameUtils.colNum; j++){ 
                let pixel = this.newPixel()
                GameUtils.container.appendChild(pixel)
                row.push(pixel)
            }
            GameUtils.grid.push(row)
        }
    }

    newPixel() { 
        let pixel = document.createElement("div")
        pixel.className = "pixel"
        pixel.style.width = GameUtils.pixelSize + "px", pixel.style.height = GameUtils.pixelSize + "px"
        return pixel
    }
}

const game = new Game()
game.start()
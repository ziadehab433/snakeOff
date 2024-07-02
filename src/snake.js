class Snake extends GameUtils { 
    score = 0
    body = []  // the whole snake's body
    dir  // the direction the snake is heading right now like [0, -1] for up (the y axis is inverted)
    facing // 1, 2, 3, 4 which direction is the snake facing

    constructor() { 
        super()
        this.dir = [0, -1], this.facing = 1
        this.draw()
        this.#detectKeyStrokes()
    }

    draw() { 
        let randX, randY
        do { 
            randX = Math.floor(Math.random() * GameUtils.colNum), randY = Math.floor(Math.random() * GameUtils.rowNum)
        }while(randY > GameUtils.rowNum - 4 || randY < 3)

        GameUtils.grid[randY][randX].className = "snake"
        GameUtils.grid[randY + 1][randX].className = "snake"
        GameUtils.grid[randY + 2][randX].className = "snake"

        this.body.push([randY, randX])
        this.body.push([randY + 1, randX])
        this.body.push([randY + 2, randX])
    }
    
    move() { 
        let y = this.dir[1] + this.body[0][0], x = this.dir[0] + this.body[0][1]
        if( 
            x >= GameUtils.colNum || 
            x < 0 || 
            y >= GameUtils.rowNum || 
            y < 0 ||
            GameUtils.grid[y][x].className == "snake"
        ) { 
            return
        }

        let tail = this.body.pop()
        this.body.unshift([y, x])

        if(GameUtils.grid[y][x].className == "apple"){ 
            this.body.push(tail)
            Game.spawnApple()
            this.score++
        }else { 
            GameUtils.grid[tail[0]][tail[1]].className = "pixel"
        }

        GameUtils.grid[y][x].className = "snake"
    }

    #detectKeyStrokes() { 
        window.addEventListener("keydown", (e) => { 
            this.#changeDir(e.key)
        })
    }

    #changeDir(key) { 
        switch(key) { 
            case 'w': 
                if(this.facing != 3){ 
                    this.dir = [0, -1] 
                    this.facing = 1
                }
                break
            case 'a': 
                if(this.facing != 2){ 
                    this.dir = [-1, 0]
                    this.facing = 4
                }
                break
            case 's': 
                if(this.facing != 1){ 
                    this.dir = [0, 1]
                    this.facing = 3
                }
                break
            case 'd': 
                if(this.facing != 4){
                    this.dir = [1, 0]
                    this.facing = 2
                }
                break
        }
    }
}
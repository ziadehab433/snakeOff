class GameUtils { 
    static container // the div container for the whole game
    static grid = [] // contains all the divs inside the container

    static conWidth = 800 // width of the container
    static conHeight = 600 // height of the container
    static pixelSize = 20

    static rowNum // number of rows in the container
    static colNum // number of columns in the container

    constructor() { 
        GameUtils.container = document.getElementById("gameContainer")
        GameUtils.rowNum = GameUtils.conHeight / GameUtils.pixelSize
        GameUtils.colNum = GameUtils.conWidth / GameUtils.pixelSize
        GameUtils.container.style.width = GameUtils.conWidth + "px"
        GameUtils.container.style.height = GameUtils.conHeight + "px"
        GameUtils.container.style.gridTemplateColumns = "repeat(" + GameUtils.colNum + ", 1fr)"
    }
}
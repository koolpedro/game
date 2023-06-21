document.addEventListener("DOMContentLoaded", () => {
    const maze = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 9, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]; // 1 represents walls, 0 represents empty cells, and 9 represents the goal

    const mazeContainer = document.querySelector(".maze");

    function createMaze() {
        for (let i = 0; i < maze.length; i++) {
            for (let j = 0; j < maze[i].length; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");

                if (maze[i][j] === 1) {
                    cell.style.backgroundColor = "#000";
                } else if (maze[i][j] === 9) {
                    cell.classList.add("goal");
                }

                mazeContainer.appendChild(cell);
            }
        }
    }

    function movePlayer(event) {
        const playerCell = document.querySelector(".player");
        const key = event.key;

        let playerRowIndex = 0;
        let playerCellIndex = 0;

        for (let i = 0; i < maze


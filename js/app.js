function init() {

    // Constructor tablicy
    function GameOfLife(boardWidth, boardHeight) {
        this.width = boardWidth;
        this.height = boardHeight;
        var board = document.getElementById('board');
        this.cells = [];
        this.self = this;
    }

    // Metoda - stworzenie tablicy
    GameOfLife.prototype.createBoard = function () {
        board.style.width = (this.width * 10) + 'px';
        board.style.height = (this.height * 10) + 'px';
        var size = this.width * this.height;
        var newDiv = document.createElement('div');

        for (var i = 0; i < size; i++) {
            newDiv = document.createElement('div');
            board.appendChild(newDiv);
        }
        this.cells = board.querySelectorAll('div');


        function toggleLive() {
            this.classList.toggle('live');
        }

        for (var i = 0; i < this.cells.length; i++) {
            this.cells[i].addEventListener('click', toggleLive);
        }
    };

    // Metoda - zwracamy div o podanych współrzędnych

    GameOfLife.prototype.divIndex = function (x, y) {
        var indeks = x + y * this.width;
        return this.cells[indeks];
    };

    // 5. Zdefiniowanie stanu początkowego

    GameOfLife.prototype.setCellState = function (x, y, state) {
        if (this.divIndex(x, y).className == '') {
            this.divIndex(x, y).classList.add(state);
        } else if (this.divIndex(x, y).className == state) {
            this.divIndex(x, y).classList.remove(state);
        }
    };

    GameOfLife.prototype.firstGlider = function () {
        this.setCellState(1, 0, 'live');
        this.setCellState(2, 1, 'live');
        this.setCellState(2, 2, 'live');
        this.setCellState(0, 2, 'live');
        this.setCellState(1, 2, 'live');
    };

    // 6. Kroki programu

    // Generowanie przyszłego stanu komórki
    GameOfLife.prototype.computeCellNextState = function (x, y) {
        var aliveCounter = 0;

        //warunek dla lewej brzegowej kolumny
        if (x == 0) {
            // console.log('szerokosc: ' + this.width);
            //sasiad1
            // console.log('poza skala s1');
            //sasiad2
            var neighbour2 = this.divIndex(x, y - 1);
            if (neighbour2 == undefined) {
                // console.log('poza skala');
            } else {
                if (neighbour2.classList == 'live') {
                    // console.log("it's ALIVE!", neighbour2);
                    aliveCounter++
                } else {
                    // console.log("it's dead :(", neighbour2);
                }
            }
            //sasiad3
            var neighbour3 = this.divIndex(x + 1, y - 1);
            if (neighbour3 == undefined) {
                // console.log('poza skala');
            } else {
                if (neighbour3.classList == 'live') {
                    // console.log("it's ALIVE!", neighbour3);
                    aliveCounter++
                } else {
                    // console.log("it's dead :(", neighbour3);
                }
            }
            //sasiad4
            // console.log('poza skala s4');
            //sasiad5
            var neighbour5 = this.divIndex(x + 1, y);
            if (neighbour5 == undefined) {
                // console.log('poza skala');
            } else {
                if (neighbour5.classList == 'live') {
                    // console.log("it's ALIVE!", neighbour5);
                    aliveCounter++
                } else {
                    // console.log("it's dead :(", neighbour5);
                }
            }
            //sasiad6
            // console.log('poza skala s6');
            //sasiad7
            var neighbour7 = this.divIndex(x, y + 1);
            if (neighbour7 == undefined) {
                // console.log('poza skala');
            } else {
                if (neighbour7.classList == 'live') {
                    // console.log("it's ALIVE!", neighbour7);
                    aliveCounter++
                } else {
                    // console.log("it's dead :(", neighbour7);
                }
            }
            //sasiad8
            var neighbour8 = this.divIndex(x + 1, y + 1);
            if (neighbour8 == undefined) {
                // console.log('poza skala');
            } else {
                if (neighbour8.classList == 'live') {
                    // console.log("it's ALIVE!", neighbour8);
                    aliveCounter++
                } else {
                    // console.log("it's dead :(", neighbour8);
                }
            }
            // console.log('Total live cells: ' + aliveCounter);

            //warunek dla prawej brzegowej kolumny
        } else if (x == this.width - 1) {
            //sasiad1
            var neighbour1 = this.divIndex(x - 1, y - 1);
            if (neighbour1 == undefined) {
                // console.log('poza skala');
            } else {
                if (neighbour1.classList == 'live') {
                    // console.log("it's ALIVE!", neighbour1);
                    aliveCounter++
                } else {
                    // console.log("it's dead :(", neighbour1);
                }
            }
            //sasiad2
            var neighbour2 = this.divIndex(x, y - 1);
            if (neighbour2 == undefined) {
                // console.log('poza skala');
            } else {
                if (neighbour2.classList == 'live') {
                    // console.log("it's ALIVE!", neighbour2);
                    aliveCounter++
                } else {
                    // console.log("it's dead :(", neighbour2);
                }
            }
            //sasiad3
            // console.log('poza skala s3');
            //sasiad4
            var neighbour4 = this.divIndex(x - 1, y);
            if (neighbour4 == undefined) {
                // console.log('poza skala');
            } else {
                if (neighbour4.classList == 'live') {
                    // console.log("it's ALIVE!", neighbour4);
                    aliveCounter++
                } else {
                    // console.log("it's dead :(", neighbour4);
                }
            }
            //sasiad5
            // console.log('poza skala s5');
            //sasiad6
            var neighbour6 = this.divIndex(x - 1, y + 1);
            if (neighbour6 == undefined) {
                // console.log('poza skala');
            } else {
                if (neighbour6.classList == 'live') {
                    // console.log("it's ALIVE!", neighbour6);
                    aliveCounter++
                } else {
                    // console.log("it's dead :(", neighbour6);
                }
            }
            //sasiad7
            var neighbour7 = this.divIndex(x, y + 1);
            if (neighbour7 == undefined) {
                // console.log('poza skala');
            } else {
                if (neighbour7.classList == 'live') {
                    // console.log("it's ALIVE!", neighbour7);
                    aliveCounter++
                } else {
                    // console.log("it's dead :(", neighbour7);
                }
            }
            //sasiad8
            // console.log('poza skala s8');


            //warunek dla wszystkich wewnetrznych komorek
        } else {
            //sasiad1
            var neighbour1 = this.divIndex(x - 1, y - 1);
            if (neighbour1 == undefined) {
                // console.log('poza skala');
            } else {
                if (neighbour1.classList == 'live') {
                    // console.log("it's ALIVE!", neighbour1);
                    aliveCounter++
                } else {
                    // console.log("it's dead :(", neighbour1);
                }
            }
            //sasiad2
            var neighbour2 = this.divIndex(x, y - 1);
            if (neighbour2 == undefined) {
                // console.log('poza skala');
            } else {
                if (neighbour2.classList == 'live') {
                    // console.log("it's ALIVE!", neighbour2);
                    aliveCounter++
                } else {
                    // console.log("it's dead :(", neighbour2);
                }
            }
            //sasiad3
            var neighbour3 = this.divIndex(x + 1, y - 1);
            if (neighbour3 == undefined) {
                // console.log('poza skala');
            } else {
                if (neighbour3.classList == 'live') {
                    // console.log("it's ALIVE!", neighbour3);
                    aliveCounter++
                } else {
                    // console.log("it's dead :(", neighbour3);
                }
            }
            //sasiad4
            var neighbour4 = this.divIndex(x - 1, y);
            if (neighbour4 == undefined) {
                // console.log('poza skala');
            } else {
                if (neighbour4.classList == 'live') {
                    // console.log("it's ALIVE!", neighbour4);
                    aliveCounter++
                } else {
                    // console.log("it's dead :(", neighbour4);
                }
            }
            //sasiad5
            var neighbour5 = this.divIndex(x + 1, y);
            if (neighbour5 == undefined) {
                // console.log('poza skala');
            } else {
                if (neighbour5.classList == 'live') {
                    // console.log("it's ALIVE!", neighbour5);
                    aliveCounter++
                } else {
                    // console.log("it's dead :(", neighbour5);
                }
            }
            //sasiad6
            var neighbour6 = this.divIndex(x - 1, y + 1);
            if (neighbour6 == undefined) {
                // console.log('poza skala');
            } else {
                if (neighbour6.classList == 'live') {
                    // console.log("it's ALIVE!", neighbour6);
                    aliveCounter++
                } else {
                    // console.log("it's dead :(", neighbour6);
                }
            }
            //sasiad7
            var neighbour7 = this.divIndex(x, y + 1);
            if (neighbour7 == undefined) {
                // console.log('poza skala');
            } else {
                if (neighbour7.classList == 'live') {
                    // console.log("it's ALIVE!", neighbour7);
                    aliveCounter++
                } else {
                    // console.log("it's dead :(", neighbour7);
                }
            }
            //sasiad8
            var neighbour8 = this.divIndex(x + 1, y + 1);
            if (neighbour8 == undefined) {
                // console.log('poza skala');
            } else {
                if (neighbour8.classList == 'live') {
                    // console.log("it's ALIVE!", neighbour8);
                    aliveCounter++
                } else {
                    // console.log("it's dead :(", neighbour8);
                }
            }
            // console.log('Total live cells: ' + aliveCounter);
        }

        //Mother Cell
        if (this.divIndex(x, y).classList == 'live') {
            // console.log("Mother is ALIVE!", this.divIndex(x, y));
            if (aliveCounter < 2) {
                // console.log("Mother extinct");
                return 0;
            } else if (aliveCounter == 2 || aliveCounter == 3) {
                // console.log("Mother suvrives");
                return 1;
            } else if (aliveCounter > 3) {
                // console.log("Mother overpopulated");
                return 0;
            }
        } else if (this.divIndex(x, y).classList != 'live') {
            // console.log("Mother is dead :(", this.divIndex(x, y));
            if (aliveCounter == 3) {
                // console.log("Mother become to life");
                return 1;
            } else {
                // console.log('Mother stays dead');
                return 0;
            }
        }
        // }
    };

    // Generowanie przyszłego stanu komórki
    var nextGenCells = [];

    GameOfLife.prototype.computeNextGeneration = function () {
        var nextGenCells = [];
        for (var i = 0; i < this.width; i++) {
            for (var j = 0; j < this.height; j++) {
                // console.log(this.computeCellNextState(j, i));
                if (this.computeCellNextState(j, i) == 0) {
                    nextGenCells.push(0);
                } else if (this.computeCellNextState(j, i) == 1) {
                    nextGenCells.push(1);
                }
            }
        }
        this.nextGenCells = nextGenCells;
    };

    // Wyswietlanie nowego stanu tablicy

    GameOfLife.prototype.printNextGeneration = function () {
        // console.log(game.self);
        game.computeNextGeneration();
        for (var i = 0; i < game.self.cells.length; i++) {
            if (game.self.nextGenCells[i] == 0) {
                game.self.cells[i].classList.remove('live');
            } else if (game.self.nextGenCells[i] == 1) {
                game.self.cells[i].classList.add('live');
            }
        }
    };

    // Start and pause buttons
    var interval;
    var intervalUser;

    function start() {
        var intervalInput = document.querySelector('input#interval');
        var intervalUser = intervalInput.value;

        interval = setInterval(game.printNextGeneration, intervalUser);
    }

    function pause() {
        clearInterval(interval);
    }

    var playBtn = document.querySelector('#play');
    playBtn.addEventListener('click', start);

    var pauseBtn = document.querySelector('#pause');
    pauseBtn.addEventListener('click', pause);


    //User functionality
    var createBoardBtn = document.querySelector('button#createBoard');

    // var widthUser;
    // var heightUser;
    // var InteervalUser;

    // widthUser = widthInput.value;
    // heightUser = heightInput.value;
    // intervalUser = intervalInput.value;

    // var game = new GameOfLife(10, 10);
    // game.createBoard();
    // game.firstGlider();

    var game;


    function createBoardFunc() {
        var widthInput = document.querySelector('input#width');
        var heightInput = document.querySelector('input#height');

        var widthUser = widthInput.value;
        var heightUser = heightInput.value;

        game = new GameOfLife(widthUser, heightUser);
        game.createBoard();
        game.firstGlider();
    }

    createBoardBtn.addEventListener('click', createBoardFunc);



    // game.computeCellNextState(9,9);
    // game.computeNextGeneration();
    // game.computeNextGeneration();

    // var playBtn = document.querySelector('#play');
    // playBtn.addEventListener('click', game.printNextGeneration);


    // console.log(game.nextGenCells);
    // console.log(game.divIndex(0,0));
    // console.log(game.divIndex(1,1));
    // console.log(game.divIndex(9,9));

}

window.addEventListener('DOMContentLoaded', init);
# Game of Life

Goal of this practise was to write simple application 
in JavaScript, which will show interactive animation 
based on one of first and most well known examples of 
cellular automaton, invented by British mathematician 
John Conway. It's written in clean JS, based upon 
object-oriented programming.

It's a zero player game, which means that its evolution is
determined by its initial state.

At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbours dies, 
as if caused by underpopulation.
2. Any live cell with two or three live neighbours lives 
on to the next generation.
3. Any live cell with more than three live neighbours dies, 
as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes 
a live cell, as if by reproduction.



Game was written during CodersLab.pl workshop.
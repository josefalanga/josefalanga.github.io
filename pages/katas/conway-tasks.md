# Conway's Tasks Kata

## Rules of Conway's Game of Life

- A living cell with less than two neighbors: Dies
- A living cell with two or three neighbors: Survives
- A living cell with more than three neighbors: Dies
- A dead cell with exactly three neighbors: Becomes alive

## Constrains of the kata
1. Given a 2D board, with fixed size (eg:10x12), and a starting set of alive cells, implement the core rules of the game using hardcore TDD (red-green-refactor).
2. Use Unity and UniTask. 
3. The simulation advances by itself at one step per second.
4. Make a base test class, annotation, extension or whatever you can think of to make the testing the simplest it can be.
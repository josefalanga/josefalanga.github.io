# Advanced Conway's Kata

## Rules of Conway's Game of Life

- A living cell with less than two neighbors: Dies
- A living cell with two or three neighbors: Survives
- A living cell with more than three neighbors: Dies
- A dead cell with exactly three neighbors: Becomes alive

## Constrains of the kata
- Must use Unity.
- Everything is allowed in the implementation.
- Each iteration must be completed before reading the next.

## Iterations
<details>
  <summary>First</summary>

- Given a 2D board, with fixed size, and a starting set of cells, implement the core rules of the game using hardcore TDD.
</details>

<details>
  <summary>Second</summary>

- Measure your implementations with a [Performance Testing Framework](https://docs.unity3d.com/Packages/com.unity.test-framework.performance@1.2/manual/index.html). Use 40 steps of [this](https://playgameoflife.com/lexicon/180-degree_kickback) seed on a 100x100 board.
</details>

<details>
  <summary>Third</summary>

- Make it playable from Unity at a fixed time step (eg: one step per second).
- The starting board and cells should be configured before starting the simulation.
</details>

<details>
  <summary>Fourth</summary>

- Make it work with a 3D board in Unity.
- Same rules as before
</details>
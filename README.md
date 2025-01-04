# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications where an infinite loop occurs within a `useEffect` hook.

## The Bug

The `bug.js` file contains a component that uses the `useEffect` hook to increment a counter. The problem is that the state update triggers a re-render, which causes the `useEffect` to run again, creating an infinite loop.

## The Solution

The `bugSolution.js` file shows the correct way to manage state updates inside useEffect hook to avoid the infinite loop. This is done by properly using the dependency array to only run the effect under specific conditions.
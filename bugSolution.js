```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correctly using dependency array to avoid infinite loop.
    //The empty dependency array [] ensures that the effect runs only once after the initial render.
    //If we want it to run every time count changes we should add count in the dependency array [count]
  }, []);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```
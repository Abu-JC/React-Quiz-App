const cards = [
  {
    question: "How do you manage local state in a functional component?",
    answer: "By using the useState hook to declare state variables and update functions.",
    code: "const [state, setState] = useState(initialValue);"
  },
  {
    question: "How do you perform side effects in functional components?",
    answer: "The useEffect hook handles operations like data fetching, subscriptions, or DOM mutations.",
    code: "useEffect(() => {\n  // effect\n}, [dependencies]);"
  },
  {
    question: "What is the purpose of React.memo()?",
    answer: "It's a higher-order component that memoizes the result, preventing unnecessary re-renders when props don't change.",
    code: "const MemoComponent = React.memo(MyComponent);"
  },
  {
    question: "What does the useMemo hook do?",
    answer: "It memoizes the result of a calculation between re-renders, recalculating only when its dependencies change.",
    code: "const value = useMemo(() => compute(a, b), [a, b]);"
  },
  {
    question: "How do you access a DOM element directly in React?",
    answer: "Use the useRef hook to create a ref object and attach it to the ref attribute of a JSX element.",
    code: "const inputRef = useRef(null);\n<input ref={inputRef} />"
  }
];

export default cards;
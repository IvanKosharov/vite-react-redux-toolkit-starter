import cssClasses from "./Counter.module.css"
import { useAppDispatch, useAppSeletor } from "../store/store"
import { increment, incrementBy } from "../store/counter/slice"

export const Counter = () => {
  const dispatch = useAppDispatch()
  const count = useAppSeletor((state) => state.counter.value)

  return (
    <div className={cssClasses.container}>
      <span className={cssClasses.label}>{`Count ${count}`}</span>
      <button
        className={cssClasses.button}
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className={cssClasses.button}
        onClick={() => dispatch(incrementBy(10))}
      >
        Increment by 10
      </button>
    </div>
  )
}

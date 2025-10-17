import cssClasses from "./Counter.module.css"
import { useAppDispatch, useAppSeletor } from "../store/store"
import { increment, incrementBy } from "../store/counter/slice"
import { countSelector } from "../store/counter/selectors"

export const Counter = () => {
  const dispatch = useAppDispatch()
  const count = useAppSeletor(countSelector)

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

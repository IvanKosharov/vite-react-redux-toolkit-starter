import cssClasses from "./App.module.css"
import { useAppDispatch, useAppSeletor } from "./state/store"
import { increment } from "./state/counter-slice"

export const App = () => {
  const dispatch = useAppDispatch()
  const count = useAppSeletor((state) => state.counter.value)

  return (
    <div className={cssClasses.container}>
      <span className={cssClasses.label}>Redux button</span>
      <button
        className={cssClasses.button}
        onClick={() => dispatch(increment())}
      >
        {count}
      </button>
    </div>
  )
}

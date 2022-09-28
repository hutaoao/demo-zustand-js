import {listStore} from "../store";
import shallow from "zustand/shallow";
import {useEffect, useRef} from "react";

const List = () => {
  const inputRef = useRef();

  const {
    title,
    fruits,
    addFruits,
  } = listStore(state => ({
    title: state.title,
    fruits: state.fruits,
    addFruits: state.addFruits,
  }), shallow)

  useEffect(() => {
    console.log('List Page useEffect')
  })

  const add = () => {
    const value = inputRef.current.value;
    if (value) {
      addFruits(value);
      inputRef.current.value = "";
    }
  }

  return (
    <section>
      <h2>{title}</h2>
      <p>
        <input ref={inputRef}/>
        <button onClick={add}>添加水果</button>
      </p>
      <div className='content'>
        <ul>
          {
            fruits.map((e, index) => {
              return (
                <li key={index}>{e}</li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default List;

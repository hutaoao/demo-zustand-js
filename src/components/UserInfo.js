import {useEffect} from "react";
import {userStore} from "../store";
import shallow from "zustand/shallow";

const UserInfo = () => {
  /**
   * ！！！注意
   *
   * 1）userStore() 获取所有状态：
   * 这样会导致该组件在每一个状态变化时都要进行更新【子组件 age 变化，导致父组件（父组件使用了 title）更新】注意观察 useEffect
   * 使用 setState 直接改变状态时 设置重复值也会导致组件重复更新
   *
   * 2）选择多个状态切片可避免 即 userStore(state => state.title)
   *
   * 3）传递 shallow 构造一个内部要多个状态的对象。
   * */

    // 1）
    // const {name, age} = userStore();

    // 2）
    // const name = userStore(state => state.name);
    // const age = userStore(state => state.age);

    // 3）
    // 对象选取，当 state.name 或 state.age 改变时，重新渲染组件。
    // const {name, age} = userStore(state => ({name: state.name, age: state.age}), shallow)

    // 数组选取，当 state.name 或 state.age 改变时，重新渲染组件。
  const [name, age] = userStore(state => [state.name, state.age], shallow);

  useEffect(() => {
    console.log('UserInfo useEffect')
  })

  return (
    <div>
      <span>{name} 有</span>
      <span>{age} 岁</span>
    </div>
  )
}

export default UserInfo;

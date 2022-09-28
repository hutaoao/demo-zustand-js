import UserInfo from "../components/UserInfo";
import {userStore} from "../store";
import shallow from "zustand/shallow";
import {useEffect} from "react";

const User = () => {

  // 1、获取所有状态，通过点 . 使用
  const user = userStore

  // const {title} = userStore(); // 此操作 每一个状态变化时该组件会更新

  // const title = userStore(state => state.title);
  // const addAge = userStore(state => state.addAge);
  // const subAge = userStore(state => state.subAge);
  // const getTitle = userStore(state => state.getTitle);

  const {
    title,
    addAge,
    subAge,
    getTitle,
    fetchUser
  } = userStore(state => ({
    title: state.title,
    addAge: state.addAge,
    subAge: state.subAge,
    getTitle: state.getTitle,
    fetchUser: state.fetchUser,
  }), shallow)

  useEffect(() => {
    console.log('User Page useEffect')
  })

  // 通过 setState 直接修改状态
  const setState = () => {
    user.setState({age: 0})
  }

  // 获取异步数据
  const getUser = async () => {
    const data = await fetchUser();
    console.log(data);
  }

  return (
    <section>
      <h2>{title}</h2>
      <div className='content'>
        <UserInfo/>
        <button onClick={setState}>通过 setState 直接修改状态</button>
        <button onClick={() => addAge(2)}>年龄加 2</button>
        <button onClick={subAge}>年龄减 1</button>
        <button onClick={getTitle}>访问存储状态</button>
        <button onClick={getUser}>获取异步数据</button>
      </div>
    </section>
  )
}

export default User;

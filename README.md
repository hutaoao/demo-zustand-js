# Zustand demo

### 入门

```javascript
/**
 * 初级
 */

import create from 'zustand'

// define the store
const userStore = create((set, get) => ({
  title: 'user store - 入门',
  name: '瑶瑶',
  age: 18,
  addAge: (by) => set(state => ({age: state.age + by})),
  subAge: () => set(state => ({age: state.age - 1})),
  getTitle: () => {
    const title = get().title;
    console.log('title: ', title);
  },
  fetchUser: async () => {
    const url = "https://api.github.com/search/users?q=john&per_page=5";
    const response = await fetch(url);
    return await response.json();
  }
}))

export default userStore;

```

### 多种写法及中间件
```javascript
/**
 * Zustand 提供了持久化状态以防止数据丢失的功能,
 * 我们将使用 Zustand 提供的名为 persist 的中间件,
 * 该中间件通过 localStorage 来持久化来自应用程序的数据, 这样, 当我们刷新页面或者完全关闭页面时, 状态不会重置
 */

import create from 'zustand';

/**
 * persist 的中间件持久化来自应用程序的数据
 * */
import {persist} from "zustand/middleware";

// define the store

/**
 * 写法 1
 * */
/*const listStore = create(persist((set) => ({
  title: 'list store',
  fruits: ['apple', 'banana', 'orange'],
  addFruits: (fruit) => {
    set(state => ({
      fruits: [...state.fruits, fruit]
    }));
  }
}), {name: 'listStore'}))

export default listStore;*/

/**
 * 写法 2
 * */
const store = (set) => ({
  title: 'list store - 持久化状态',
  fruits: ['apple', 'banana', 'orange'],
  addFruits: (fruit) => {
    set(state => ({
      fruits: [...state.fruits, fruit]
    }));
  }
})

const listStore = create(persist(store, {name: "listStore"}))
export default listStore;

```

### 注意

```javascript
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
```

具体写法看代码及注释

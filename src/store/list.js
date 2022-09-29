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

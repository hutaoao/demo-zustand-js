/**
 * 初级
 */

import create from 'zustand'

// define the store
const userStore = create((set, get) => ({
  title: 'user store',
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

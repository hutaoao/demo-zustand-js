import './App.css';
import {useEffect} from "react";
import User from "./pages/user";
import List from "./pages/list";

function App() {

  useEffect(() => {
    console.log('APPJS useEffect')
  })

  return (
    <div className="App">
      <h1>zustand</h1>
      <h5>请打开控制台查看</h5>
      <h5>（初始化 APPJS useEffect 打印两次是由于 React.StrictMode 严格模式）</h5>
      <User/>
      <List/>
    </div>
  );
}

export default App;

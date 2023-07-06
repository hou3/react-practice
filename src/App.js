import './App.css';
import { HashRouter, Routes, Route, } from 'react-router-dom';
// 公共框架
import Framework from './components/Framework/';
// 模块级组件--一级路由
import Article from "./pages/Article/";
import User from "./pages/User/";
import Category from './pages/Category';
// 页面级组件
import Login from './pages/Login/';
import Register from './pages/Register/';
import NotFound from './pages/NotFound';
// 导航守卫
import RequireAuth from './components/RequireAuth';

import { ConfigProvider } from 'antd';
// dayjs
import dayjs from 'dayjs';
// 语言包
import zhCN from 'antd/locale/zh_CN';
// 日期语言包
import 'dayjs/locale/zh-cn';
// 日期插件设置
dayjs.locale('zh-cn');


function App() {
  return (
    // 为组件提供统一的全局化配置
    <ConfigProvider componentSize="middle" locale={zhCN}>
      {/* 路由 */}
      <HashRouter>
        <Routes>
          <Route element={<RequireAuth><Framework /></RequireAuth>}>
            <Route path="/article/*" element={<Article />} />
            <Route path="/user/*" element={<User />} />
            <Route path="/category/*" element={<Category />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </HashRouter>

    </ConfigProvider>
  );
}

export default App;

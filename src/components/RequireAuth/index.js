import { Navigate, useLocation } from 'react-router-dom';

function RequireAuth({ children, ...rest }) {
    // 获取当前页面地址
    let { pathname } = useLocation();
    // 提取access_token
    let access_token = sessionStorage.access_token;
    // 判断是否登录，重定向至登录页面
    if (!access_token) {
        return <Navigate to={`/login?redirect=${pathname}`} replace={true} />;
    }
    return children;
}

export default RequireAuth;

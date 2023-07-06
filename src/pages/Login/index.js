import { Card, Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import styles from './index.module.css';

import { Admin } from '../../api/';

function Login() {
    const [messageApi, contextHolder] = message.useMessage();
    // 跳转页面
    const navigate = useNavigate();
    // 获取当前URL中的searchParams
    let [searchParams, setSearchParams] = useSearchParams();
    
    // 登录
    let handleLogin = async (values) => {
        let { status, msg, data } = await Admin.login(values);
        if (status) {
            // 信息提示
            messageApi.success(msg);
            // 缓存数据
            sessionStorage.access_token = data.access_token;
            sessionStorage.refresh_token = data.refresh_token;
            sessionStorage.role_id = data.role_id;
            sessionStorage.user_id = data.user_id;
            // 获取redirect参数
            let redirect = searchParams.get('redirect');
            // 跳转页面
            if (redirect) {
                // 重定向
                navigate(redirect);
            } else {
                // 默认跳转
                navigate('/article/list');
            }
        } else {
            // 信息提示
            messageApi.error(msg);
        }
    }

    return (
        <div className={styles.bg}>
            {contextHolder}
            <Card actions={[<Link to="/register">注册账户</Link>, <Link to="/">忘记密码？</Link>,]} title="登录" className={styles["form-box"]}>
                <Form onFinish={handleLogin} initialValues={{ username: "admin", password: 123 }} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
                    <Form.Item label="账户" name="username" rules={[
                        { required: true, message: '请输入账户名称!' },
                        { min: 3, message: '账户名称至少3个字符!' }
                    ]}>
                        <Input prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item label="密码" name="password" rules={[
                        { required: true, message: '请输入密码!' },
                        { pattern: /\d{3,}/, message: '密码至少3个数字!' }
                    ]}>
                        <Input.Password prefix={<LockOutlined />} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login;
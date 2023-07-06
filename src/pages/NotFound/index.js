import { Link } from "react-router-dom";
import { Result, Button } from 'antd';

function NotFound() {
    return (
        <Result
            status="404"
            title="404"
            subTitle="抱歉, 您访问的网页不存在。"
            extra={
                <Link to="/">
                    <Button type="primary">回到首页</Button>
                </Link>
            }
        />
    )
}

export default NotFound;
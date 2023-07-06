import { useState, useEffect } from 'react';
import { Row, Col, Menu, Space, Avatar, Button, Image, Typography } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
import logo from './img/logo.png';

import { useSelector, useDispatch } from 'react-redux';
// 导入 action creator 函数
import { toggle } from '../../../store/slice/menu';
// 导入 Thunk 函数
import { fetchProfile } from '../../../store/slice/account';

const { Text } = Typography;

function NavBar() {
    // 获取仓库中dispatch方法
    const dispatch = useDispatch();

    // 折叠菜单
    let handleToggle = () => {
        dispatch(toggle());
    }

    // 加载当前账户
    useEffect(() => {
        dispatch(fetchProfile());
    }, []);

    // 获取store中的profile
    let profile = useSelector((state) => state.account.profile);

    let [items, setItems] = useState([
        { label: '预览网站', key: "preview" },
        {
            label: (
                <Space align="center">
                    <Avatar src={profile.avatar} />
                    <Text style={{ color: "white" }}>{profile.fullname}</Text>
                </Space>
            ),
            key: "user",
            children: [
                { label: '消息通知', key: "message" },
                { label: '账户设置', key: "account" },
                { label: '退出登录', key: "logout" },
            ],
        },
    ]);
    return (
        <Row justify="space-between" align="center">
            <Col>
                <Row justify="space-between" align="center">
                    <Col>
                        <Image width={180} src={logo} preview={false} className="logo" />
                    </Col>
                    <Col>
                        <Button onClick={handleToggle} icon={<MenuFoldOutlined />} type="text" style={{ color: "white" }} />
                    </Col>
                </Row>
            </Col>
            <Col>
                <Menu items={items} mode="horizontal" theme="dark" />
            </Col>
        </Row>
    )
}

export default NavBar;
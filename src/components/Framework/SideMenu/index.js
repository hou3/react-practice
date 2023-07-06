import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
    FileProtectOutlined, TeamOutlined, ContactsOutlined,
    PartitionOutlined, UngroupOutlined, SettingOutlined
} from '@ant-design/icons';

function SideMenu() {
    let [items, setItems] = useState([
        {
            label: '文章管理',
            key: "article",
            icon: <FileProtectOutlined />,
            children: [
                { label: <Link to="/article/release">发布文章</Link>, key: "/article/release" },
                { label: <Link to="/article/list">文章列表</Link>, key: "/article/list" },
            ],
        },
        { label: <Link to="/category/list">分类管理</Link>, icon: <PartitionOutlined />, key: "category" },
        {
            label: '用户管理',
            key: "user",
            icon: <TeamOutlined />,
            children: [
                { label: <Link to="/user/list">用户列表</Link>, key: "/user/list" },
            ],
        },
        {
            label: '管理员管理',
            key: "admin",
            icon: <ContactsOutlined />,
            children: [
                { label: <Link to="/admin/list">管理员列表</Link>, key: "/admin/list" },
            ],
        },
        {
            label: '权限管理',
            key: "auth",
            icon: <UngroupOutlined />,
            children: [
                { label: <Link to="/auth/list">权限角色</Link>, key: "/auth/list" },
            ],
        },
        {
            label: '权限管理',
            key: "settings",
            icon: <SettingOutlined />,
            children: [
                { label: <Link to="/admin/setting">账户设置</Link>, key: "/admin/setting" },
            ],
        },
    ]);
    return (
        <Menu items={items} defaultOpenKeys={['article']} mode="inline" theme="dark" />
    )
}

export default SideMenu;

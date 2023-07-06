import React from "react";
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import NavBar from "./NavBar/";
import SideMenu from "./SideMenu";

import { useSelector } from 'react-redux';

const { Header, Sider, Content } = Layout;

function Framework() {
    // 读取store中的state
    let isCollapsed = useSelector((state) => state.menu.isCollapsed);

    return (
        <Layout>
            <Header style={{ padding: '0 10px' }}>
                <NavBar />
            </Header>
            <Layout>
                <Sider collapsed={isCollapsed} style={{ minHeight: "calc( 100vh - 64px )" }}>
                    <SideMenu />
                </Sider>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default Framework;
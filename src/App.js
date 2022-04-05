import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { Layout, Menu, } from 'antd';
import { BulbTwoTone } from '@ant-design/icons'

import routes from './routes';
import ViewRouter from './ViewRouter';
import './App.css'

export default function AppLayout() {
  const [openKeys, setOpenKeys] = useState(['/animate']);
  const [selectedKeys, setSelectedKeys] = useState(['']);
  let location = useLocation();

  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location])

  const handleOpenChange = (route) => {
    if (openKeys.indexOf(route.path) >= 0) {
      setOpenKeys([])
    } else {
      setOpenKeys([route.path])
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }} className='container'>
      <Layout.Sider collapsed={false} width="260" style={{ background: '#fff' }}>
        <Menu theme="light" openKeys={openKeys} selectedKeys={selectedKeys} mode="inline">
          <Menu.Item key="jump-to" icon={<BulbTwoTone />}>
            <a href="https://juejin.cn/post/6844904031513477128" target="_blank" rel="noreferrer">
              神奇的CSS
            </a>
          </Menu.Item>
          {
            routes.map(route => {
              if (route.children && route.children.length > 0) {
                return (
                  <Menu.SubMenu key={'/animate'} title={route.title} icon={route.icon} onTitleClick={() => { handleOpenChange(route) }}>
                    {
                      route.children.map(child => {
                        return (
                          <Menu.Item key={child.path} onClick={() => { setSelectedKeys(child.path); }}>
                            <Link to={child.path}>{child.title}</Link>
                          </Menu.Item>
                        )
                      })
                    }
                  </Menu.SubMenu>
                )
              } else {
                return (
                  <Menu.Item key={route.path} icon={route.icon} onClick={() => { setSelectedKeys(route.path); setOpenKeys([]); }}>
                    {route.title}
                  </Menu.Item>
                )
              }
            })
          }
        </Menu>
      </Layout.Sider>
      <Layout className="site-layout">
        <Layout.Content>
          <ViewRouter />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
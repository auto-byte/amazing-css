
import React from 'react';
import {
    PlayCircleFilled,
    FileTextFilled,
    EyeFilled,
    AppstoreFilled,
    LayoutFilled,
} from '@ant-design/icons';

const Routes = [
    {
        title: '动画',
        path: '/animate',
        icon: <PlayCircleFilled />,
        children: [
            {
                path: '/reveal-text',
                title: 'Reveal Text'
            }, {
                path: '/stair-loading',
                title: 'Stair Loading'
            }, {
                path: '/wave-loading',
                title: 'Wave Loading'
            }, {
                path: '/shrinking-loading',
                title: 'Shrinking Loading'
            }, {
                path: '/gleaming-loading',
                title: 'Gleaming Loading'
            }, {
                path: '/particle-burst',
                title: 'Particle Burst'
            }, {
                path: '/gleaming-heading',
                title: 'Gleaming Heading'
            }, {
                path: '/snow',
                title: 'Snow'
            }, {
                path: '/rise-in-text',
                title: 'Rise In Text'
            }, {
                path: '/landin-text',
                title: 'Landin Text'
            }
        ]
    }, {
        title: '文本',
        path: '/text',
        icon: <FileTextFilled />,
        children: []
    }, {
        title: '视觉',
        path: '/visual',
        icon: <EyeFilled />,
        children: []
    }, {
        title: '页面',
        path: '/page',
        icon: <LayoutFilled />,
        children: []
    }, {
        title: '组件',
        path: '/component',
        icon: <AppstoreFilled />,
        children: []
    }
]

export default Routes;
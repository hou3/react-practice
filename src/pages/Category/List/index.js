import React from "react";
import { Card, Tree, Cascader } from "antd";
import './index.css';

function List() {

    const options = [
        {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
                {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                        {
                            value: 'xihu',
                            label: 'West Lake',
                        },
                    ],
                },
            ],
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
                {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                        },
                    ],
                },
            ],
        },
    ];
    const onChange = (value) => {
        console.log(value);
    };


    return (
        <Card>
            <Card title="分类列表">
                <Tree showLine />
            </Card>
            <Cascader options={options} onChange={onChange} placeholder="Please select" />
        </Card>
    )
}





export default List;
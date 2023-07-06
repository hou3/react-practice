import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Table, Image, Button, Space } from "antd";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Article } from '../../../api/';

function List() {
    let [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        // 加载文章列表
        let loadList = async () => {
            let { status, data } = await Article.list();
            if (status) {
                setDataSource(data);
            }
        }
        // 调用函数
        loadList();
    }, []);

    const columns = [
        {
            title: '#',
            dataIndex: 'article_id',
            key: 'article_id',
        },
        {
            title: '一级分类',
            dataIndex: 'cate_1st_name',
            key: 'cate_1st_name',
            width: 90,
        },
        {
            title: '二级分类',
            dataIndex: 'cate_2nd_name',
            key: 'cate_2nd_name',
            width: 90,
        },
        {
            title: '主图',
            dataIndex: 'main_photo',
            key: 'main_photo',
            render: (photo) => (<Image width={80} src={photo} />)
        },
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: '发布日期',
            dataIndex: 'create_time',
            key: 'create_time',
            width: 160,
        },
        {
            title: '更新日期',
            dataIndex: 'update_time',
            key: 'update_time',
            width: 160,
        },
        {
            title: '操作',
            key: 'article_id',
            dataIndex: 'article_id',
            render: (article_id, record, index) => {
                return (
                    <Space>
                        <Link to={`/article/edit/${article_id}`}>
                            <Button type="primary" icon={<EditOutlined />} >编辑</Button>
                        </Link>
                        <Button icon={<DeleteOutlined />} danger >删除</Button>
                    </Space>
                )
            }
        },
    ];

    return (
        <Card title="文章列表">
            <Table dataSource={dataSource} columns={columns} rowKey="article_id" />
        </Card>
    )
}

export default List;

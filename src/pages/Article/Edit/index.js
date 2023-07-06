import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Form, Input, Cascader } from "antd";
import { Article } from '../../../api/';

function Edit() {
    //获取路由参数
    let { article_id } = useParams();
    // 创建 Form 实例，用于管理所有数据状态。
    const [form] = Form.useForm();

    useEffect(() => {
        // 加载文章详情
        let loadDetail = async () => {
            let { status, data } = await Article.detail({ article_id });
            if (status) {
                // 还原表单
                form.setFieldsValue(data);
            }
        }

        loadDetail();
    }, [article_id]);

    return (
        <Card title="编辑文章">
            <Form form={form} labelCol={{ span: 2 }} wrapperCol={{ span: 22 }}>
                <Form.Item label="标题" name="title"
                    rules={[
                        { required: true, message: '请输入文章标题！' },
                        { type: 'string', min: 3, message: '文章标题至少3个字符！' }
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="描述" name="description"
                    rules={[
                        { required: true, message: '请输入文章描述！' },
                        { type: 'string', min: 2, message: '文章描述至少2个字符！' }
                    ]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item label="分类" name="category"
                    rules={[{ required: true, message: '请选择文章分类！' }]}>
                    <Cascader />
                </Form.Item>
                <Form.Item name="main_photo" label="主图"
                    rules={[{ required: true, message: '请选择上传一张文章主图！' }]}>
                    <p>主图上传</p>
                </Form.Item>
                <Form.Item label="内容" name="content" rules={[{ required: true, message: '请输入文章内容！' }]}>
                    <p>富文本编辑器</p>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 2, span: 22 }}>
                    <Button type="primary" htmlType="submit">
                        发布文章
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Edit;

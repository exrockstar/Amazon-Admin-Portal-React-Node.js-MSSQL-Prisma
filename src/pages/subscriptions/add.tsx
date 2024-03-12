// material-ui
  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
  import { Button, Checkbox, Form, type FormProps, Input, Col, Row, Card, Typography } from 'antd';
  const { Paragraph } = Typography;
  
  interface Subscription {
    subscriptionId: string,
    subscriptionTitle: string
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  export default function SamplePage () {
    
    const [tab, setTab] = useState('1');
    const [subscriptionsData, setSubscriptionsData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    //   axios
    //     .get('http://100.25.25.75:7000/Subscription')
    //     .then((res) => {
    //       let data = res.data.splice(0, 50);
    //       setSubscriptionsData(data);
    //     });
    }, []);
  
    const tabChange = (event: React.SyntheticEvent, newValue: string) => {
      setTab(newValue);
    };
  
    return (
    <>
        <Row style={{marginBottom: 30}}>
            <Typography.Title level={3} style={{ margin: 0 }}>
                Add Subscription
            </Typography.Title>
        </Row>
        
        <Card bordered={false} style={{borderRadius: 0}}>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Unique ID"
                    // rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Email ID"
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Capital for Inventory"
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Note"
                >
                    <Input />
                </Form.Item>

                <Form.Item style={{display: 'flex', justifyContent: 'center'}}>
                    <Button type="primary" htmlType="submit" style={{width: 150}}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
        
  
      </>
    )
  };
  
  
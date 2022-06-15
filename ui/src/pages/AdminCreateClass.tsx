import React from 'react';
import CreateForm from '../components/AddGroup/CreateClass';
import { Divider, Button, Form, Layout } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const { Content } = Layout;

function createGroup() {
  return (
    <body>
      <Divider
        orientation="center"
        style={{ fontSize: '26px', fontFamily: 'Roboto' }}
      >
        Create Group
      </Divider>
      <Content>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <CreateForm />
          <br></br>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Content>
    </body>
  );
}

export default createGroup;

import * as React from 'react'
import { Layout } from 'antd';
import '../antd.css';
import Task from './Task';
import Head from './Head';

const { Header, Content } = Layout;

function Page() {
  return (
    <Layout>
      <Header style={{ height: '47px', backgroundColor: '#add8f7', lineHeight: '47px' }}>
        <Head />
      </Header>
      <Content style={{ minHeight: '830px', backgroundColor: '#fff' }}>
        <Task />
      </Content>
    </Layout>
  );
}

export default Page;

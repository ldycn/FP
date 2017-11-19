import * as React from 'react'
import { Menu, Row, Col } from 'antd';
import '../antd.css';

const MenuItem = Menu.Item;

interface Props {
  selectMenu?: [string],
  name?: string,
}

function Page({ selectMenu = ['task'], name = 'ldy' }: Props) {
  const onSelect = (e: any) => {
    console.log(e);
  };

  const componyOnclick = () => {
    console.log('componyOnclick');
  };

  return (
    <Row>
      <Col span={12}>
        <span style={{ fontSize: '20px', cursor: 'pointer' }} onClick={componyOnclick}>四川精财信税务师事务所有限公司</span>
      </Col>
      <Col span={12}>
        <Menu
          selectedKeys={selectMenu}
          onSelect={onSelect} // onClick每次点击都会触发
          style={{ float: 'right', backgroundColor: '#add8f7' }}
          mode="horizontal"
        >
          <MenuItem key="dashboard">首页</MenuItem>
          <MenuItem key="task">任务</MenuItem>
          <MenuItem key="my">{name}</MenuItem>
        </Menu>
      </Col>
    </Row>
  );
}

export default Page;

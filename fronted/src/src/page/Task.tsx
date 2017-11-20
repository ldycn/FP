import React, { Component } from 'react'
import { Row , Table } from 'antd';
import { TableColumnConfig } from 'antd/lib/table/Table';
import Modal from '../component/task/Modal';
import DetailForm from '../component/task/DetailForm';
import '../antd.css';

interface IUser {
  key: number;
  taskName: string;
  clientName: string;
  leader: string;
  taskState: string;
  department: string;
  releaseTime: Date;
  completeTime: Date;
  onCellClick?: (e: any) => void;
  render?: (e: any) => void;
}

// interface Data {
//   key: number,
//   taskName: string,
//   clientName: string,
//   leader: string,
//   taskState: string,
//   department: string,
//   releaseTime: Date,
//   completeTime: Date,
// };
// interface columnAttributes {
//   dataIndex: number,
//   // onCellClick: (e: Data): void,
//   width : string,
//   key: string,
//   title: any, // TODO
// }

function makeTaskStateDisplay(state: string): any { // TODO 该返回什么
  switch (state) {
    case 'undo':
      return <span style={{ color: '#bfbfbf' }}>完成</span>;
    case 'onDo':
      return <span style={{ color: '#00a854' }}>进行中</span>;
    case 'delay':
      return <span style={{ color: '#f04134' }}>逾期</span>;
    case 'delayDone':
      return <span style={{ color: '#f56a00' }}>逾期完成</span>;
    default:
      console.error('taskStateNameError');
      return <span />;
  }
}

const columns: TableColumnConfig<IUser>[] = [{
  key: 'taskName',
  title: '任务名',
  dataIndex: 'taskName',
  width: '20%',
}, {
  key: 'clientName',
  title: '客户名',
  dataIndex: 'clientName',
  width: '17%',
}, {
  key: 'leader',
  title: '负责人',
  dataIndex: 'leader',
  width: '10%',
}, {
  key: 'taskState',
  title: '任务状态',
  dataIndex: 'taskState',
  width: '8%',
}, {
  key: 'department',
  title: '部门',
  dataIndex: 'department',
  width: '15%',
}, {
  key: 'releaseTime',
  title: '发布时间',
  dataIndex: 'releaseTime',
  width: '15%',
}, {
  key: 'completeTime',
  title: '完成时间',
  dataIndex: 'completeTime',
  width: '15%',
}];

const data: IUser[] = [{
  key: 0,
  taskName: 'Jack',
  clientName: 'Derek',
  leader: 'LDY',
  taskState: 'undo',
  department: '财务部',
  releaseTime: new Date(),
  completeTime: new Date(),
}, {
  key: 1,
  taskName: 'Derek',
  clientName: 'Jack',
  leader: 'LDY',
  taskState: 'onDo',
  department: '财务部',
  releaseTime: new Date(),
  completeTime: new Date(),
}, {
  key: 2,
  taskName: 'Derek',
  clientName: 'Jack',
  leader: 'LDY',
  taskState: 'delay',
  department: '财务部',
  releaseTime: new Date(),
  completeTime: new Date(),
}, {
  key: 3,
  taskName: 'Derek',
  clientName: 'Jack',
  leader: 'LDY',
  taskState: 'delayDone',
  department: '财务部',
  releaseTime: new Date(),
  completeTime: new Date(),
}];

class UserTable extends Table<IUser> {}
<UserTable columns={columns} dataSource={data} />

// 使用 JSX 风格的 API
class NameColumn extends Table.Column<IUser> {}

class Task extends Component { // TODO 现不用Component
  onCellClick = (e: any) => {
    console.log(e);
  }

  makeColumn = (column: TableColumnConfig<IUser>[]) => { // TODO 理解接口类型
    return column.map((v) => {
      const attributes = { // TODO 是否需要定义
        dataIndex: v.dataIndex,
        onCellClick: this.onCellClick,
        width : v.width,
        key: v.key,
        title: <span style={{ display: 'block', textAlign: 'center' }}>{v.title}</span>,
      };
      if (v.key === 'releaseTime' || v.key === 'completeTime') {
        return (<NameColumn
          render={(e: any) => (<span style={{ display: 'block', textAlign: 'center' }}>{e.toLocaleString()}</span>)}
          { ...attributes }
        />);
      }
      if (v.key === 'taskState') {
        return (<NameColumn
          render={(e: any) => (<span style={{ display: 'block', textAlign: 'center' }}>{makeTaskStateDisplay(e)}</span>)}
          { ...attributes }
        />);
      }
      return (<NameColumn
        render={(e: any) => (<span style={{ display: 'block', textAlign: 'center' }}>{e}</span>)}
        { ...attributes }
      />);
    });
  }

  render() {
    return (
      <Row style={{ margin: '32px' }}>
        <Modal>
          <DetailForm />
        </Modal>
        <UserTable dataSource={data}>
        {this.makeColumn(columns)}
        </UserTable>
      </Row>
    );
  }
}

export default Task;

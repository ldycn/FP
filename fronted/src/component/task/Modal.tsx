import * as React from 'react'
import { Modal, Button } from 'antd';
import '../../antd.css';

interface Props {
  visible?: boolean,
  title?: string,
  key?: string,
  loading?: boolean,
  children?: any, // TODO
  stepType?: string,
}

function TaskModal({ stepType = '', key = '', visible = true, title = '任务1', children = '', loading = false }: Props) {
  const confirm = () => {
    console.log('asfaf');
  }

  const cancel = () => {
    console.log('asfaf');
  }

  const footerNames = (() => {
    switch (stepType) {
      default:
        return ['取消', '确认'];
    }
  })();
  const stateDisplay = (() => {
    switch (stepType) {
      default:
        return { color: '#3db8c1', value: '审核中' };
    }
  })();
  return (
    <Modal
      width="900px"
      title={<div><span>{title}</span><span style={{ marginLeft: '8px', fontSize: '10px', color: stateDisplay.color }}> {stateDisplay.value}</span></div>}
      visible={visible}
      onCancel={cancel}
      footer={<div><Button onClick={cancel}>{footerNames[0]}</Button><Button onClick={confirm} type="primary">{footerNames[1]}</Button></div>}
    >
      {children}
    </Modal>
  );
}

export default TaskModal;

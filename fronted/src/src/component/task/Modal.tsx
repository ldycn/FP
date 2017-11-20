import * as React from 'react'
import { Modal } from 'antd';
import '../../antd.css';

interface Props {
  visible?: boolean,
  title?: string,
  loading?: boolean,
  children?: any, // TODO
}

function TaskModal({ visible = true, title = '任务1', children = '', loading = false }: Props) {
  const onOk = () => {
    console.log('asfaf');
  }
  const cancel = () => {
    console.log('asfaf');
  }
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onOk}
      confirmLoading={loading}
      onCancel={cancel}
      // footer={<Button type="primary">确定</Button>}
    >
      {children}
    </Modal>
  );
}

export default TaskModal;

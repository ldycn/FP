import * as React from 'react'
import { Input } from 'antd';
import '../../antd.css';

const { TextArea } = Input;

interface Props {
  name?: string,
  content?: string,
  type: string,
}

function AuditInformation({ type, name = '刘端宇', content = '任务1' }: Props) {
  if (type === 'back') {
    return (
      <div>
        <p style={{ marginLeft: '8px' }}>{name}： <span style={{ marginTop: '4px', color: '#f46e65', fontSize: '10px' }}> 退回</span></p>
          <TextArea style={{ marginTop: '4px', marginBottom: '12px' }}>
            asfasf
          </TextArea>
      </div>
    );
  } else {
    return (
      <div>
        <p style={{ marginLeft: '8px' }}>{name}： <span style={{ marginTop: '4px', color: '#3dbd7d', fontSize: '10px' }}> 通过</span></p>
          <TextArea style={{ marginTop: '4px', marginBottom: '12px' }}>
            asfasf
          </TextArea>
      </div>
    );
  }
}

export default AuditInformation;

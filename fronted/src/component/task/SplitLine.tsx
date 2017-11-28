import * as React from 'react'

interface Props {
  name?: string,
}

export default function SplitLine({ name = 'ldy' }: Props) {
  return (
    <div>
      <strong style={{ fontSize: '12px' }}>{name}：</strong>
      <div style={{ marginTop: '4px', marginBottom: '16px', border: '1px solid #d9d9d9', width: '20%' }} />
    </div>
  );
}

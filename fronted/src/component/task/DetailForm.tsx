import * as React from 'react'
import { Form, Input, Row, Col } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import '../../antd.css';

const Item = Form.Item;
interface UserFormProps extends FormComponentProps {
  age?: number;
  name?: string;
}

const formItemLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 17 },
};

function makeFormCol(labelName: string): any {
  return (
    <Col span={8}>
      <Item {...formItemLayout} label={labelName}>
        <Input style={{ width: '80%' }} />
      </Item>
    </Col>
  );
}
class UserForm extends React.Component<UserFormProps, any> {
  render() {
    const basicDetailLabels = ['任务名', '项目经理', '参与员工', '公司名', '公司信息', '项目总金额', '截止时间', '项目提成', '备注', '下步执行人'];
    return (
      <Form>
        <Row>
          {basicDetailLabels.map(v => makeFormCol(v))}
        </Row>
      </Form>
    )
  }
}

const WrappedDemo = Form.create()(UserForm);


// export default UserForm;
export default function DetailForm() {
  return (
    <WrappedDemo />
  )
}

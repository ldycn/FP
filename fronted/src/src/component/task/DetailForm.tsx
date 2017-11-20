import * as React from 'react'
import { Form, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import '../../antd.css';

const FormItem = Form.Item;

interface UserFormProps extends FormComponentProps {
  age: number;
  name: string;
}

class UserForm extends React.Component<UserFormProps, any> {}
function DetailForm() {
  return (
    <UserForm age={12} name="sfasf" form={<Input />}>
      <FormItem>
      <Input />
      </FormItem>
      <FormItem>
        <Input />
      </FormItem>
      <FormItem>
        <Input />
      </FormItem>
    </UserForm>
  );
}

export default DetailForm;

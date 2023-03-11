import React, {useState, useEffect} from 'react'
import { Button, Col, Form, Input, Modal, Row } from 'antd';
import "./Modal.scss";  
const EditModal = ({loading, handleCancel, isModalOpen, onFinish, values}) => {
   
const [initialValue, setInitialValue] = useState({
  name:'',
  email:'',
  phone:'',
  website:''
})  

const [form] = Form.useForm(); 
 useEffect(() => {
  form.setFieldsValue(values)
  form.resetFields();
 
}, [form, values])
useEffect(() => { 
  setInitialValue(values)
}, [values]);

  console.log(initialValue);
  return (
    <Modal title={'Basic Modal'} open={isModalOpen}  onCancel={handleCancel}
    style={{padding:0}} maskStyle={{padding:0}}
    footer={[
      <Button   key="back" onClick={handleCancel}>
        Cancel
      </Button>,
      <Button form="myForm" key="submit" type='primary' htmlType="submit">
        Submit
      </Button> 
    ]}
    >
        <Form
          form={form}
          initialValues={initialValue}
          id='myForm'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
           >
            {console.log(initialValue)}
             <Form.Item 
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter Name' }]}
                ><Input   name="name"  placeholder='Enter your Name'/>
            </Form.Item>
            <Form.Item 
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please enter Email' }]}
                ><Input   name="email"  placeholder='Enter your Email'/>
            </Form.Item>
            <Form.Item 
                label="Phone"
                name="phone"
                rules={[{ required: true, message: 'Please enter Phone' }]}
                ><Input  placeholder='Enter your Phone'/>
            </Form.Item>
            <Form.Item 
                label="Website"
                name="website"
                rules={[{ required: true, message: 'Please enter Website' }]}
                ><Input  placeholder='Enter your Website'/>
            </Form.Item> 

        </Form>
    </Modal>
  )
}

export default EditModal
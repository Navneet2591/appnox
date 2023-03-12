import React, {useEffect} from 'react'
import { Button,  Form, Input, Modal, } from 'antd';
import "./Modal.scss";  
const EditModal = ({  handleCancel, isModalOpen, onFinish, values}) => {
    
const [form] = Form.useForm(); 
 useEffect(() => {
  form.setFieldsValue(values)
  form.resetFields();
 
}, [form, values])  

  return (
    <Modal forceRender title={'Basic Modal'} open={isModalOpen}  onCancel={handleCancel}
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
          initialValues={values}
          id='myForm'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
           > 
             <Form.Item 
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter Name' }]}
                ><Input   name="name"  placeholder='Enter your Name'/>
            </Form.Item>
            <Form.Item 
                label="Email"
                name="email"
                rules={[{
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please Enter your E-mail!',
                },]}
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
import React from 'react'
import { DeleteOutlined, EditOutlined, EllipsisOutlined, GlobalOutlined, HeartOutlined, MailOutlined, PhoneOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Button, Card } from 'antd';
import "./Card.scss"; 
const { Meta } = Card;
const SingleCard = ({user, handleDeleteUser, handleEdit}) => {
   const {id, name, email, phone, website} = user; 
    return (
        <>
            <Card  
                headStyle={{backgroundColor:'#f6f6f6'}}
                style={{ color:'#000000a6', margin:15, borderRadius:3,}}
                cover={
                    <img
                     width={200}
                     height={200}
                        alt="example"
                        src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy`}
                    />
                }
                actions={[
                    <button className='icon_btn' ><HeartOutlined key="heart" style={{fontSize:18, color:'red'}} /></button>, 
                    <button className='icon_btn' onClick={handleEdit}><EditOutlined key="edit"  style={{fontSize:18, color:'blue'}}/></button> ,
                    <button className='icon_btn' onClick={handleDeleteUser}><DeleteOutlined key="ellipsis" style={{fontSize:18, color:'red'}} /></button> ,
                ]}
                 >
                <h3 className='mb-0'>{name && name }</h3>
               <div className='card_info'> <MailOutlined  style={{fontSize:18, color:'#000000a6'}}/> {email && email}</div>
               <div className='card_info'> <PhoneOutlined style={{fontSize:18, color:'#000000a6'}}/>{phone && phone}</div>
               <div className='card_info'> <GlobalOutlined style={{fontSize:18, color:'#000000a6'}}/> https://{website && website}</div>
            </Card>
        </>
    )
}

export default SingleCard
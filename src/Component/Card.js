import React from 'react'
import { DeleteOutlined, EditOutlined, GlobalOutlined, HeartFilled, HeartOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import {  Card } from 'antd';
import "./Card.scss";  
const SingleCard = ({user, handleDeleteUser, handleEdit, handleWishlist}) => {
   const {name, username, wishlist,  email, phone, website} = user; 
   
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
                        src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
                    />
                }
                actions={[
                    <button className='icon_btn'onClick={handleWishlist} >{wishlist ?<HeartFilled key="heart" style={{fontSize:18, color:'red'}} /> :<HeartOutlined key="heart" style={{fontSize:18, color:'red'}} />}</button>, 
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
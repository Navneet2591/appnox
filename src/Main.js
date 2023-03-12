import React, { useState, useEffect } from 'react'
import { Col, Row } from 'antd'
import SingleCard from './Component/Card'
import axios from 'axios'
import EditModal from './Component/EditModal'

const Main = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [values, setValues] = useState(null);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    function fetchData(url) {
      let getData = axios.get(url);
      getData.then((res) => {
        let apiData = [...res.data];
        let data = apiData.map((obj)=>{return{...obj, wishlist:false}}); 
        setData(data);
        setLoading(false)
      }).catch((err) => {
        
        setError(err); 
        setLoading(false)
      })
    }
    fetchData(url);
  }, []);

  const handleDeleteUser = (index) => {
    let newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }
  const handleEdit = (i) => {
    console.log(data[i]);
    setValues(data[i]);
    setIsModalOpen(true)
  }

  const onFinish = (value) => {
    let newData = [...data];
    let updatedValue = { ...values, ...value };
    let index = newData.findIndex((el) => el.id === updatedValue.id);
    newData[index] = updatedValue;
    setData(newData);
    setIsModalOpen(false);
    setValues(null);
  }

  const handleCancel = ()=>{
    setIsModalOpen(false); 
    setValues({})
  } 
  const handleWishlist = (i)=>{
    let newData = [...data];
    newData[i].wishlist = !newData[i].wishlist;
    setData(newData);
  }

  return (
    <>
      {loading && <div className="spinner"></div>}
      {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}
      {!loading  && !error && <Row>
        {
          data && data.map((user, index) => {
            return (
              <Col xs={24} sm={24} md={12} lg={8} xl={6} key={user.id}><SingleCard user={user} handleDeleteUser={() => { handleDeleteUser(index) }} handleEdit={() => { handleEdit(index) }}
              handleWishlist={()=>{handleWishlist(index)}}
              /></Col>
            )
          })
        }
      </Row>}
      <EditModal  values={values && values} isModalOpen={isModalOpen} handleCancel={handleCancel} onFinish={onFinish}  />
    </>
  )
}

export default Main
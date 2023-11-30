import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Table } from 'antd'

const Home = () => {

  const [showModel, setShowModel] = useState(false);

  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const [loading, setLoading] = useState(false);

  const [allTransection, setAllTransection] = useState([]);

  
  const columns = [
    {
      title:'Date',
      dataIndex:'date'
    },
    {
      title:'Amount',
      dataIndex:'amount'
    },
    {
      title:'Type',
      dataIndex:'type'
    },
    {
      title:'Category',
      dataIndex:'category'
    },
    {
      title:'Refrence',
      dataIndex:'refrence'
    },
    {
      title:'Action',
      dataIndex:'date'
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/v1/add-transection', {
        amount, type, category, date, description, userid: user.user._id
      });
      setLoading(false)
      setShowModel(false)
    } catch (error) {
      console.log(error)
    }
  }

  //get all transection
  const getAllTransection = async (e) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      setLoading(true)
      const response = await axios.post('http://localhost:5000/api/v1/get-transection', {
        userid: user.user._id
      });
      setLoading(false)
      setAllTransection(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllTransection();
  }, []);

  return (
    <>
      <Layout>
        {loading && <Spinner />}
        <div className='filters'>
          <div>range filters</div>
          <div>
            <button onClick={() => setShowModel(!showModel)} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Add New
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add New Income/Expense</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" className='cross'>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div className='container'>
                      <form onSubmit={handleSubmit}>

                        <input
                          type='number'
                          placeholder='Enter The Amount'
                          className='px-2 form-control'
                          onChange={e => setAmount(e.target.value)}
                        /><br />

                        <select class="form-select" aria-label="Default select example"
                          onChange={e => setType(e.target.value)}
                        >
                          <option selected>Type</option>
                          <option value="income">Income</option>
                          <option value="expense">Expense</option>
                        </select><br />

                        <input
                          type='text'
                          placeholder='Type a Category'
                          className='form-control'
                          onChange={e => setCategory(e.target.value)}
                        /><br />

                        <input
                          type='date'
                          placeholder='Enetr The Date'
                          className='form-control'
                          onChange={e => setDate(e.target.value)}
                        /><br />

                        <input
                          type='text'
                          placeholder='Enetr The Refrence'
                          className='form-control'
                        /><br />

                        <input
                          type='text'
                          placeholder='Enetr The Description'
                          className='form-control'
                          onChange={e => setDescription(e.target.value)}
                        /><br />

                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="submit" class="btn btn-primary">Add</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='content'>
          <Table columns={columns} dataSource={allTransection}/>
        </div>
      </Layout>
    </>
  )
}

export default Home
import React, { useState, useEffect } from 'react'
import { Table, Button, Space, Tag, Divider  } from 'antd'
import ReactHtmlParser from 'react-html-parser'
import { useSelector, useDispatch } from 'react-redux'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

// const data = [
//     {"id":1,
//   "projectName":"ng Khoa",
//   "description":"<p>react create cyberbugs</p>",
//   "categoryId": 1,
//   "alias":"newproject12345",
//   "deleted":false},
//     {"id":2,
//   "projectName":"ng Khoa",
//   "description":"<p>react create cyberbugs</p>",
//   "categoryId": 1,
//   "alias":"newproject12345",
//   "deleted":false},
//     {"id":3,
//   "projectName":"ng Khoa",
//   "description":"<p>react create cyberbugs</p>",
//   "categoryId": 1,
//   "alias":"newproject12345",
//   "deleted":false},
//     {"id":4,
//   "projectName":"ng Khoa",
//   "description":"<p>react create cyberbugs</p>",
//   "categoryId": 1,
//   "alias":"newproject12345",
//   "deleted":false},
//     {"id":5,
//   "projectName":"ng Khoa",
//   "description":"<p>react create cyberbugs</p>",
//   "categoryId": 1,
//   "alias":"newproject12345",
//   "deleted":false},

// ];
export default function ProjectManagement(props) {
  // Lấy dữ liệu từ reducer từ component
  const projectList = useSelector(
    (state) => state.ProjectCyberBugsReducer.projectList,
  )
  // sử dụng useDispatch để gọi action
  const dispatch = useDispatch()
  const [state, setState] = useState({
    filteredInfo: null,
    sortedInfo: null,
  })
  useEffect(() => {
    dispatch({ type: 'GET_LIST_PROJECT_SAGA' })
  }, [])

  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter)
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    })
  }
  const clearFilters = () => {
    setState({ filteredInfo: null })
  }
  const clearAll = () => {
    setState({
      filteredInfo: null,
      sortedInfo: null,
    })
  }

  const setAgeSort = () => {
    setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    })
  }

  let { sortedInfo, filteredInfo } = state
  sortedInfo = sortedInfo || {}
  filteredInfo = filteredInfo || {}
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      // filters: [
      //   { text: 'Joe', value: 'Joe' },
      //   { text: 'Jim', value: 'Jim' },
      // ],
      // filteredValue: filteredInfo.name || null,
      // onFilter: (value, record) => record.name.includes(value),
      // sorter: (a, b) => a.name.length - b.name.length,
      // sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      // ellipsis: true,
    },

    {
      title: 'projectName',
      dataIndex: 'projectName',
      key: 'projectName',
    },

    /**{
      title: 'description',
      dataIndex: 'description',
      key: 'description',
      // sorter: (a, b) => a.age - b.age,
      // sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
      // ellipsis: true,
      render:(text, record, index) =>{
        let jsxContent = ReactHtmlParser(text);
        return <div key={index}>
          {jsxContent}
        </div>
        // console.log('text', text);
        // console.log('record', record;
        // console.log('index', index);
        
      }**/
    

    {
      title: 'category',
      dataIndex: 'categoryName',
      key: 'categoryName',
    },
    {
      title: 'creator',
      // dataIndex: 'creator',

      key: 'creator',
      render:(text, record, index)=>{


        // console.log('text', text);
        return <Tag color="green">{record.creator?.name}</Tag>
      }
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>
            <EditOutlined />
          </a>
          <a>
            <DeleteOutlined />
          </a>
        </Space>
      ),
    },
  ]
  return (
    <div className="container-fluid mt-5">
      <h3>Project Management</h3>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table
        columns={columns}
        rowKey={'id'}
        dataSource={projectList}
        onChange={handleChange}
      />
    </div>
  )
}

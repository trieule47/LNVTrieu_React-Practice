import React from 'react'
import { List, Card, Col, Row, Avatar } from 'antd';
import { Space, Table, Tag } from 'antd';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'City',
    key: 'city',
    dataIndex: 'city',
  },
  {
    title: 'State',
    key: 'state',
    dataIndex: 'state.name',
    
  },
  {
    title: 'Order total',
    key: 'orders',
    dataIndex: 'orders',
    render: (_, { orders }) => {
        
        let total=0 ;
        orders.map(e => {total +=e.itemCost})
        return (
            <div>{total}</div>
        );
        }
    
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'id',
    render: (_, { id }) => {
        return (<a href="#">Order View</a>)
    }
  },
];

const App = (props) => <Table columns={columns} dataSource={props.data} />;

export default App;
// export default function ListView(props) {
//     return (
//         <List
//             grid={{
//                 gutter: 16,
//                 xs: 1,
//                 sm: 1,
//                 md: 1,
//                 lg: 1,
//                 xl: 1,
//                 xxl: 1,
//             }}
//             itemLayout='vertical'
//             pagination={{
//                 showSizeChanger: true,
//                 position: "bottom"
//             }}
//             header={
//                 <div>
//                     <List.Item.Meta
//                         avatar={<Avatar />}
//                         title={<a href="https://ant.design">firstName</a>}
//                         description="Ant Design, a design language for background applications, is refined by Ant UED Team"
//                     />
//                     <div>content</div>
//                 </div>
//             }
//             dataSource={props.data}
//             renderItem={(item) => (
//                 <List.Item actions={[<a key="view_order">View order</a>]}>
//                     <Row gutter={16} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
//                         <Avatar></Avatar>
//                             <div>
//                                 <p>{item.city}</p>
//                                 <p>{item.state.name}</p>
//                             </div>
                       
//                     </Row>
//                 </List.Item>

//             )}
//         />
//     )
// }

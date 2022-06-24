import React from 'react'
import { List, Card, Col,Row } from 'antd';

export default function CardView(props) {
    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 2,
                lg: 2,
                xl: 2,
                xxl: 2,
            }}
            pagination={{
                showSizeChanger: true,
                position: "bottom"
            }}
            dataSource={props.data}
            renderItem={(item) => (
                <List.Item>
                    <Row  gutter={16} style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <Card title={item.firstName + ' ' + item.lastName} extra={<a href="#">More</a>} style={{ minWidth:300, maxWidth: 400}}>
                            image
                            <div> 
                            <p>{item.city}</p>
                            <p>{item.state.name}</p>
                            </div>
                        </Card>
                    </Row>
                </List.Item>

            )}
        />
    )
}

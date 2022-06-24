import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TabsScreen from '../../components/TabsScreen';
import { IsLogin } from '../../utils/CheckLogin';

const { Header, Footer, Sider, Content } = Layout;

export default function Customers() {
    const [customers, setCustomers] = useState('');
    const navigate = useNavigate();
    const items = [
        { label: 'Custumers manage', key: 'item-0', onClick: () => navigate('/') },
        { label: 'Home', key: 'item-1', onClick: () => navigate('/') }, // remember to pass the key prop
        { label: 'Login', key: 'item-2', onClick: () => navigate('/login') }, // which is required
    ];

    useEffect(() => { handleCallProducts() }, []);

    const handleCallProducts = async () => {
        const url = 'http://localhost:3000/api/customers';
        const responce = await axios.get(url);
        setCustomers(responce.data);
    }

    return (
        <div>
            <Layout>
                <Header><Menu items={items} mode="horizontal" /></Header>
                <Content><TabsScreen data={customers}/></Content>
            </Layout>
        </div>
    )
}

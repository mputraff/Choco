import { useState } from 'react';
import { AppstoreOutlined, MailOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
    {
        label: 'Navigation One',
        key: 'mail',
        icon: <MailOutlined />,
    },
    {
        label: 'Navigation Two',
        key: 'app',
        icon: <AppstoreOutlined />,
        disabled: true,
    },
    {
        icon: "Data ",
        label: <CaretDownOutlined />,
        key: 'SubMenu',
        children: [
            {
                type: 'group',
                children: [
                    {
                        label: 'Data Kehamilan',
                        key: 'setting:1',
                    },
                    {
                        label: 'Data Bayi',
                        key: 'setting:2',
                    },
                    {
                        label: 'Data Antropometri',
                        key: 'setting:3',
                    },
                ],
            },
        ],
    },
    {
        key: 'alipay',
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        ),
    },
];
export default function NavbarTes() {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <>
            
                <Menu onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items.slice(0, 2)}
                    className="bg-slate-200"
                />
      
        </>
    )
}

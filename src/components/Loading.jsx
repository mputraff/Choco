import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
export default function Loading() {
    return (
        <Flex align="center" gap="middle">
            <Spin
                indicator={
                    <LoadingOutlined
                        style={{
                            fontSize: 48,
                            color: '#03346E',
                        }}
                        spin
                    />
                }
            />
        </Flex>
    )
}
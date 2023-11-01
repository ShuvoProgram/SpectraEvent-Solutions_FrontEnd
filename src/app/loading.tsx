import React from 'react';
import { Space } from 'antd';
import Spinner from '@/components/Loading/Spinner';

const Loading = () => {
  return (
  <Space direction="vertical" style={{ width: '100%', marginTop: '300px' }}>
      <Spinner/>
  </Space>
  )
}

export default Loading;
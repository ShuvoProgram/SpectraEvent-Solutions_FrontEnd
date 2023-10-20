import React from 'react';
import { Space, Spin } from 'antd';

const Loading = () => {
  return (
  <Space direction="vertical" style={{ width: '100%', marginTop: '300px' }}>
      <Spin size="large">
        <div className="content" />
      </Spin>
  </Space>
  )
}

export default Loading;
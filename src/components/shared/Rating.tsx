import React from 'react'
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate } from 'antd';

const customIcons: Record<number, React.ReactNode> = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

export const RatingValue = () => {
  return (
    <div>
         <Rate defaultValue={3} character={({ index }: { index: number }) 
         => customIcons[index + 1]} />
    </div>
  )
}

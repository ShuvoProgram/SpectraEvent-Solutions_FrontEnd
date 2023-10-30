import {
  HeartOutlined
} from '@ant-design/icons';
import { Badge, Space } from 'antd'

const Favorite = ({setCartOpen, cartOpen, count}: any) => {
  return (
    <div onClick={()=> setCartOpen(!!cartOpen)} className='flex items-center justify-center cursor-pointer'>
      <Space size='middle' className='flex justify-center items-center mt-2'>
        <Badge count={count || 0}>
          <button className='flex items-center text-[#8b827d] hover:text-black'>
            <li className='flex items-center'>
              <HeartOutlined className='text-2xl' />{' '}
            </li>
          </button>
        </Badge>
      </Space>
    </div>
  )
}

export default Favorite;

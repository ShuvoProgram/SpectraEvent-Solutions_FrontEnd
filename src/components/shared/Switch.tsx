import React from 'react'
// import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function SwitchTheme() {
  return (
    <div>
        <Switch
      checkedChildren={<HiOutlineMoon className="h-6 w-6 text-sky-500"/>}
      unCheckedChildren={<HiOutlineSun className="h-6 w-6 text-orange-500"/>}
      defaultChecked
    />
    </div>
  )
}

export default SwitchTheme;
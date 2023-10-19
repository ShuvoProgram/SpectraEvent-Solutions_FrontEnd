import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Space, Button, Tooltip } from 'antd';

interface IAvatarTeam {
  name: string;
  teamImg: string;
}

function AvatarTeam({name, teamImg}: IAvatarTeam) {
  const text = <span>prompt text</span>;
  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
    >
    <Tooltip placement="right" title={name} color={'orange'}>
        <Avatar size="large" src={teamImg} />
      </Tooltip>
    </div>
    
  )
}

export default AvatarTeam
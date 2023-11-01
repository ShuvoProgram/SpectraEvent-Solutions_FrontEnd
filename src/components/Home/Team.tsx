import { Col, Row } from 'antd'
import React from 'react'
import AvatarTeam from '../shared/AvatarTeam'
import Image from 'next/image'
import TeamCard from '../shared/TeamCard'
import SectionTitle from '../shared/SectionTitle'


function Team() {
    return (
        <section>
            <div className="bg-gray-100 h-screen">
                <div className="py-10 max-w-screen-lg mx-auto">
                   <SectionTitle title='Our Team'/>
                    <div className="grid grid-cols-3 gap-10">
                        <TeamCard name='Shuvo' position='Manager' img='https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500'/>
                        <TeamCard name='Shuvo' position='Manager' img='https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500'/>
                        <TeamCard name='Shuvo' position='Manager' img='https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500'/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Team;
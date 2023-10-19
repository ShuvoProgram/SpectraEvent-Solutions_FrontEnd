import { Col, Row } from 'antd'
import React from 'react'
import AvatarTeam from '../shared/AvatarTeam'
import Image from 'next/image'
import TeamCard from '../shared/TeamCard'


function Team() {
    return (
        <section>
            <div className="bg-gray-100 h-screen">
                <div className="py-10 max-w-screen-lg mx-auto">
                    <div className="text-center mb-16">
                        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
                            THE TEAM
                        </p>
                        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                            Our<span className="text-indigo-600"> Team</span>
                        </h3>
                    </div>
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
import { Col, Row } from 'antd'
import React from 'react'
import AvatarTeam from '../shared/AvatarTeam'


function Team() {
    return (
        <section>
            <Row>
                <Col span={14}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                }}
                >
                    <div className="circle-orbit-container">

                        {/* <!-- Circles closest to the central point --> */}
                        <div className="inner-orbit">
                            <div className="inner-orbit-cirlces">
                                <AvatarTeam teamImg={`https://i.ibb.co/DbjJk0k/1517034956958.jpg`} name='john'/>
                            </div>
                        </div>

                        {/* <!-- Circles second closest to the central point --> */}
                        <div className="middle-orbit">
                            <div className="middle-orbit-cirlces">
                            <AvatarTeam teamImg={`https://i.ibb.co/DbjJk0k/1517034956958.jpg`} name='john'/>
                            </div>
                        </div>

                        {/* <!-- Circles furthest away to the central point --> */}
                        <div className="outer-orbit">
                            <div className="outer-orbit-cirlces">
                            <AvatarTeam teamImg={`https://i.ibb.co/DbjJk0k/1517034956958.jpg`} name='john'/>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        <h1>Meet Out Team</h1>
                        <AvatarTeam teamImg={`https://i.ibb.co/DbjJk0k/1517034956958.jpg`} name='john'/>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Team
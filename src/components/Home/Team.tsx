import { Col, Row } from 'antd'
import React from 'react'

function Team() {
    return (
        <section>
            <div className='mx-auto'>

            </div>

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
                            <div className="inner-orbit-cirlces">text</div>
                        </div>

                        {/* <!-- Circles second closest to the central point --> */}
                        <div className="middle-orbit">
                            <div className="middle-orbit-cirlces">text</div>
                        </div>

                        {/* <!-- Circles furthest away to the central point --> */}
                        <div className="outer-orbit">
                            <div className="outer-orbit-cirlces"></div>
                        </div>

                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        <h1>Meet Out Team</h1>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Team
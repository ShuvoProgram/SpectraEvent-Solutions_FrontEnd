"use client"
import { useGetAllCategoryQuery } from '@/redux/api/categoryApi'
import React, { useState } from 'react'
import BreadCrumb from '../shared/BreadCrumb';
import Spinner from '../Loading/Spinner';
import { Empty, Radio, RadioChangeEvent, Space, Tabs } from 'antd';
import CategoryTabsData from './CategoryTabsData';
import { TabsPosition } from 'antd/es/tabs';

function CategoryPage() {
    const [tabPosition, setTabPosition] = useState<TabsPosition>('left');

    const changeTabPosition = (e: RadioChangeEvent) => {
        setTabPosition(e.target.value);
      };


    const {data, isLoading, isError} = useGetAllCategoryQuery({});
    if(isLoading) {
        return <Spinner/>
    }
    const categoryData = data?.Category;

  return (
    <div className='container my-10'>
        <div
         style={{
            width: "100%",
            margin: "20px 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <h1
            style={{
                color: "#FF5B22",
                fontSize: "40px",
                fontFamily: "serif",
                fontWeight: "bold",
              }}
            >Event Category</h1>
            <BreadCrumb
              items={[
                {
                    label: "Category",
                    link: "/category",
                },
            ]}
            />
             <div className='m-5 pt-3 w-full h-full my-10 '>
             <Space style={{ marginBottom: 24 }}>
        Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
        </Radio.Group>
      </Space>
        <Tabs tabPosition={tabPosition}>
            {
                categoryData?.map((item, index) => {
                    return (
                        <Tabs.TabPane tab={item.name} key={index}>
                            <CategoryTabsData data={item}/>
                        </Tabs.TabPane>
                    )
                })
            }
        </Tabs>
      </div>
        </div>
    </div>
  )
}

export default CategoryPage
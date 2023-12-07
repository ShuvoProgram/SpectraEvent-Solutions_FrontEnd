import { Card, Skeleton, Typography } from 'antd';
import React from 'react';
import CountUp from 'react-countup';
import styles from './statCard.module.css';

const { Text } = Typography;

interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    number: number;
    loading: boolean;
    link?: string;
    isCard?: boolean;
  }

function stateCard(
    {
        icon,
        title,
        number,
        link,
        loading = false,
        isCard = true,
      }: StatCardProps
) {

    const children = (
        <div style={{ cursor: link ? 'pointer' : 'default' }}>
          <span className={`${styles.iconWrapper} text-primary text-opacity-80`}>
            {icon}
          </span>
          <div className={styles.statContent}>
            <p className={styles.statTitle}>
              <Text
                style={{ width: '100%', color: 'grey' }}
                ellipsis={{ tooltip: title || '' }}
              >
                {title || ''}
              </Text>
            </p>
            <p className={styles.statNumber}>
              {loading ? (
                <Skeleton paragraph={{ rows: 1 }} title={false} className="mt-4" />
              ) : (
                <CountUp
                  start={0}
                  end={number}
                  duration={4}
                  useEasing
                  useGrouping
                />
              )}
            </p>
          </div>
        </div>
      );
  return (
    <>
     {isCard ? (
        <Card
        //   onClick={() => {
        //     if (link) {
        //       navigate(link);
        //     }
        //   }}
          size="default"
          bordered={false}
          style={{ padding: '18px 0' }}
        >
          {children}
        </Card>
      ) : (
        children
      )}
    </>
  )
}

export default stateCard
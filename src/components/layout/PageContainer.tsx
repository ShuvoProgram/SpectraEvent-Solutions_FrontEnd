import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Breadcrumb, Spin } from 'antd';
import type { BreadcrumbProps } from 'antd/es/breadcrumb/Breadcrumb';
import CONFIG from '../../../config';
import Spinner from '../Loading/Spinner';
import useBreakpoint from '@/hooks/useWindowSize';

export interface BasePageContainerProps {
  title?: string;
  subTitle?: string;
  breadcrumb?: Partial<BreadcrumbProps> | React.ReactElement<typeof Breadcrumb>;
  extra?: React.ReactNode;
  loading?: boolean;
  children: React.ReactNode;
  transparent?: boolean;
}

const BasePageContainer = (props: BasePageContainerProps) => {
  const isMobile = useBreakpoint();

  return (
    <PageContainer
      header={{
        title: props.title,
        breadcrumb: CONFIG.theme.showBreadcrumb ? props.breadcrumb : undefined,
        extra: props.extra,
      }}
      childrenContentStyle={isMobile ? { paddingInline: 15 } : {}}
      subTitle={props.subTitle}
    >
      <ProCard
        className={`mb-10 ${!props.transparent ? 'shadow-lg' : ''}`}
        size="small"
        style={{ minHeight: 500 }}
        ghost={props.transparent}
        loading={
          props.loading ? (
            <Spinner />
          ) : (
            false
          )
        }
      >
        {props.children}
      </ProCard>
    </PageContainer>
  );
};

export default BasePageContainer;

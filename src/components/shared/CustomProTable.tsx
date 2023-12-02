import { ProTable } from '@ant-design/pro-components';
import React, { ReactNode } from 'react';

interface ProTableProps {
  columns: any[]; // Replace 'any[]' with the specific type for your columns
  cardBordered?: boolean;
  cardProps?: {
    subTitle: string;
    tooltip: {
      className: string;
      title: string;
    };
    title: ReactNode;
  };
  bordered?: boolean;
  showSorterTooltip?: boolean;
  scroll?: {
    x?: string | number | true | undefined;
    y?: string | number | undefined;
    scrollToFirstRowOnChange?: boolean;
  } | undefined;
  tableLayout?: 'fixed' | 'auto';
  rowSelection?: boolean;
  pagination?: {
    showQuickJumper: boolean;
    pageSize: number;
  };
  actionRef?: React.MutableRefObject<any> | ((actionRef: any) => void) | null;
  dataSource?: any[]; // Replace 'any[]' with the specific type for your data source
  dateFormatter?: 'string' | 'number'; // Add more options if needed
  search?: boolean;
  rowKey?: string;
  options?: {
    search: boolean;
    // Add more options as needed
  };
}

const CustomProTable: React.FC<ProTableProps> = (props) => {
  // Implement the ProTable component here using the received props
  const { scroll, ...otherProps } = props;
  const formattedScroll = scroll?.x ? { x: scroll.x } : undefined;
  return (
    <ProTable
      columns={props.columns}
      cardBordered={props.cardBordered}
      cardProps={props.cardProps}
      bordered={props.bordered}
      showSorterTooltip={props.showSorterTooltip}
      scroll={formattedScroll}
      tableLayout={props.tableLayout}
      rowSelection={props.rowSelection}
      pagination={props.pagination}
      actionRef={props.actionRef}
      dataSource={props.dataSource}
      dateFormatter={props.dateFormatter}
      search={props.search}
      rowKey={props.rowKey}
      options={props.options}
    />
  );
};

export default CustomProTable;

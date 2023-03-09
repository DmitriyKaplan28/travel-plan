import { Dayjs } from 'dayjs';

import React from 'react';

import { Badge, BadgeProps, Calendar } from 'antd';

type listDataType = listItemType[];

type listItemType = {
  type: string;
  content: string;
};

type getMonthDataType = number | undefined;

const getListData = (value: Dayjs): listDataType => {
  let listData;

  switch (value.date()) {
    // eslint-disable-next-line no-magic-numbers
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    // eslint-disable-next-line no-magic-numbers
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    // eslint-disable-next-line no-magic-numbers
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }

  return listData || [];
};

const getMonthData = (value: Dayjs): getMonthDataType => {
  // eslint-disable-next-line no-magic-numbers
  if (value.month() === 8) {
    // eslint-disable-next-line no-magic-numbers
    return 1394;
  }
};

export const CustomCalendar: React.FC = () => {
  const monthCellRender = (value: Dayjs): any => {
    const num = getMonthData(value);

    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs): any => {
    const listData = getListData(value);

    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps['status']} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  return <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />;
};

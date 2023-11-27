
import React, { useState, useEffect } from 'react';
import MonthItem from './MonthItem';
import css from './MontsItem.module.css';
import { instance, getWaterForMonth } from '../../api/ApiPortionWater';
import { useDispatch, useSelector } from 'react-redux';
import { thunkPortionGetForMonth } from '../../redux/portionOfDrinking/thunkPortionOfDrinking';
import { useMediaQuery } from 'react-responsive';

// import { selectorWaterMonth } from '../../redux/selectors';

const Month = () => {
  const date = new Date().getFullYear();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    new Date().getMonth()
  );
  const dispath = useDispatch();
  const [monthData, setMonthData] = useState(['lalala']);
  // const waterForMonth = useSelector(selectorWaterMonth);
  const currentMonth = months[currentMonthIndex];

  // const getForMonth = (currentMonthIndex) => {
  //   dispath(thunkPortionGetForMonth(currentMonthIndex));
  // };
  // console.log(currentMonthIndex);

  // const monthData = getWaterForMonth(currentMonthIndex);
  const value = 1000;
  // const getWaterForMonth = async month => {
  //   try {
  //     const data = await instance.get(`/water/month/${month}`);
  //     console.log(data);
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   // dispath(thunkPortionGetForMonth(currentMonthIndex));
  //   console.log(currentMonthIndex);
  //   setMonthData(prevState => {
  //     return dispath(thunkPortionGetForMonth(currentMonthIndex));
  //   });
  //   console.log(monthData);
  // }, [currentMonthIndex]);

  const year = [
    { January: '31' },
    { February: date % 4 === 0 ? 29 : 28 },
    { March: '31' },
    { April: '30' },
    { May: '31' },
    { June: '30' },
    { July: '31' },
    { August: '31' },
    { September: '30' },
    { October: '31' },
    { November: '30' },
    { December: '31' },
  ];

  const quantityDays = year[currentMonthIndex];
  const arr = Object.keys(year[currentMonthIndex]);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleClick = day => {
    setSelectedDay(day);
  };

  const handlePrevMonth = () => {
    setCurrentMonthIndex(
      prevIndex => (prevIndex - 1 + months.length) % months.length
    );
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex(prevIndex => (prevIndex + 1) % months.length);
  };

  // const getDaysInMonth = () => {
  //   return new Date(
  //     currentDate.getFullYear(),
  //     currentDate.getMonth() + 1,
  //     0
  //   ).getDate();
  // };

  const isDesk = useMediaQuery({ query: '(min-width: 1440px)' });
  const isMob = useMediaQuery({ query: '(max-width: 767.98px)' });
  const itemsInRow = isMob ? 5 : isDesk ? 9 : 11;

  const renderDays = () => {
    // const daysInMonth = getDaysInMonth();
    const days = Array.from({ length: quantityDays }, (_, index) => index + 1);
    // console.log('lolo');

    return days.map(day => {
      const waterPercentage = monthData?.find(item => {
        return Number(item.data.split(',')[0]) === day;
      });

      return (
        <MonthItem
          // calendarRef={ref}
          key={day}
          day={day}
          row={Math.ceil((day + 1) / itemsInRow)}
          waterPercentage={waterPercentage}
        />
      );
    });
  };

  return (
    <div className={css.currentMonth}>
      <div className={css.monthWrap}>
        <div className={css.monthArrow}>
          <h2 className={css.monthTitle}>Month</h2>
          <button className={css.arrowBtn} onClick={handlePrevMonth}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.50344 7.30922C4.42151 7.22718 4.37549 7.11599 4.37549 7.00005C4.37549 6.88411 4.42151 6.77291 4.50344 6.69088L8.87844 2.31588C8.91849 2.2729 8.96679 2.23842 9.02046 2.21451C9.07412 2.1906 9.13206 2.17774 9.1908 2.1767C9.24954 2.17567 9.30789 2.18647 9.36237 2.20848C9.41684 2.23048 9.46633 2.26323 9.50788 2.30478C9.54942 2.34632 9.58217 2.39581 9.60417 2.45028C9.62618 2.50476 9.63698 2.56311 9.63595 2.62185C9.63491 2.6806 9.62205 2.73853 9.59814 2.7922C9.57423 2.84586 9.53975 2.89416 9.49677 2.93422L5.43094 7.00005L9.49677 11.0659C9.53975 11.1059 9.57423 11.1542 9.59814 11.2079C9.62205 11.2616 9.63491 11.3195 9.63595 11.3782C9.63698 11.437 9.62618 11.4953 9.60417 11.5498C9.58217 11.6043 9.54942 11.6538 9.50788 11.6953C9.46633 11.7369 9.41684 11.7696 9.36237 11.7916C9.30789 11.8136 9.24954 11.8244 9.1908 11.8234C9.13206 11.8224 9.07412 11.8095 9.02046 11.7856C8.96679 11.7617 8.91849 11.7272 8.87844 11.6842L4.50344 7.30922Z"
                fill="#407BFF"
              />
            </svg>
          </button>
          <p className={css.monthName}> {currentMonth}</p>
          <button className={css.arrowBtn} onClick={handleNextMonth}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.49656 7.30922C9.57849 7.22718 9.62451 7.11599 9.62451 7.00005C9.62451 6.88411 9.57849 6.77291 9.49656 6.69088L5.12156 2.31588C5.08151 2.2729 5.03321 2.23842 4.97954 2.21451C4.92588 2.1906 4.86794 2.17774 4.8092 2.1767C4.75046 2.17567 4.69211 2.18647 4.63763 2.20848C4.58316 2.23048 4.53367 2.26323 4.49212 2.30478C4.45058 2.34632 4.41783 2.39581 4.39583 2.45028C4.37382 2.50476 4.36302 2.56311 4.36405 2.62185C4.36509 2.6806 4.37795 2.73853 4.40186 2.7922C4.42577 2.84586 4.46025 2.89416 4.50323 2.93422L8.56906 7.00005L4.50323 11.0659C4.46025 11.1059 4.42577 11.1542 4.40186 11.2079C4.37795 11.2616 4.36509 11.3195 4.36405 11.3782C4.36302 11.437 4.37382 11.4953 4.39583 11.5498C4.41783 11.6043 4.45058 11.6538 4.49212 11.6953C4.53367 11.7369 4.58316 11.7696 4.63763 11.7916C4.69211 11.8136 4.75046 11.8244 4.8092 11.8234C4.86794 11.8224 4.92588 11.8095 4.97954 11.7856C5.03321 11.7617 5.08151 11.7272 5.12156 11.6842L9.49656 7.30922Z"
                fill="#407BFF"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={css.calendar}>
        {/* {renderDays()} */}
        <MonthItem
          quantityDays={quantityDays}
          value={value}
          handleClick={handleClick}
          selectedDay={selectedDay}
          selectedMonth={currentMonthIndex}
        />
      </div>
    </div>
  );
};

export default Month;


  


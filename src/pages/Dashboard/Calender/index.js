import { useState } from "react";
import EmailVerifyNote from "../../../components/EmailVerifyNote"
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import Checkbox from "rc-checkbox";
import "./style.css";
import SelectedDatesBoard from "./SelectedDatesBoard";

import findMonthEnd from "./findMonthEnd";

const Calender = () => {
  const currentDate = new Date();

  const [selectedDate, setSelectedDate] = useState([]);

  const [selectedMonth, setSelectedMonth] = useState({
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
  });

  const [selectedMonthsChecbox, setSelectedMonthsChecbox] = useState([]);

  const handleSelection = (e) => {
    const findDate = selectedDate.find((item) => {
      return e.toDateString() === item;
    });

    if (findDate && handleChecked() === 0) {
      const indexOfRemovedItem = selectedDate.indexOf(findDate);
      const dateTempData = [...selectedDate];
      dateTempData.splice(indexOfRemovedItem, 1);
      setSelectedDate(dateTempData);
    } 
    
    else if (findDate && handleChecked() === 1) {
      const indexOfRemovedDate = selectedDate.indexOf(findDate);
      const dateTempData = [...selectedDate];
      dateTempData.splice(indexOfRemovedDate, 1);
      setSelectedDate(dateTempData);
      clearCheckedBox();
    }
    
    else if (handleChecked() !== 1) {
      setSelectedDate(() => {
        return [...selectedDate, e.toDateString()];
      });

      let count=1;
      selectedDate.forEach((item)=>{
          if (
            selectedMonth.month === new Date(item).getMonth() &&
            selectedMonth.year === new Date(item).getFullYear()
          ) {
            count++;
          }
      })

      if(count === findTotalDaysOfMonth()){
        setSelectedMonthsChecbox(() => {
          return [...selectedMonthsChecbox, { ...selectedMonth }];
        });
      }
    }
  };

  const findTotalDaysOfMonth = () =>{
    let count = 0;
    for (
      let i =
        currentDate.getMonth() === selectedMonth.month &&
        currentDate.getFullYear() === selectedMonth.year
          ? currentDate.getDate()
          : 1;
      i <= findMonthEnd(selectedMonth);
      i++
    ) {
      count++;
    }

    return count;
  }

  const handleMonthChange = (e) => {
    setSelectedMonth(() => {
      return {
        month: e.getMonth(),
        year: e.getFullYear(),
      };
    });
  };

  const handleCheckboxOnChange = () => {
    const findSelectedMonth = selectedMonthsChecbox.find((item, index) => {
      return (
        selectedMonth.month === item?.month && selectedMonth.year === item?.year
      );
    });

    if (findSelectedMonth) {
      clearCheckedBox();
      handleClear();
    } 
    
    else {
      setSelectedMonthsChecbox(() => {
        return [...selectedMonthsChecbox, { ...selectedMonth }];
      });

      selectAllDays();
    }
  };

  const selectAllDays = () => {
    const dates = [];
    for (
      let i =
        currentDate.getMonth() === selectedMonth.month &&
        currentDate.getFullYear() === selectedMonth.year
          ? currentDate.getDate()
          : 1;
      i <= findMonthEnd(selectedMonth);
      i++
    ) {
      dates.push(
        new Date(selectedMonth.year, selectedMonth.month, i).toDateString()
      );
    }

    const filterDates = dates.filter((newItem) => {
      return newItem !== selectedDate.find((item) => item === newItem);
    });

    setSelectedDate(() => {
      return [...selectedDate, ...filterDates];
    });
  };

  const handleChecked = () => {
    const findSelectedMonth = selectedMonthsChecbox.find((item) => {
      return (
        selectedMonth.month === item?.month && selectedMonth.year === item?.year
      );
    });

    if (findSelectedMonth) {
      return 1;
    } else return 0;
  };

  

  const handleClear = () => {
    const filterDates = selectedDate.filter((item) => {
      return (
        selectedMonth.month !== new Date(item).getMonth() ||
        selectedMonth.year !== new Date(item).getFullYear()
      );
    });

    setSelectedDate(filterDates);
    clearCheckedBox();
  };

  const clearCheckedBox = () => {
    const findSelectedMonth = selectedMonthsChecbox.find((item, index) => {
      return (
        selectedMonth.month === item?.month && selectedMonth.year === item?.year
      );
    });

    const indexOfRemovedItem = selectedMonthsChecbox.indexOf(findSelectedMonth);

    const tempData = [...selectedMonthsChecbox];
    tempData.splice(indexOfRemovedItem, 1);
    setSelectedMonthsChecbox(tempData);
  };

  //console.log(selectedDate);

  return (
    <div className={'p-5 md:p-10 mb-10'}>
      <EmailVerifyNote />
      <p className="text-4xl text-gray-700 mt-5 ">Calendar</p>
      <section className="grid lg:grid-cols-2 mt-5">
        <div className="font-open-sans md:pr-28">
          <DayPicker
            onDayClick={handleSelection}
            selectedDays={selectedDate.map((item) => new Date(item))}
            className="w-full bg-white rounded-lg"
            onMonthChange={handleMonthChange}
            disabledDays={[{ before: new Date() }]}
          />

          <div className="w-full bg-white px-11 md:px-14 pb-5 rounded-lg">
            <p className="mb-2 text-gray-400">
              Change your availability for multiple dates by selecting more than
              one date.
            </p>
            <div className="flex justify-between">
              <label className="cursor-pointer mt-1">
                <Checkbox
                  checked={handleChecked()}
                  className="mr-2 cursor-pointer"
                  onChange={handleCheckboxOnChange}
                />
                Select Month
              </label>
              <button
                className="bg-red-400 rounded-md px-4 py-1 text-white"
                onClick={handleClear}
              >
                Clear Dates
              </button>
            </div>
          </div>
        </div>
        <SelectedDatesBoard handleClear={handleClear} selectedDate={selectedDate} selectedDatesCount={selectedDate.length} initialDate={selectedDate[0]}/>
      </section>
    </div>
  );
};

export default Calender;

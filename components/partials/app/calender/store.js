import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const date = new Date();
const prevDay = new Date().getDate() - 1;
const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

// prettier-ignore
const nextMonth = date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1)
// prettier-ignore
const prevMonth = date.getMonth() === 11 ? new Date(date.getFullYear() - 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() - 1, 1)

export const dashboardCalenderSlice = createSlice({
  name: "dashboard-calendar",
  initialState: {
    categories: [
      {
        label: "Embarque",
        value: "embarque",
        activeClass: "ring-warning-500 bg-warning-500",
      },

      {
        label: "Chegada",
        value: "chegada",
        activeClass: "ring-success-500 bg-success-500",
      },

      {
        label: "Disponível para Registro",
        value: "disponivel-para-registro",
        activeClass: "ring-purple-500 bg-purple-500",
      },
      {
        label: "Presença de Carga",
        value: "presenca-de-carga",
        activeClass: "ring-blue-500 bg-blue-500",
      },
      {
        label: "Disponível para Faturamento",
        value: "disponivel-para-faturamento",
        activeClass: "ring-gray-500 bg-gray-500",
      },
    ],
    calendarEvents: [
      {
        id: uuidv4(),
        title: "50",
        start: date,
        end: nextDay,
        allDay: true,
        //className: "warning",
        extendedProps: {
          calendar: "embarque",
        },
      },
      {
        id: uuidv4(),
        title: "30",
        start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
        end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
        allDay: true,
        //className: "success",
        extendedProps: {
          calendar: "chegada",
        },
      },
      {
        id: uuidv4(),
        title: "20",
        allDay: true,
        start: new Date(date.getFullYear(), date.getMonth() + 1, -9),
        end: new Date(date.getFullYear(), date.getMonth() + 1, -7),
        // className: "info",
        extendedProps: {
          calendar: "disponivel-para-registro",
        },
      },
      {
        id: uuidv4(),
        title: "10",
        start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
        end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
        allDay: true,
        //className: "primary",
        extendedProps: {
          calendar: "presenca-de-carga",
        },
      },
      {
        id: uuidv4(),
        title: "10",
        start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
        end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
        allDay: true,
        // className: "danger",
        extendedProps: {
          calendar: "disponivel-para-faturamento",
        },
      },
      {
        id: uuidv4(),
        title: "50",
        start: nextMonth,
        end: nextMonth,
        allDay: true,
        //className: "primary",
        extendedProps: {
          calendar: "embarque",
        },
      },
    ],
  },
  reducers: {
    dateClick: (state, action) => {
      const { data, selectedEvent, startDate, endDate } = action.payload;
      const { title, cata } = data;

      state.calendarEvents.push({
        id: uuidv4(),
        title: title,
        start: startDate,
        end: endDate,
        extendedProps: {
          calendar: cata,
        },
      });
    },
    updateEvent: (state, action) => {
      const { data, editItem, startDate, endDate } = action.payload;
      const { title, cata } = data;

      const eventId = editItem.event.id;
      const index = state.calendarEvents.findIndex(
        (item) => item.id === eventId
      );

      state.calendarEvents[index] = {
        id: editItem.event.id,
        title: title,
        start: startDate,
        end: endDate,
        //className: cata,
        allDay: true,
        extendedProps: {
          calendar: cata,
        },
      };
    },

    removeEvent: (state, action) => {
      const { editItem } = action.payload;

      const eventId = editItem.event.id;
      const index = state.calendarEvents.findIndex(
        (item) => item.id === eventId
      );
      state.calendarEvents.splice(index, 1);
    },
  },
});

export const { dateClick, updateEvent, removeEvent } = dashboardCalenderSlice.actions;
export default dashboardCalenderSlice.reducer;

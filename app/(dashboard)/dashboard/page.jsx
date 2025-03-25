"use client";

import React, { useState } from "react";

import GroupChart2 from "@/components/partials/widget/chart/group-chart-2";

import FullCalendar from "@fullcalendar/react";
import { useSelector, useDispatch } from "react-redux";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Checkbox from "@/components/ui/Checkbox";
import Card from "@/components/ui/Card";
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

import Task from "@/components/partials/app/kanban/Task";

const Dashboard = () => {
  const { calendarEvents, categories } = useSelector((state) => state.calendar);
    const { columns } = useSelector((state) => state.kanban);
  
  const [selectedCategories, setSelectedCategories] = useState(
    categories.map((c) => c.value)
  );
  
  const handleCategorySelection = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const dispatch = useDispatch();

  const handleClassName = (arg) => {
    if (arg.event.extendedProps.calendar === "embarque") {
      return "warning";
    } else if (arg.event.extendedProps.calendar === "chegada") {
      return "success";
    } else if (arg.event.extendedProps.calendar === "disponivel-para-registro") {
      return "bg-purple-500";
    } else if (arg.event.extendedProps.calendar === "presenca-de-carga") {
      return "bg-blue-500";
    } else if (arg.event.extendedProps.calendar === "disponivel-para-faturamento") {
      return "bg-gray-500";
    }
  };

  const filteredEvents = calendarEvents.filter((event) =>
    selectedCategories.includes(event.extendedProps.calendar)
  );

  return (
    <div>
      <h4 className="font-medium lg:text-xl text-xl capitalize text-slate-900 mb-5">
        Processos por Etapas
      </h4>
      <div className="grid grid-cols-12 gap-5 mb-5">
        <div className="col-span-12">
          <div className="grid md:grid-cols-8 grid-cols-1 gap-4">
            <GroupChart2 />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 dashcode-calender">
        <Card className="lg:col-span-2 col-span-12 bg-white">
          <div className="block pb-4 text-slate-800 dark:text-slate-400 font-semibold text-xs uppercase">
            Categorias Disponíveis
          </div>
          <ul className="space-y-2">
            <li>
              <Checkbox
                activeClass="bg-primary-500"
                label="Todos"
                value={selectedCategories.length === categories.length}
                onChange={() =>
                  setSelectedCategories(
                    selectedCategories.length === categories.length
                      ? []
                      : categories.map((c) => c.value)
                  )
                }
              />
            </li>
            {categories.map((category) => (
              <li key={category.value}>
                <Checkbox
                  activeClass={category.activeClass}
                  label={category.label}
                  value={selectedCategories.includes(category.value)}
                  onChange={() => handleCategorySelection(category.value)}
                />
              </li>
            ))}
          </ul>
        </Card>
        <Card className="lg:col-span-10 col-span-12 bg-white">
          <FullCalendar
            locale={ptBrLocale}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            events={filteredEvents}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={2}
            weekends={true}
            height={600}
            eventClassNames={handleClassName}
            initialView="dayGridMonth"
          />
        </Card>
      </div>
      <h4 className="font-medium lg:text-xl text-xl capitalize text-slate-900 mt-10">
        FUP Importação - 13/02/2025
      </h4>
      <div className="grid grid-cols-12 gap-5">
        <Card className="col-span-12">
          <div className="flex space-x-6 overflow-hidden overflow-x-auto pb-4 rtl:space-x-reverse">
            {columns?.map((column, i) => (
              <div key={column.id}>
                <div className="w-[320px] flex-none h-full rounded bg-slate-200 dark:bg-slate-700">
                  <div className="relative flex justify-between items-center bg-white dark:bg-slate-800 rounded shadow-base px-6 py-5">
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[2px] bg-primary-500"
                    ></div>
                    <div className="text-lg text-slate-900 dark:text-white font-medium capitalize">
                      {column.name}
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      ({String(column.tasks?.length || 0).padStart(2, '0')})
                    </div>
                  </div>
                  <div className="px-2 py-4 h-full space-y-4">
                    {column.tasks?.map((task, j) => (
                      <div key={task.id}>
                        <Task task={task} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

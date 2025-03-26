"use client";

import React, { useState } from "react";

import GroupChart5 from "@/components/partials/widget/chart/group-chart-5";

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
    if (arg.event.extendedProps.calendar === "pre-embarque") {
      return "bg-amber-500";
    } else if (arg.event.extendedProps.calendar === "embarque") {
      return "bg-orange-500";
    } else if (arg.event.extendedProps.calendar === "chegada") {
      return "bg-success-500";
    } else if (arg.event.extendedProps.calendar === "presenca-de-carga") {
      return "bg-blue-500";
    } else if (arg.event.extendedProps.calendar === "disponivel-para-registro") {
      return "bg-purple-500";
    } else if (arg.event.extendedProps.calendar === "disponivel-para-faturamento") {
      return "bg-gray-500";
    } else if (arg.event.extendedProps.calendar === "entrega") {
      return "bg-indigo-500";
    }
  };

  const filteredEvents = calendarEvents.filter((event) =>
    selectedCategories.includes(event.extendedProps.calendar)
  );

  return (
    <div>
      <div className="grid grid-cols-12 gap-5 dashcode-calender">
        <Card className="lg:col-span-2 col-span-12 bg-white" bodyClass="py-3 px-2 h-full">
          <GroupChart5 />
        </Card>
        <Card className="lg:col-span-2 col-span-12 bg-white">
          <div className="block pb-4 text-slate-800 dark:text-slate-400 font-semibold text-xs uppercase">
            Categorias Disponíveis
          </div>
          <ul className="space-y-2">
            <li>
              <Checkbox
                activeClass="ring-primary-500 bg-primary-500"
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
        <Card className="lg:col-span-8 col-span-12 bg-white">
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
            height={530}
            eventClassNames={handleClassName}
            initialView="dayGridMonth"
          />
        </Card>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        <Card className="col-span-12 b-0" bodyClass="px-0">
          <div className="flex space-x-3 overflow-hidden overflow-x-auto rtl:space-x-reverse">
            {columns?.map((column, i) => (
              <div key={column.id}>
                <div className="w-[320px] flex-none rounded bg-slate-200 dark:bg-slate-700 h-[calc(100vh-700px)] overflow-hidden">
                  <div className="relative flex justify-between items-center bg-white dark:bg-slate-800 rounded shadow-base px-5 py-4">
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
                  <div className="px-2 py-2 space-y-2 overflow-y-auto h-[calc(100vh-700px-70px)]">
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

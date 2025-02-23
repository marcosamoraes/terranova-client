import React from "react";
import Card from "@/components/ui/Card";

const Task = ({ task }) => {
  const {
    name,
    des,
    date,
  } = task;

  return (
    <Card className="bg-white">
      <header className="flex justify-between items-start">
        <div className="flex space-x-4 items-center rtl:space-x-reverse">
          <div className="font-medium text-base leading-6">
            <div className="dark:text-slate-200 text-slate-900 max-w-[160px] truncate">
              {name}<br />
              <small>{des}</small>
            </div>
          </div>
        </div>
        <div>
          {date}
        </div>
      </header>
    </Card>
  );
};

export default Task;

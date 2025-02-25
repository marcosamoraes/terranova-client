import React from "react";
import Card from "@/components/ui/Card";
import { Icon } from "@iconify/react";

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
              <small className="flex items-center space-x-1 gap-1">
                <Icon icon="fa:ship" className="text-primary-500" />
                {des}
              </small>
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

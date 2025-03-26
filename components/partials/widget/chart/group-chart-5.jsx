"use client"
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Tooltip from "@/components/ui/Tooltip";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const statistics = [
  {
    title: "Todos",
    count: "50",
    bg: "bg-primary-500 dark:bg-primary-500	",
    text: "text-white",
    icon: "lucide:list-checks",
  },
  {
    title: "Pré Embarque",
    count: "30",
    bg: "bg-primary-500 dark:bg-primary-500	",
    text: "text-white",
    icon: "lucide:ship",
  },
  {
    title: "Embarque",
    count: "20",
    bg: "bg-primary-500 dark:bg-primary-500	",
    text: "text-white",
    icon: "lucide:ship-wheel",
  },
  {
    title: "Chegada",
    count: "10",
    bg: "bg-primary-500 dark:bg-primary-500	",
    text: "text-white",
    icon: "lucide:plane-landing",
  },
  {
    title: "Presença de Carga",
    count: "50",
    bg: "bg-primary-500 dark:bg-primary-500	",
    text: "text-white",
    icon: "lucide:package",
  },
  {
    title: "Disponível para Registro",
    tooltip: "Disponível para Registro",
    count: "30",
    bg: "bg-primary-500 dark:bg-primary-500	",
    text: "text-white",
    icon: "lucide:receipt",
  },
  {
    title: "Disponível para Faturamento",
    tooltip: "Disponível para Faturamento",
    count: "20",
    bg: "bg-primary-500 dark:bg-primary-500	",
    text: "text-white",
    icon: "lucide:file-clock",
  },
  {
    title: "Entrega",
    count: "10",
    bg: "bg-primary-500 dark:bg-primary-500	",
    text: "text-white",
    icon: "lucide:package-check",
  },
];

const GroupChart5 = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      {statistics.map((item, i) => (
        <div key={i}>
          <Card bodyClass="px-0">
            <div className="flex space-x-2 rtl:space-x-reverse w-full">
              <div className="flex-none">
                <div
                  className={`${item.bg} ${item.text} h-12 w-12 rounded-full flex flex-col items-center justify-center text-2xl`}
                >
                  <Icon icon={item.icon} />
                </div>
              </div>
              <div className="flex-1"> 
                <div className="text-slate-600 dark:text-slate-300 text-sm font-medium max-w-[calc(100%-20px)] truncate">
                  <Tooltip
                    title={item.title}
                    content={item.tooltip ?? item.title}
                    placement="top"
                    arrow
                  >
                    <p className="text-slate-600 dark:text-slate-300 text-sm font-medium max-w-[100%] truncate">{item.title}</p>
                  </Tooltip>
                </div>
                <div className="text-slate-900 dark:text-white text-lg font-medium">
                  {item.count}
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default GroupChart5;

"use client"
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const statistics = [
  {
    title: "Embarque",
    count: "50",
    bg: "bg-primary-500 dark:bg-primary-500	",
    text: "text-white",
    icon: "fa:ship",
  },
  {
    title: "Chegada",
    count: "30",
    bg: "bg-primary-500 dark:bg-primary-500	",
    text: "text-white",
    icon: "fa:building",
  },
  {
    title: "Disponível para Registro",
    count: "20",
    bg: "bg-primary-500 dark:bg-primary-500	",
    text: "text-white",
    icon: "fa:list-alt",
  },
  {
    title: "Presença de carga",
    count: "10",
    bg: "bg-primary-500 dark:bg-primary-500	",
    text: "text-white",
    icon: "entypo:box",
  },
  {
    title: "Item 05",
    count: "50",
    bg: "bg-primary-500 dark:bg-primary-500	",
    text: "text-white",
    icon: "fa:ship",
  },
  {
    title: "Item 06",
    count: "30",
    bg: "bg-primary-500 dark:bg-primary-500	",
    text: "text-white",
    icon: "fa:building",
  },
  {
    title: "Item 07",
    count: "20",
    bg: "bg-primary-500 dark:bg-primary-500	",
    text: "text-white",
    icon: "fa:list-alt",
  },
  {
    title: "Item 08",
    count: "10",
    bg: "bg-primary-500 dark:bg-primary-500	",
    text: "text-white",
    icon: "entypo:box",
  },
];

const GroupChart2 = () => {
  return (
    <>
      {statistics.map((item, i) => (
        <div key={i}>
          <Card bodyClass="pt-4 pb-3 px-4">
            <div className="flex space-x-4 rtl:space-x-reverse">
              <div className="flex-none">
                <div
                  className={`${item.bg} ${item.text} h-12 w-12 rounded-full flex flex-col items-center justify-center text-2xl`}
                >
                  <Icon icon={item.icon} />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-slate-600 dark:text-slate-300 text-sm mb-1 font-medium">
                  {item.title}
                </div>
                <div className="text-slate-900 dark:text-white text-lg font-medium">
                  {item.count}
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </>
  );
};

export default GroupChart2;

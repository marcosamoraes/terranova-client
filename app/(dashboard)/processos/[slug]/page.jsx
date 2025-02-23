"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState, Fragment } from "react";
import { processesTableData } from "@/constant/table-data";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import { Tab } from "@headlessui/react";
import OrderTab from "@/components/partials/processTabs/OrderTab";
import DossieTab from "@/components/partials/processTabs/DossieTab";

const Process = () => {
  const { slug } = useParams();
  const [process, setProcess] = useState(null);

  const tabs = [
    { label: "Pedido", element: <OrderTab process={process} /> },
    { label: "Embarque" },
    { label: "Chegada" },
    { label: "Entrega" },
    { label: "Financeiro" },
    { label: "Contêiner" },
    { label: "Dossiê", element: <DossieTab process={process} /> },
    { label: "Faturamento" },
    { label: "Câmbio" },
    { label: "Histórico" },
  ];

  useEffect(() => {
    const foundProcess = processesTableData.find(p => p.slug === slug);
    setProcess(foundProcess);
  }, [slug]);

  if (!process) {
    return (
      <div className="text-center p-4">
        <span className="text-lg text-slate-500">Carregando...</span>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-end items-center mb-6 -mt-12">
        <Link href="/processos" className="btn btn-dark btn-sm flex items-center gap-2">
          <Icon icon="heroicons-outline:arrow-left" />
          Voltar
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        {[
          { label: "Importação", value: process.import },
          { label: "Invoice", value: process.invoice },
          { label: "Fabricante", value: process.manufacturer },
          { label: "Produto", value: process.product },
          { label: "Via", value: process.via },
        ].map((item, index) => (
          <div key={index}>
            <div className="text-sm text-slate-500">{item.label}</div>
            <div className="text-lg font-medium mt-1">{item.value}</div>
          </div>
        ))}
      </div>

      <Card>
        <Tab.Group>
          <Tab.List className="flex gap-2 p-2 border-b overflow-x-auto">
            {tabs.map((tab) => (
              <Tab key={tab.label} as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`
                      px-4 py-2 text-sm font-medium rounded-md transition-colors
                      ${selected 
                        ? 'bg-primary-500 text-white' 
                        : 'text-slate-500 hover:bg-slate-100'
                      }
                    `}
                  >
                    {tab.label}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="p-4">
            {tabs.map((tab, idx) => (
              <Tab.Panel key={idx} className="text-slate-600">
                {tab.element ? tab.element : <div>Aba {tab.label} em construção...</div>}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Card>
    </div>
  );
};

export default Process;
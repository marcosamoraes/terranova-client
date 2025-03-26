"use client";

import React, { useState } from "react";
import Card from "@/components/ui/Card";
import { processesTableData } from "@/constant/table-data";
import DisplayColumnsModal from "@/components/partials/modals/DisplayColumnsModal";
import FilterCard from "@/components/partials/filters/FilterCard";
import Link from "next/link";

const columns = [
  { label: "Importação", field: "import", href: "/processos/{slug}" },
  { label: "Invoice", field: "invoice" },
  { label: "Fabricante", field: "manufacturer" },
  { label: "Produto", field: "product" },
  { label: "Via", field: "via" },
  { label: "Data Chegada", field: "arrival_date" },
];

const Processes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState(
    columns.reduce((acc, col) => ({ ...acc, [col.label]: true }), {})
  );

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  const toggleColumn = (columnLabel) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [columnLabel]: !prev[columnLabel],
    }));
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] gap-5">
      <FilterCard columns={columns} toggleModal={toggleModal} />
      <Card noborder className="h-full flex-1 flex flex-col overflow-hidden" bodyClass="h-full">
        <div className="h-full overflow-scroll flex-1">
          <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
            <thead className="bg-slate-200 dark:bg-slate-700 sticky top-0 z-10">
              <tr>
                {columns.map((column, i) => 
                  visibleColumns[column.label] ? (
                    <th key={`column-${i}`} scope="col" className="table-th text-center">
                      {column.label}
                    </th>
                  ) : null
                )}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
              {processesTableData.map((row, i) => (
                <tr key={`row-${i}`} className="even:bg-slate-200 dark:even:bg-slate-700">
                  {columns.map((column, j) =>
                    visibleColumns[column.label] ? (
                      <td key={`row-column-${i}-${j}`} className="table-td text-center">
                        {column.href ? (
                          <Link 
                            href={column.href.replace("{slug}", row.slug)} 
                            className="text-primary-500 hover:underline cursor-pointer"
                          >
                            {row[column.field]}
                          </Link>
                        ) : (
                          row[column.field]
                        )}
                      </td>
                    ) : null
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <DisplayColumnsModal 
        activeModal={isModalOpen}
        onClose={toggleModal}
        columns={columns}
        visibleColumns={visibleColumns}
        toggleColumn={toggleColumn}
      />
    </div>
  );
};

export default Processes;

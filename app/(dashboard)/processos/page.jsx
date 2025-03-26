"use client";

import React, { useState } from "react";
import Card from "@/components/ui/Card";
import { processesTableData } from "@/constant/table-data";
import Icon from "@/components/ui/Icon";
import Pagination from "@/components/ui/Pagination";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState(
    columns.reduce((acc, col) => ({ ...acc, [col.label]: true }), {})
  );

  const totalPages = Math.ceil(500 / 25);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
    <div>
      <h4 className="font-medium lg:text-xl text-xl capitalize text-slate-900 mb-5">
        Processos
      </h4>
      <FilterCard columns={columns} toggleModal={toggleModal} />
      <Card noborder>
        <div className="flex justify-end mb-4 px-4">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
        <div className="overflow-x-auto -mx-6  -mb-6">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                <thead className="bg-slate-200 dark:bg-slate-700">
                  <tr>
                    {columns.map((column, i) => 
                      visibleColumns[column.label] ? (
                        <th key={i} scope="col" className="table-th text-center">
                          {column.label}
                        </th>
                      ) : null
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                  {processesTableData.map((row, i) => (
                    <tr key={i} className="even:bg-slate-200 dark:even:bg-slate-700">
                      {columns.map((column) =>
                        visibleColumns[column.label] ? (
                          <td key={column.label} className="table-td text-center">
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
          </div>
        </div>
      </Card>
      <div className="flex justify-between items-center p-4 border-t dark:border-slate-700">
        <div className="text-sm text-slate-500 dark:text-slate-400 font-bold">
          Exibindo 25 Registros de 500
        </div>
      </div>

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

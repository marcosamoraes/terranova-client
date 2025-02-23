import { Icon } from "@iconify/react";

const columns = [
  { label: "Data", field: "date" },
  { label: "Tipo de Documento", field: "document_type" },
  { label: "Descrição", field: "description" },
  { label: "Download", field: "download" },
  { label: "View", field: "view" },
];

const DossieTab = ({ process }) => {
  return (
    <div className="overflow-x-auto -mx-6  -mb-6">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden">
          <div className="flex justify-end mb-4 px-4">
            <button className="flex items-center gap-2">
              <Icon icon="fa:download" />
              Baixar todos os documentos
            </button>
          </div>
          <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
            <thead className="bg-slate-200 dark:bg-slate-700">
              <tr>
                {columns.map((column, i) => 
                  <th key={i} scope="col" className="table-th text-center">
                    {column.label}
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
              {process.dossie.map((row, i) => (
                <tr key={i} className="even:bg-slate-200 dark:even:bg-slate-700">
                  {columns.map((column) =>
                    <td key={column.label} className="table-td text-center">
                      {column.field === "download" ? (
                        <Icon icon="fa:download" className="text-primary-500 cursor-pointer m-auto" />
                      ) : null}
                      {column.field === "view" ? (
                        <Icon icon="fa:eye" className="text-primary-500 cursor-pointer m-auto" />
                      ) : null}
                      {column.field !== "download" && column.field !== "view" ? (
                        row[column.field]
                      ) : null}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DossieTab;
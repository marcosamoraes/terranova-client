import { Icon } from "@iconify/react";

const ItemsTab = ({ process }) => {
  return (
    <div className="h-[calc(100vh-280px)] flex flex-col -mx-6 -mb-6">
      <div className="inline-block min-w-full align-middle h-full flex-1 overflow-hidden">
        <div className="flex justify-end sticky top-0 right-0 z-10 bg-white w-full overflow-hidden">
          <button className="flex items-center gap-2 pb-2 pr-2 -mr-2">
            <Icon icon="lucide:filter" />
            Filtro de exibição
          </button>
        </div>
        <div className="h-full overflow-auto">
          <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
            <thead className="bg-slate-200 dark:bg-slate-700 sticky top-0 z-10">
              <tr>
                {Array.from({ length: 20 }, (_, i) => (
                  <th key={`column-${i}`} scope="col" className="table-th text-center whitespace-nowrap">
                    {`Coluna ${i + 1}`}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
              {Array.from({ length: 200 }, (_, i) => (
                <tr key={`row-${i}`} className="even:bg-slate-200 dark:even:bg-slate-700">
                  {Array.from({ length: 20 }, (_, j) => (
                    <td key={`row-${i}-${j}`} className="table-td text-center">
                      {`Linha ${i + 1}`}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ItemsTab;
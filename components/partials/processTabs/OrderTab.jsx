import { Icon } from "@iconify/react";

const columns = [
  { label: "Itens", field: "items" },
  { label: "Pedido", field: "order" },
  { label: "Referência", field: "reference" },
  { label: "Fabricante", field: "manufacturer" },
  { label: "Produto", field: "product" },
];

const OrderTab = ({ process }) => {
  return (
    <div className="overflow-x-auto -mx-6  -mb-6">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden ">
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
              {process.orders.map((row, i) => (
                <tr key={i} className="even:bg-slate-200 dark:even:bg-slate-700">
                  {columns.map((column) =>
                    <td key={column.label} className="table-td text-center">
                      {column.field === "items" ? (
                        <Icon icon="fa:plus-square-o" className="text-primary-500 cursor-pointer m-auto text-xl" />
                      ) : null}
                      {column.field !== "items" ? (
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

export default OrderTab;
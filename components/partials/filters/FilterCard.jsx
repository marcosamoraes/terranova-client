import { useState } from 'react';
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Flatpickr from "react-flatpickr";
import FilterRow from "./FilterRow";
import "flatpickr/dist/themes/light.css";
import Button from '@/components/ui/Button';

const FilterCard = ({ columns }) => {
  const [filterRows, setFilterRows] = useState([{ id: 1 }]);
  const [dateRange, setDateRange] = useState([]);

  const addFilterRow = () => {
    const newId = filterRows[filterRows.length - 1].id + 1;
    setFilterRows([...filterRows, { id: newId }]);
  };

  const removeFilterRow = (rowId) => {
    if (filterRows.length > 1) {
      setFilterRows(filterRows.filter(row => row.id !== rowId));
    }
  };

  return (
    <Card className="mb-6 bg-white">
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div className="flex-1">
            {filterRows.map((row, index) => (
              <FilterRow
                key={row.id}
                columns={columns}
                isRemovable={index > 0}
                onRemove={() => removeFilterRow(row.id)}
              />
            ))}
          </div>
          
          <div className="ml-4 min-w-[300px]">
            <label className="form-label">Período</label>
            <Flatpickr
              value={dateRange}
              placeholder="Selecione um período"
              className="form-control py-2"
              onChange={(dates) => setDateRange(dates)}
              options={{
                mode: "range",
                dateFormat: "d/m/Y",
                locale: {
                  firstDayOfWeek: 0,
                  weekdays: {
                    shorthand: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
                    longhand: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
                  },
                  months: {
                    shorthand: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                    longhand: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
                  },
                  rangeSeparator: ' até ',
                }
              }}
            />
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button icon="heroicons-outline:plus" className="btn-dark" onClick={addFilterRow} />

          <Button
            icon="heroicons-outline:search"
            text="Buscar"
            className="btn-primary"
          />

          <Button icon="heroicons-outline:document-download" className="btn-success" />
        </div>
      </div>
    </Card>
  );
};

export default FilterCard;
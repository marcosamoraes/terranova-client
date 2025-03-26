import { useState } from 'react';
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Flatpickr from "react-flatpickr";
import FilterRow from "./FilterRow";
import "flatpickr/dist/themes/light.css";
import Button from '@/components/ui/Button';

const FilterCard = ({ columns, toggleModal }) => {
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
    <Card className="bg-white" bodyClass="px-2 py-1">
      <div className="p-4 flex gap-3">
        <div className="flex flex-wrap flex-col flex-1 gap-3">
          {filterRows.map((row, key) => (
            <FilterRow
              key={row.id}
              columns={columns}
              isRemovable={key > 0}
              onRemove={() => removeFilterRow(row.id)}
            />
          ))}
        </div>
        <div className="flex justify-end gap-3 h-9">
          <div className="flex-1">
            <Flatpickr
              value={dateRange}
              placeholder="Selecione um período..."
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

          <Button icon="heroicons-outline:plus" className="btn-dark" onClick={addFilterRow} />

          <Button
            icon="heroicons-outline:search"
            text="Buscar"
            className="btn-primary"
          />

          <Button icon="fa:file-excel-o" className="btn-success" />

          <Button icon="fa:cog" className="btn-light" onClick={toggleModal} />
        </div>
      </div>
    </Card>
  );
};

export default FilterCard;
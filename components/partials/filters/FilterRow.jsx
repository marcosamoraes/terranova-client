import Select from "@/components/ui/Select";
import InputGroup from "@/components/ui/InputGroup";
import Button from "@/components/ui/Button";

const FilterRow = ({ onRemove, isRemovable, columns }) => {
  return (
    <div className={`flex gap-3 items-start ${isRemovable ? "-mr-12" : ""}`}>
      <div className="flex-1">
        <Select
          placeholder="Campo..."
          options={columns.map(col => col.label)}
        />
      </div>

      <div className="flex-1">
        <Select
          placeholder="Operador..."
          options={[
            "Igual",
            "Diferente de",
            "Menor que",
            "Maior que"
          ]}
        />
      </div>

      <div className="flex-1">
        <Select
          placeholder="FUP..."
          options={[
            "Embarque",
            "Chegada",
            "Disponível para Registro",
            "Presença de Carga",
            "Disponível para Faturamento"
          ]}
        />
      </div>

      <div className="flex-1">
        <InputGroup
          type="text"
          placeholder="Termo de Busca..."
        />
      </div>

      {isRemovable && (
        <Button icon="heroicons-outline:trash" className="btn-danger h-9" onClick={onRemove} />
      )}
    </div>
  );
};

export default FilterRow;
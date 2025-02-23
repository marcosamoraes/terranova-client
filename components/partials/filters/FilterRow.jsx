import Select from "@/components/ui/Select";
import InputGroup from "@/components/ui/InputGroup";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";

const FilterRow = ({ onRemove, isRemovable, columns }) => {
  return (
    <div className="flex gap-4 items-start mb-4">
      <div className="flex-1">
        <Select
          label="Campo"
          options={columns.map(col => col.label)}
        />
      </div>

      <div className="flex-1">
        <Select
          label="Operador"
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
          label="FUP"
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
          label="Termo de Busca"
          placeholder="Digite o termo"
        />
      </div>

      {isRemovable && (
        <div className="pt-8 -mr-[62px]">
          <Button icon="heroicons-outline:trash" className="btn-danger h-9 w-4" onClick={onRemove} />
        </div>
      )}
    </div>
  );
};

export default FilterRow;
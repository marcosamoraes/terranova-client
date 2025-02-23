import React from "react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";

const DisplayColumnsModal = ({ activeModal, onClose, columns, visibleColumns, toggleColumn }) => {
  return (
    <Modal
      title="Exibição de Colunas"
      labelClass="btn-outline-primary"
      themeClass="bg-primary-500"
      activeModal={activeModal}
      onClose={onClose}
      footerContent={
        <Button
          text="Fechar"
          className="btn-primary"
          onClick={onClose}
        />
      }
    >
      <div className="grid grid-cols-3 gap-4 p-4">
        {columns.map((column) => (
          <div key={column.label} className="min-w-[120px]">
            <Checkbox
              activeClass="ring-primary-500 bg-primary-500"
              label={column.label}
              value={visibleColumns[column.label]}
              onChange={() => toggleColumn(column.label)}
            />
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default DisplayColumnsModal;
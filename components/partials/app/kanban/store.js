import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { toast } from "react-toastify";

export const appKanbanSlice = createSlice({
  name: "appkanban",
  initialState: {
    columModal: false,
    taskModal: false,
    isLoading: null,
    openTaskId: null,

    editModal: false,
    editItem: {},
    columns: [
      {
        id: uuidv4(),
        name: "Pré Embarque",
        tasks: [
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "Embarque",
        tasks: [
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "Chegada",
        tasks: [
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "Presença de Carga",
        tasks: [
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "Disponível para Registro",
        tasks: [
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "Disponível para Faturamento",
        tasks: [
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "Entrega",
        tasks: [
          {
            id: uuidv4(),
            name: "TI 38519-00",
            des: "Marítimo",
            date: "08/02/25",
          },
        ],
      },
    ],
    isLoading: false,
  },
  reducers: {
    sort: (state, action) => {
      const { source, destination } = action.payload;
      if (source.droppableId !== destination.droppableId) {
        const sourceColumn = state.columns.find(
          (column) => column.id === source.droppableId
        );
        const destColumn = state.columns.find(
          (column) => column.id === destination.droppableId
        );

        const sourceItems = [...sourceColumn.tasks];
        const destItems = [...destColumn.tasks];

        const [removed] = sourceItems.splice(source.index, 1);

        destItems.splice(destination.index, 0, removed);

        sourceColumn.tasks = sourceItems;
        destColumn.tasks = destItems;
      } else {
        const items = state.columns;
        const [reorderedItem] = items.splice(action.payload.source.index, 1);
        items.splice(action.payload.destination.index, 0, reorderedItem);
      }
    },
    toggleColumnModal: (state, action) => {
      state.columModal = action.payload;
    },
    addColumnBoard: (state, action) => {
      state.columns.push({
        id: uuidv4(),
        name: action.payload.title,
        color: action.payload.color,
        tasks: [],
      });

      toast.success("Add Successfully", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    deleteColumnBoard: (state, action) => {
      const index = state.columns.findIndex(
        (column) => column.id === action.payload
      );
      state.columns.splice(index, 1);
    },
    toggleTaskModal: (state, action) => {
      const { columnId, open } = action.payload;
      state.taskModal = open;
      state.openTaskId = columnId;
    },
    addTask: (state, action) => {
      const column = state.columns.find(
        (column) => column.id === state.openTaskId
      );
      column.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      const column = state.columns.find(
        (item) =>
          item.tasks.findIndex(
            (innerItem) => innerItem.id === action.payload
          ) !== -1
      );

      if (column) {
        const index = column.tasks.findIndex(
          (innerItem) => innerItem.id === action.payload
        );
        column.tasks.splice(index, 1);
        toast.warning("Delete Successfully", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },
    // toggleEditModal
    toggleEditModal: (state, action) => {
      const { task, editModal } = action.payload;
      state.editModal = editModal;
      state.editItem = task;
    },
    updateTask: (state, action) => {
      // update task
      const column = state.columns.find(
        (item) =>
          item.tasks.findIndex(
            (innerItem) => innerItem.id === action.payload.id
          ) !== -1
      );

      if (column) {
        const index = column.tasks.findIndex(
          (innerItem) => innerItem.id === action.payload.id
        );
        column.tasks[index] = action.payload;

        toast.info("Edit Successfully", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    },
  },
});

export const {
  sort,
  toggleColumnModal,
  addColumnBoard,
  deleteColumnBoard,
  addTask,
  toggleTaskModal,
  deleteTask,
  toggleEditModal,
  updateTask,
} = appKanbanSlice.actions;
export default appKanbanSlice.reducer;

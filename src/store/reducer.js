import {logDOM} from "@testing-library/dom";

const initialState = {
  grid: Array(15).fill(null).map(() => Array(10).fill(null)),
  selectedColor: '#000000',
  selectedCells: [],
  infoData: {}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SELECTED_CELL':
      const isSelected = state.selectedCells.some(
        (cell) => cell.row === action.payload.row && cell.col === action.payload.col
      );
      return {
        ...state,
        selectedCells: isSelected
          ? state.selectedCells.filter(
            (cell) => cell.row !== action.payload.row || cell.col !== action.payload.col
          )
          : [...state.selectedCells, { row: action.payload.row, col: action.payload.col }],
      };

    case 'SET_CELL_COLOR':
      const updatedGrid = state.grid.map((row, rowIndex) =>
        row.map((currentColor, colIndex) => {
          return rowIndex === action.payload.row && colIndex === action.payload.col
            ? action.payload.color
            : currentColor
          }
        )
      );

      const updatedInfoData = updatedGrid.reduce((acc, row, rowIndex) => {
        row.forEach((cellColor, colIndex) => {
          if (cellColor) {
            if (!acc[cellColor]) {
              acc[cellColor] = [];
            }
            acc[cellColor].push({ row: rowIndex, col: colIndex });
          }
        });
        return acc;
      }, {});

      return {
        ...state,
        grid: updatedGrid,
        infoData: updatedInfoData,
      };

    case 'RESET_SELECTED_CELLS':
      return {
        ...state,
        selectedCells: [],
      };

    case 'SET_COLOR':
      return {
        ...state,
        selectedColor: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;

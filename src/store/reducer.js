const initialState = {
  grid: Array.from({ length: 15 }, () => Array(10).fill(null)), // 15 строк, 10 колонок
  selectedColor: '#000000',
  selectedCells: [], // Массив выбранных ячеек
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SELECTED_CELL':
      const { row, col } = action.payload;
      const isSelected = state.selectedCells.some(
        (cell) => cell.row === row && cell.col === col
      );

      return {
        ...state,
        selectedCells: isSelected
          ? state.selectedCells.filter(
            (cell) => cell.row !== row || cell.col !== col
          )
          : [...state.selectedCells, { row, col }],
      };

    case 'TOGGLE_CELL':
      const { color } = action.payload;
      const updatedGrid = state.grid.map((row, rowIndex) =>
        row.map((cell, colIndex) =>
          rowIndex === action.payload.row && colIndex === action.payload.col
            ? color
            : cell
        )
      );

      return {
        ...state,
        grid: updatedGrid,
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

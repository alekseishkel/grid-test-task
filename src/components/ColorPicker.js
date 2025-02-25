import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const ColorPicker = () => {
  const dispatch = useDispatch();
  const selectedColor = useSelector((state) => state.selectedColor);
  const selectedCells = useSelector((state) => state.selectedCells);

  const handleColorChange = (event) => {
    dispatch({
      type: 'SET_COLOR',
      payload: event.target.value,
    });
  };

  const handleColorButtonClick = () => {
    selectedCells.forEach((cell) => {
      dispatch({
        type: 'SET_CELL_COLOR',
        payload: {
          row: cell.row,
          col: cell.col,
          color: selectedColor,
        },
      });
    });

    dispatch({type: 'RESET_SELECTED_CELLS'});
  };

  return (
    <>
      <div className="color-picker-wrapper">
        <label>Выбурите цвет:</label>
        <input
          className="color-picker"
          type="color"
          value={selectedColor}
          onChange={handleColorChange}
        />
      </div>
      <button className="colorize-button" onClick={handleColorButtonClick}>Окрасить ячейки</button>
    </>
  );
};

export default ColorPicker;

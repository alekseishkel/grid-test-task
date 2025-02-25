import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TransformWrapper, TransformComponent, useControls} from 'react-zoom-pan-pinch';
import { xLabels } from '../helpers/getXLabels';

const Grid = () => {
  const dispatch = useDispatch();
  const grid = useSelector((state) => state.grid);
  const selectedCells = useSelector((state) => state.selectedCells);

  const yLabels = Array.from(Array(15)).map((_, i) => i + 1)

  const handleCellClick = (row, col) => {
    dispatch({
      type: 'TOGGLE_SELECTED_CELL',
      payload: {row, col},
    });
  };

  return (
    <div className="grid-wrapper">
      <TransformWrapper
        panning={{
          disabled: true
        }}
        doubleClick={{
          disabled: true
        }}
      >
        {() => (
          <TransformComponent>
            <div className="grid-header">
              <div className="header-cell"></div>
              {xLabels.map((label, index) => (
                <div key={label + index} className="header-cell">
                  {label}
                </div>
              ))}
            </div>
            <div className="grid-body">
              {yLabels.map((label, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                  <div className="header-cell">{label}</div>
                  {xLabels.map((label, colIndex) => (
                    <div
                      key={label + colIndex}
                      className="grid-cell"
                      style={{
                        backgroundColor: grid[rowIndex][colIndex],
                        border: selectedCells.some(
                          (cell) => cell.row === rowIndex && cell.col === colIndex
                        )
                          ? '1px solid blue'
                          : '1px solid #ccc',
                      }}
                      onClick={() => handleCellClick(rowIndex, colIndex)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </TransformComponent>
        )}
      </TransformWrapper>
      <span>* - Для масштабирования наведите курсор на нужную ячейку и прокрутите колесо мыши.</span>
    </div>
  );
};

export default Grid;

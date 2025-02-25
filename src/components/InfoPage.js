import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { xLabels } from '../helpers/getXLabels';

const InfoPage = () => {
  const infoData = useSelector((state) => state.infoData);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Информация о выделенных ячейках</h2>
      {Object.entries(infoData).map(([color, cells]) => (
        <div key={color}>
          <h3>Цвет: {color}</h3>
          <ul>
            {cells.map((cell, i) => (
              <li key={i}>Ячейка: {xLabels[cell.col]}{cell.row + 1}</li>
            ))}
          </ul>
        </div>
      ))}
      <button className="back-button" onClick={() => navigate('/')}>Назад</button>
    </div>
  );
};

export default InfoPage;

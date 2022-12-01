import React, { useState } from 'react';
import Select from 'react-select';

const Estado = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const estPaquete = [
    { value: 'guardado', label: 'Guardado' },
    { value: 'cancelado', label: 'Cancelado' },
    { value: 'cumplido', label: 'Cumplido' },
  ];

  return (
    <div className="stateSelect">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={estPaquete}
      />
    </div>
  );
}
export default Estado
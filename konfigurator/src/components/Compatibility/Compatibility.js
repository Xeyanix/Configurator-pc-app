import React, { useState } from 'react';

const cpu = {
  model: 'Intel Core i7-10700K',
  clockSpeed: '3.8 GHz',
  cores: 8,
  threads: 16,
  socket: 'LGA1200',
};

const motherboard = {
  model: 'ASUS ROG Strix Z590-E',
  socket: 'LGA1200',
  memoryType: 'DDR4',
  memorySlots: 4,
  chipset: 'Intel Z590',
  pciSlots: 3,
  usbPorts: 8,
  ethernet: 'Intel I225-V',
};

function Compatibility() {
  const [isCompatible, setIsCompatible] = useState(false);

  function handleCompatibilityCheck() {
    setIsCompatible(cpu.socket === motherboard.socket);
  }

  return (
    <div>
      <input type="checkbox" checked={isCompatible} onChange={handleCompatibilityCheck} />
      <label>Procesor pasuje do płyty głównej.</label>
      <br />
      {isCompatible ? (
        <p>Procesor pasuje do płyty głównej.</p>
      ) : (
        <p>Procesor nie pasuje do płyty głównej.</p>
      )}
    </div>
  );
}

export default Compatibility;

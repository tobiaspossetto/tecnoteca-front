import React from 'react';
export interface SalasInterface {}

const Salas : React.FC<SalasInterface> = () => {
	return <div style={{minHeight: "calc(100vh - 150px - 140px)", width:"100%"}}>Salas</div>;
};

export default Salas;

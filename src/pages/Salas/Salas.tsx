import { reservasSalas, salas } from '@/data';
import { getSalas, getSalasReservations } from '@/redux';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ListReservasSalas } from './components/ListReservas';
import { ListSalas } from './components/ListSalas';
export interface SalasInterface {}

const Salas : React.FC<SalasInterface> = () => {
	const dispatch = useDispatch()
	useEffect(() => {
	  dispatch(getSalas(salas))
	  dispatch(getSalasReservations(reservasSalas))
	  
  },[])
	return <div style={{minHeight: "calc(100vh - 150px - 140px)", width:"100%"}}>
		<ListReservasSalas/>
		<ListSalas/>
	</div>;
};

export default Salas;

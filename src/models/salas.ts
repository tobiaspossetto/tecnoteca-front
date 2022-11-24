export interface ISalas{
    id: string,
    createdAt: Date,
}

export interface ISalasReservation{
    id:string,
    idSala:string,
    nombreUsuario:string,
    dni:Number,
    fechaDeInicio:string,
    horaDeInicio:string,
    motivo:string,
}
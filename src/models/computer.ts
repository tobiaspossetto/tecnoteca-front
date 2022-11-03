export interface IComputer{

    id: string,
    createdAt: Date,
}

export interface IComputerReservation{
    id:string,
    idComputadora:string | string[],
    nombreUsuario:string,
    dni:Number,
    fechaDeInicio:string,
    horaDeInicio:string,
    motivo:string,
    cantidadDeComputadoras:Number
}

export interface IComputerState extends IComputer, IComputerReservation{
    computers: IComputer[],
    ComputerRevervations: IComputerReservation[]
}
export class Clientes {
    constructor
        (
            public _id: string,
            public nombres: string,
            public apellidos: string,
            public telefono: number,
            public correo: string,
            public ciudad_origen: string,
            public ciudad_destino: string,
            public fecha_inicio: string,
            public fecha_fin: string,
            public cantidad_pasajeros: number,
            public tipo_servicio: string
        ) { }
}

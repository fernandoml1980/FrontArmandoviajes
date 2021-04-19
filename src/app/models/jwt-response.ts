export interface JwtReponseI{
    dataUser:{
        id:number,
        accessToken:string,
        expiresIn:string
    }
}
export interface JwtResponse{
    dataUser:{
        usuario: string,
        password: string,
        accessToke: string,
        expireIn: string
    }
};
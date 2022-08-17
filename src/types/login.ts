export interface lofinFormInt{
    username:string,
    password:string
}

export class InitData{
    loginForm:lofinFormInt={
        username:'admin',
        password:'admin'
    };
    loginFormRef:any = null
}


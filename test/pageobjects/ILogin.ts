export default interface ILogin {
    login (username: string, password: string): Promise<any>;
}

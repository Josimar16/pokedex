export class AppResponse {
    public readonly cod?: number;
    public readonly message: string;
    public readonly data?: any;

    constructor(cod = 400, message: string, data: any) {
        this.cod = cod;
        this.message = message;
        this.data = data;
    }
}
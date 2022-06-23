class House{
    door: 'open' | 'closed';
    // private key: {};
    private tenants: string[] = [];

    constructor(private key: object) {
        // this.key = key;
    }

    comeIn(name:string) {
        if (this.door === 'open') {
            this.tenants.push(name);
        }
    }
}
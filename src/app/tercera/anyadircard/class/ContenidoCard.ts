export class ContenidoCard {
    private nombreCardDinamica: string;
    private descCardDinamica; string;


    constructor(nombre: string, desc: string) {
        this.nombreCardDinamica = nombre;
        this.descCardDinamica = desc;
    }
    getNombre() {
        return this.nombreCardDinamica;
    }
    getDesc() {
        return this.descCardDinamica;
    }
}
export class ContenidoCard {
    private cardId:string;
    private nombreCardDinamica: string;
    private descCardDinamica: string;


    constructor(cardid:string,nombre: string, desc: string) {
        this.nombreCardDinamica = nombre;
        this.descCardDinamica = desc;
        this.cardId=cardid;
    }
    getNombre() {
        return this.nombreCardDinamica;
    }
    getDesc() {
        return this.descCardDinamica;
    }
    getCardId(){
        return this.cardId;
    }
}
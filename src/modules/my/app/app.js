import { LightningElement } from 'lwc';
import Tabletop from 'tabletop';

const columns = [
    { label: 'Nombre', fieldName: 'nombre' },
    { label: 'Telefono', fieldName: 'telefono', type: 'phone' },
    { label: 'Notas', fieldName: 'notas' }
];
export default class App extends LightningElement {
    columns = columns;
    data = [];

    connectedCallback() {
        Tabletop.init({
            key:
                'https://docs.google.com/spreadsheets/d/1aLqw2lTVpYHAW1LPtnrQ9w3cgSXDHFP_Ot1CDfEX9zM/edit?usp=sharing',
            simpleSheet: true
        }).then((data) => {
            this.data = data.filter((row) => row.telefono);
        });
    }
}

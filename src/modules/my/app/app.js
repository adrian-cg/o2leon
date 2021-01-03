import { LightningElement } from 'lwc';
import Tabletop from 'tabletop';

const columns = [
    { label: 'Nombre', fieldName: 'nombre', wrapText: true },
    { label: 'Telefono', fieldName: 'telefono', type: 'phone' },
    { label: 'Notas', fieldName: 'notas', wrapText: true }
];
export default class App extends LightningElement {
    columns = columns;
    data = [];
    loading = true;

    connectedCallback() {
        Tabletop.init({
            key:
                'https://docs.google.com/spreadsheets/d/1oaZEZPYqGilg1LZ0fA5quFqwPGXHzNW7BqBxPUPQkZU/edit?usp=sharing',
            simpleSheet: true
        }).then((data) => {
            this.data = data.filter((row) => row.telefono);
            this.loading = false;
        });
    }
}

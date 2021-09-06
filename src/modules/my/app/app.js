import { LightningElement } from 'lwc';
import Papa from 'papaparse';

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
        let sheetId = '1oaZEZPYqGilg1LZ0fA5quFqwPGXHzNW7BqBxPUPQkZU';
        let sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/pub?output=csv`;
        Papa.parse(sheetUrl, {
            download: true,
            header: true,
            complete: ({ data }) => {
                this.data = data.filter((row) => row.telefono);
                this.loading = false;
            }
        });
    }
}

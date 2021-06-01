import '../scss/ag-grid.scss';
import '../scss/table.scss';

import {Grid} from 'ag-grid-community';

const columnDefs = [{
        field: "make"
    },
    {
        field: "model"
    },
    {
        field: "price"
    },
    {
        field: "col1"
    },
    {
        field: "col2"
    }
];

// specify the data
const rowData = [{
        make: "Toyota",
        model: "Celica",
        price: 35000,
        col1: "FDSFS44",
        col2: "FDSFS33",
    },
    {
        make: "Ford",
        model: "Mondeo",
        price: 32000,
        col1: "FDSFS45",
        col2: "FDSFS33",
    },
    {
        make: "Porsche",
        model: "Boxter",
        price: 72000,
        col1: "FDSFS65",
        col2: "FDSF223",
    }
    ,
    {
        make: "Porschff3e",
        model: "Bo4ffGxter",
        price: 720200,
        col1: "FDSgS65",
        col2: "FdSF223",
    },
    {
        make: "Pfdsorsche",
        model: "Bdfoxter",
        price: 1222000,
        col1: "FDSFS55",
        col2: "FDSF227",
    }
];

// let the grid know which columns and what data to use
const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new Grid(gridDiv, gridOptions);
});
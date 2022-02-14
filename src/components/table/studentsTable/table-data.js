export const columnNames = [
  { field: 'name', headerName: 'Name', sortable: true },
  { field: 'id', headerName: 'ID' },
  { field: 'class', headerName: 'Class', sortable: true },
  { field: 'score', headerName: 'Av. Score, %', sortable: true },
  { field: 'speed', headerName: 'Av. Speed', sortable: true },
  { field: 'parents', headerName: 'Parents' },
];

export const scoreColor = {
  '100%': 'blue',
  '90%': 'blue',
  '80%': 'green',
  '70%': 'yellow',
  '60%': 'yellow',
  '50%': 'red',
};

export const expectColor = {
  'Below Expected': 'red',
  'As Expected': 'green',
  'Above Expected': 'blue',
};

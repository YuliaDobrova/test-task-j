import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Table = ({ students }) => {
  // console.log('students', students);
  const rows = [];
  students.map(student =>
    rows.push({
      id: student.id,
      name: student.name,
      class: student.class,
      score: student.score,
      speed: student.speed,
      parents: student.parents,
    }),
  );
  // console.log('rows', rows);

  const columns = [
    { field: 'name', headerName: 'Name', width: 200, aditable: true },
    { field: 'id', headerName: 'ID', width: 110 },
    { field: 'class', headerName: 'Class', width: 70, aditable: true },
    { field: 'score', headerName: 'Av. Score, %', width: 120, aditable: true },
    { field: 'speed', headerName: 'Av. Speed', width: 120, aditable: true },
    { field: 'parents', headerName: 'Parents', width: 300, aditable: true },
  ];
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        // disableSelectionOnClick
      />
    </div>
  );
};

export default Table;

//
//
// ===================================================
//
// import React from 'react';

// const Table = ({ list, colNames, width = 'auto', height = 'auto' }) => {
//   return (
//     <div>
//       {list.length > 0 && (
//         <table cellSpacing="0" style={{ width: width, height: height, padding: '5px 10px' }}>
//           <thead>
//             <tr>
//               {colNames.map((headerItem, index) => (
//                 <th key={index}>{headerItem.toUpperCase()}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {Object.values(list).map((obj, index) => (
//               <tr key={index}>
//                 {Object.values(obj).map((value, idx) => (
//                   <td key={idx}>{value}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Table;

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

'use client'

const DataTable = ({ data, headers }) => {

return (
  <>
    <div className="table-container" >
      <table border="0.5" style={{ width: "100%" }}>
        <thead>
          <tr>
        
          
            {headers.map((ittm,headerIndex) => {
            
              return <th key={headerIndex}>{ittm.value}</th>;
            })}
            </tr>
          
        </thead>

        <tbody>
          {data.map((item,index) => (
            <tr key={index+1}>
              {headers.map((ittm,newIndex) => {
                return <td key={newIndex}>{ittm.component ? ittm.component(item[ittm.key]): item[ittm.key]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);
};

export default DataTable;
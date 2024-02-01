export function DataDisplay(data) {

return(
<>


<h2>Data Display</h2>
      {data.length === 0 ? (
        <p>No data to display</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
</>
)


}
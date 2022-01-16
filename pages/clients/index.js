import Link from "next/link";

function ClientsPage() {

  const clients = [
    { id: "max", name : "maxmilian"},
    { id: "manu", name : "manual"}
  ];
    return (
      <div>
        <h1> The Clients Page 1</h1>
        <ul>
          {console.log(clients)}
          {clients && clients.map((client)=>(
            <li key={client.id}>
              <Link href={{
                pathname: '/clients/[id]/[clientprojectid]',
                query: { id: "hi" ,clientprojectid : client.id}
              }}>{client.name}</Link>
            </li>
          ))}
        {/* <li>
          <Link href="/clients/max">max</Link>
        </li>
        <li>
          <Link href="/clients/manu">manu</Link>
        </li> */}
      </ul>
      </div>
    );
  }
  
  export default ClientsPage;
  
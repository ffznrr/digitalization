const ListCustomer = ({ customers }) => {
  const data = [
    {
      nama: "mawar",
      umur: 25,
      alamat: "pejompongan",
      tenor: 24,
      pekerjaan: "wartawan",
      HP: "0812412424",
    },
    ...customers,
  ];
  return (
    <div className="p-20">
      <h2>Daftar Kustomer Kredit</h2>
      {data.length === 0 ? (
        <p>No data added yet.</p>
      ) : (
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th className="border-2 border-black p-2">Nama</th>
              <th className="border-2 border-black p-2">Umur</th>
              <th className="border-2 border-black p-2">Alamat</th>
              <th className="border-2 border-black p-2">Tenor</th>
              <th className="border-2 border-black p-2">Pekerjaan</th>
              <th className="border-2 border-black p-2">Nomor HP</th>{" "}
            </tr>
          </thead>
          <tbody>
            {data.map((customer, index) => (
              <tr key={index}>
                <td className="border-2 border-black p-2">{customer.nama}</td>
                <td className="border-2 border-black p-2">{customer.umur}</td>
                <td className="border-2 border-black p-2">{customer.alamat}</td>
                <td className="border-2 border-black p-2">{customer.tenor}</td>
                <td className="border-2 border-black p-2">
                  {customer.pekerjaan}
                </td>
                <td className="border-2 border-black p-2">{customer.HP}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListCustomer;

import { useState } from "react";
import ListCustomer from "./listcustomer";

function App() {
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tenor, setTenor] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [HP, setHP] = useState("");
  const [customers, setCustomers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCustomer = { nama, umur, alamat, tenor, pekerjaan, HP };

    setCustomers([...customers, newCustomer]);

    setNama("");
    setUmur("");
    setAlamat("");
    setTenor("");
    setPekerjaan("");
    setHP("");
  };

  return (
    <div className="App">
      <h1 className="text-center">Form Input Kustomer Kredit</h1>
      <form onSubmit={handleSubmit} className="p-24">
        <div>
          <label htmlFor="nama">Nama:</label>
          <input
            className="border-2 border-black w-full mb-5"
            type="text"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="umur">Umur:</label>
          <input
            className="border-2 border-black w-full mb-5"
            type="number"
            id="umur"
            value={umur}
            onChange={(e) => setUmur(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="alamat">Alamat:</label>
          <textarea
            className="border-2 border-black w-full mb-5"
            id="alamat"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tenor">Tenor (bulan):</label>
          <input
            className="border-2 border-black w-full mb-5"
            type="number"
            id="tenor"
            value={tenor}
            onChange={(e) => setTenor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pekerjaan">Pekerjaan:</label>
          <input
            className="border-2 border-black w-full mb-5"
            type="text"
            id="pekerjaan"
            value={pekerjaan}
            onChange={(e) => setPekerjaan(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="HP">Nomor HP:</label>
          <input
            className="border-2 border-black w-full mb-5"
            type="text"
            id="HP"
            value={HP}
            onChange={(e) => setHP(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button type="submit">Submit</button>
        </div>
      </form>

      <ListCustomer customers={customers} />
    </div>
  );
}

export default App;

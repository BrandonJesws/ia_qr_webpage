import { useState } from "react";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[url('./assets/fondo.svg')] bg-no-repeat bg-cover h-screen">
      <div className="flex flex-row w-full">
        <div className="p-2">
          <img
            src="/logoIA.ico"
            className="w-20"
            alt="logo instituto de adoracion"
          />
        </div>
        <div className="flex flex-row items-center h-16 bg-transparent pt-2">
          <p
            className="font-bold text-xl text-neutral-800"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Instituto de Adoración
          </p>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center pt-10 px-10">
        <div
          className="max-w-96 rounded-lg overflow-hidden shadow-2xl shadow-neutral-400 hover:shadow-neutral-600 cursor-pointer"
          onClick={() => {
            setOpen(true);
          }}
        >
          <img
            src="./src/assets/cartelCampamento.png"
            alt="campamento verano musical"
          />
        </div>
      </div>
      {/* Modal Drawer */}
      {open && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          {/* Botón de cierre */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#FFF"
              strokeWidth={3}
              width={28}
              height={28}
              className="cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Imagen centrada y responsiva */}
          <img
            src="./src/assets/cartelCampamento.png" // cambia por la ruta real
            alt="Campamento Verano Musical"
            className="max-w-full max-h-full object-contain rounded shadow-lg"
          />
        </div>
      )}
      {/*<img
        src="https://quickchart.io/qr?text=https://institutodeadoracion.vercel.app&size=1000"
        alt="Código QR"
      />*/}
    </div>
  );
}

export default App;

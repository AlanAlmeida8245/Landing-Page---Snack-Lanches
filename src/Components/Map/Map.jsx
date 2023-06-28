export default function Map() {
    return (
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center mt-20">
        <div className="m-6 border-4 rounded border-orange-400 shadow-lg">
          <iframe
            title="Google Maps"
            className="w-full md:w-96 h-72 md:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.73218474282!2d-122.08467248677812!3d37.42240368703907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7ebedbacddcb%3A0xf2f47e3d1f6a4f7e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1560320316884!5m2!1sen!2sus"
            allowFullScreen
          ></iframe>
        </div>
        <div className="space-y-2">
          <h2 className="text-white text-5xl text-center font-medium">Venha nos visitar</h2>
          <p className="text-white text-center md:text-left">
            Avenida Ficticia Nº47, Rua 96, Salvador, Camaçari - BA
          </p>
        </div>
      </div>
    );
  }
  
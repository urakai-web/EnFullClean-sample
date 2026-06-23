export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-sky-light py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4">

        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-navy/50 uppercase mb-3">Service Area</span>
          <h2 className="text-2xl md:text-3xl font-black text-navy">
            福岡市を中心にご対応しています
          </h2>
          <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-navy"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
          <p className="text-navy/80 leading-relaxed text-base md:text-lg text-center">
            <span className="font-bold text-navy">福岡市</span>を中心にご対応しています。<br className="hidden md:block" />
            <span className="font-bold text-navy">糸島市・春日市・大野城市</span>など近隣エリアもご対応可能です。<br className="hidden md:block" />
            お気軽にご相談ください！
          </p>
        </div>

      </div>
    </section>
  )
}

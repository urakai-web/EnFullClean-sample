const LINE_URL = 'https://line.me/R/ti/p/@953rznmz'

const airconPricing = [
  { name: '家庭用ルームエアコン', price: '6,500円' },
  { name: 'お掃除機能付きエアコン', price: '13,000円〜' },
  { name: '天井埋込/業務用エアコン', price: '20,000円〜' },
]

const optionPricing = [
  { name: '室外機洗浄', price: '2,000円' },
  { name: '防カビ・抗菌コート', price: '2,000円', recommended: true },
  { name: 'キッチン換気扇クリーニング', price: '12,000円' },
  { name: '浴室クリーニング', price: '18,000円' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4">

        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-navy/50 uppercase mb-3">Pricing</span>
          <h2 className="text-2xl md:text-3xl font-black text-navy">料金プラン</h2>
          <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-navy"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-sky-light rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-black text-navy mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-navy inline-block"></span>
              エアコンクリーニング
            </h3>
            <div className="space-y-4">
              {airconPricing.map(item => (
                <div key={item.name} className="flex items-center justify-between border-b border-navy/10 pb-3">
                  <span className="text-navy/80 text-sm md:text-base">{item.name}</span>
                  <span className="text-navy font-black text-lg md:text-xl">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-line-green/10 border border-line-green/30 rounded-xl px-4 py-3 text-center">
              <p className="text-navy font-bold text-sm">2台以上のご予約で <span className="text-line-green text-lg font-black">1,000円OFF</span></p>
            </div>
          </div>

          <div className="bg-sky-light rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-black text-navy mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-navy inline-block"></span>
              オプション・その他
            </h3>
            <div className="space-y-4">
              {optionPricing.map(item => (
                <div key={item.name} className="flex items-center justify-between border-b border-navy/10 pb-3">
                  <span className="text-navy/80 text-sm md:text-base flex items-center gap-2">
                    {item.name}
                    {item.recommended && (
                      <span className="bg-line-green text-white text-xs font-bold px-2 py-0.5 rounded-full">オススメ</span>
                    )}
                  </span>
                  <span className="text-navy font-black text-lg md:text-xl">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <p className="mt-6 text-center text-sm text-navy/50">※表示価格は全て税込みです。追加料金は発生しません。</p>

        <div className="mt-8 text-center">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-line-green text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:opacity-90 active:scale-95 transition-all"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .629.285.629.63v4.141h1.757c.348 0 .63.283.63.63 0 .344-.282.629-.63.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            LINEで予約・相談する
          </a>
        </div>

      </div>
    </section>
  )
}

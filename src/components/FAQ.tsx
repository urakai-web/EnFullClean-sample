import { useState } from 'react'

const faqs = [
  {
    q: 'エアコンクリーニングの作業時間はどのくらいですか？',
    a: '家庭用ルームエアコンで約60分程度です。',
  },
  {
    q: '子供やペットがいても大丈夫ですか？',
    a: '問題ありません。洗剤や周囲にも配慮して作業いたします。',
  },
  {
    q: '追加料金は発生しますか？',
    a: '追加料金は発生しません。表示価格はすべて税込です。',
  },
  {
    q: '駐車場がなくても大丈夫ですか？',
    a: '敷地内に駐車場がない場合は、コインパーキングを利用しますのでご安心ください。',
  },
  {
    q: '作業前に準備することはありますか？',
    a: 'エアコンの下に、スペースを空けていただけると助かります。',
  },
  {
    q: 'エアコンの下に家具がありますが大丈夫ですか？',
    a: '可能な限りご移動をお願いしております。難しい場合は、ご予約時にご相談ください。',
  },
  {
    q: 'エアコンの機種がわからなくても大丈夫ですか？',
    a: '大丈夫です。お写真を送っていただければこちらで確認いたします。',
  },
  {
    q: 'どのタイミングでクリーニングするべきですか？',
    a: '基本的には1年に1度のクリーニングがおすすめです。',
  },
  {
    q: '早朝や夜間の依頼は可能ですか？',
    a: '日程次第でご対応可能です。お気軽にご相談ください。',
  },
  {
    q: '当日に追加依頼は可能ですか？',
    a: 'スケジュール次第でご対応可能です。お気軽にご相談ください。',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-navy/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-navy font-bold text-sm md:text-base flex items-center gap-3">
          <span className="text-line-green font-black text-lg shrink-0">Q</span>
          {q}
        </span>
        <svg
          className={`w-5 h-5 text-navy/40 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 pl-9">
          <p className="text-navy/70 text-sm md:text-base leading-relaxed flex items-start gap-3">
            <span className="text-navy font-black text-lg shrink-0">A</span>
            {a}
          </p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4">

        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-navy/50 uppercase mb-3">FAQ</span>
          <h2 className="text-2xl md:text-3xl font-black text-navy">よくあるご質問</h2>
          <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-navy"></div>
        </div>

        <div className="bg-sky-light rounded-2xl px-6 md:px-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>

      </div>
    </section>
  )
}

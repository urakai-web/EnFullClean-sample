const reviews = [
  {
    id: '1',
    name: '匿名さん',
    service: 'エアコンクリーニング / 壁掛けタイプ',
    text: 'エアコンクリーニングしていただいてありがとうございました！お二人で来ていただいて1時間もかからずにスムーズにお掃除していただき早かったです！作業される際は都度お声がけ頂いて相談や疑問にも丁寧に説明して下さいました。最後のビフォーアフターの写真をみて一年も住んでないのにカビが生えてびっくりしました。対策もお話ししてもらえたので良かったです。またお願いしたいと思いました！ありがとうございます！！',
  },
  {
    id: '2',
    name: 'NNさん',
    service: 'エアコンクリーニング / 壁掛けタイプ',
    text: '人生で初めてのエアコンクリーニングでした。奥様？と一緒にいらっしゃって、テキパキ働かれていたため、30分もかからず完了されました。終了後、清掃前と後の写真も見せていただけて、きれいにお掃除してもらえたことが確認できてありがたかったです。とても感じの良い雰囲気で、安心してお任せすることできました。また来年もお任せしたいと思います。',
  },
  {
    id: '3',
    name: '匿名さん',
    service: 'エアコンクリーニング / 壁掛けタイプ',
    text: 'とても丁寧で良かったです。ありがとうございます',
  },
  {
    id: '4',
    name: '匿名さん',
    service: 'エアコンクリーニング / 壁掛けタイプ',
    text: 'お二人で作業して下さり、迅速に作業終了されてました！お二人共感じ良く、エアコン洗浄だけのお願いでしたが、室外機も洗浄したほうがいいとの事だったので、ついお願いしてしまいました笑 また、来年お願いしようと、思います！',
  },
  {
    id: '5',
    name: '匿名さん',
    service: 'エアコンクリーニング / 壁掛けタイプ',
    text: '男性と女性の２人で施行して頂きましたが、私達が考えていた時間よりかなり早く終わり助かりました。また仕上がりも見せて頂きましたがとても綺麗でした。何よりも2人がとても感じが良くてよかった。次回もお願いしたいです',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-sky-light py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">

        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-navy/50 uppercase mb-3">Reviews</span>
          <h2 className="text-2xl md:text-3xl font-black text-navy">お客様の声</h2>
          <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-navy"></div>
        </div>

        <div
          className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
        >
          {reviews.map(review => (
            <article
              key={review.id}
              className="shrink-0 w-80 bg-white rounded-2xl p-6 shadow-sm"
            >
              <Stars />
              <p className="mt-1 text-xs text-navy/50">{review.name} / {review.service}</p>
              <p className="mt-3 text-sm text-navy/80 leading-relaxed">{review.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-navy/40 md:hidden">&larr; スワイプで見る &rarr;</p>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm">
            <span className="text-navy font-bold text-sm">2人体制でお伺いするため、長時間お家に滞在することなくスムーズに作業できます</span>
          </div>
        </div>

      </div>
    </section>
  )
}

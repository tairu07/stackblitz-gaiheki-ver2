import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'サービス内容 | 外壁見積もり窓口',
  description:
    '外壁塗装の各種サービス内容をご紹介。お客様のニーズに合わせた最適なプランをご提案します。',
};

export default function ServicesPage() {
  // サービス情報の配列
  const services = [
    {
      id: 'exterior',
      title: '外壁塗装',
      description:
        '建物の美観を保ち、外壁を保護するための塗装サービス。耐久性・耐候性に優れた塗料で、長期間美しい外観を維持します。',
      features: [
        '紫外線や雨風からの保護',
        '建物の寿命延長',
        'ひび割れ・カビ対策',
        '見た目の美しさアップ',
      ],
    },
    {
      id: 'roof',
      title: '屋根塗装',
      description:
        '屋根の保護と美観維持のための塗装サービス。高耐久性の塗料で屋根材を守り、熱反射効果による省エネ効果も期待できます。',
      features: [
        '雨漏り防止',
        '紫外線による劣化防止',
        '遮熱効果による冷暖房費削減',
        '建物の価値維持',
      ],
    },
    {
      id: 'waterproof',
      title: '防水工事',
      description:
        'ベランダやバルコニー、屋上などの防水処理。雨水の侵入を防ぎ、建物の耐久性を高めます。',
      features: [
        '雨漏り対策',
        '建物内部への水の侵入防止',
        '構造体の保護',
        '結露やカビの発生予防',
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          サービス内容
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          外壁見積もり窓口では、建物の保護と美観向上のための様々なサービスを提供しています。
          お客様のニーズに合わせた最適なプランをご提案いたします。
        </p>

        {/* サービス一覧 */}
        <div className="space-y-12 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-600">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-6">{service.description}</p>

                <h3 className="font-semibold text-lg mb-3">主な特徴</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <div className="mt-4">
                  <Link
                    href="/quote"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200"
                  >
                    見積もりを依頼する
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* よくある質問 */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">よくある質問</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-lg mb-2">
                塗装工事はどのくらいの期間がかかりますか？
              </h3>
              <p className="text-gray-600">
                一般的な戸建て住宅の場合、天候にもよりますが外壁・屋根塗装で約2〜3週間程度かかります。
                物件の大きさや施工内容によって変わりますので、詳しくは見積もり時にご案内します。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-lg mb-2">
                塗料の種類はどのように選べばよいですか？
              </h3>
              <p className="text-gray-600">
                耐久性、機能性、コストなど様々な要素があります。アクリル、ウレタン、シリコン、フッ素などの種類がありますが、
                ご予算や建物の状態、お住まいの環境に応じて最適な塗料をご提案いたします。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-lg mb-2">
                一括見積もりを依頼するメリットは何ですか？
              </h3>
              <p className="text-gray-600">
                複数の業者から見積もりを取ることで、適正価格の把握や各社のサービス内容を比較できます。
                また、当サイトでは厳選された優良業者のみをご紹介しているため、安心して工事を依頼できます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

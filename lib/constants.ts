export const dailyQuestions=["今、一番引っかかっている感情は何ですか？","本当はやりたいのに、怖くて避けていることは何ですか？","最近の違和感はどこから来ていますか？","誰の期待に応えようとしていますか？","今の選択は、本当に自分で選んだものですか？","5年後の自分が今の自分に言うとしたら、何と言いそうですか？"];
export const todayQuestion=()=>dailyQuestions[new Date().getDate()%dailyQuestions.length];

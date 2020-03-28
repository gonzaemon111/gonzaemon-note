<template>
  <div class="cards">
    <div class="card" v-for="(item, index) in items" :key="index">
      <img class="card__image" :src="item.image" alt="wave" />
      <div class="card-title">
        <!-- <a href="#" class="toggle-info btn">
          <span class="left"></span>
          <span class="right"></span>
        </a> -->
        <h2>
            {{item.title}}
        </h2>
      </div>
      <!-- <div class="card-flap flap1"> -->
        <div class="card-description">
          <small> 制作期間 : {{ item.term }} </small>
          <br>
          {{ item.description }}
        </div>
        <!-- <div class="card-flap flap2">
          <div class="card-actions">
            <a href="#" class="btn">Read more</a>
          </div>
        </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Waffle',
          image: '/img/Waffle.png',
          term: '現在制作途中',
          description: '早稲田大学生向け時間割単位管理アプリケーション！Dockerで開発環境を整えて4種類のDB(MySQL, Redis, ElasticSearch, DynamoDB)を使用。Ruby on Railsは最新6.0を使っている'
        },
        {
          title: 'Gestione',
          image: '/img/gestione.png',
          term: '1週間',
          description: 'Ruby on Railsを使った開発。目標をベースとしたタスク・時間管理アプリケーションです。現在運用中です。https://gestione-app.herokuapp.com/'
        },
        {
          title: 'MyDiary',
          image: '/img/MyDiary.jpg',
          term: '１ヶ月',
          description: 'LineMessagingAPIを利用した日記アプリケーション。リマインダー機能も含んでいます。非同期処理や複雑なCRUD処理などの勉強もしました。'
        },
        {
          title: 'QiitaNews',
          image: '/img/QiitaNews.jpg',
          term: '3時間',
          description: 'Qiitaの新News記事をSlackのチャンネルに配信する簡易アプリケーション。簡単に実装したかったため、Ruby1枚のファイルで実装しました。'
        },
        {
          title: 'HCR-AI',
          image: '/img/HCRAI.png',
          term: '約1ヶ月',
          description: 'HandWritten Character Recoginition(手書き文字認識)で機械学習の勉強として実装してみました。初Pythonだったので、文法の勉強も一からはじめました。'
        },
        {
          title: '技術ブログ',
          image: '/img/note.png',
          term: '1日',
          description: '最近流行りの静的サイトジェネレーターVuepressを使って技術ブログを作成しました。制作期間1日という爆速で作りました。'
        }
      ]
    };
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 200;
  src: local('Source Sans Pro ExtraLight'), local('SourceSansPro-ExtraLight'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wlxdr.ttf) format('truetype');
}
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  src: local('Source Sans Pro Light'), local('SourceSansPro-Light'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdr.ttf) format('truetype');
}
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7g.ttf) format('truetype');
}
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  src: local('Source Sans Pro SemiBold'), local('SourceSansPro-SemiBold'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdr.ttf) format('truetype');
}
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwlxdr.ttf) format('truetype');
}
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 900;
  src: local('Source Sans Pro Black'), local('SourceSansPro-Black'), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwlxdr.ttf) format('truetype');
}
body {
  background: #dce1df;
  color: #4f585e;
  /* font-family: 'Source Sans Pro', sans-serif; */
  text-rendering: optimizeLegibility;
}
a.btn {
  background: #0096a0;
  border-radius: 4px;
  box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.25);
  color: #ffffff;
  display: inline-block;
  padding: 6px 30px 8px;
  position: relative;
  text-decoration: none;
  transition: all 0.1s 0s ease-out;
}
.no-touch a.btn:hover {
  background: #00a2ad;
  box-shadow: 0px 8px 2px 0 rgba(0, 0, 0, 0.075);
  transform: translateY(-2px);
  transition: all 0.25s 0s ease-out;
}
.no-touch a.btn:active,
a.btn:active {
  background: #008a93;
  box-shadow: 0 1px 0px 0 rgba(255, 255, 255, 0.25);
  transform: translate3d(0, 1px, 0);
  transition: all 0.025s 0s ease-out;
}
div.cards {
  margin: 80px auto;
  max-width: 960px;
  text-align: center;
}
div.card {
  background: #ffffff;
  display: inline-block;
  margin: 8px;
  max-width: 300px;
  perspective: 1000;
  position: relative;
  text-align: left;
  transition: all 0.3s 0s ease-in;
  z-index: 1;
}
div.card img {
  max-width: 300px;
  min-width: 300px;
}
div.card div.card-title {
  background: #ffffff;
  padding: 6px 15px 10px;
  position: relative;
  text-align: center;
  z-index: 0;
}
div.card div.card-title a.toggle-info {
  border-radius: 32px;
  height: 32px;
  padding: 0;
  position: absolute;
  right: 15px;
  top: 10px;
  width: 32px;
}
div.card div.card-title a.toggle-info span {
  background: #ffffff;
  display: block;
  height: 2px;
  position: absolute;
  top: 16px;
  transition: all 0.15s 0s ease-out;
  width: 12px;
}
div.card div.card-title a.toggle-info span.left {
  right: 14px;
  transform: rotate(45deg);
}
div.card div.card-title a.toggle-info span.right {
  left: 14px;
  transform: rotate(-45deg);
}
div.card div.card-title h2 {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.05em;
  margin: 0;
  padding: 0;
}
div.card div.card-title h2 small {
  display: block;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.025em;
}
div.card div.card-description {
  padding: 0 15px 10px;
  position: relative;
  font-size: 14px;
}
div.card div.card-actions {
  box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.075);
  padding: 10px 15px 20px;
  text-align: center;
}
div.card div.card-flap {
  background: #d9d9d9;
  position: absolute;
  width: 100%;
  transform-origin: top;
  transform: rotateX(-90deg);
}
div.card div.flap1 {
  transition: all 0.3s 0.3s ease-out;
  z-index: -1;
}
div.card div.flap2 {
  transition: all 0.3s 0s ease-out;
  z-index: -2;
}
div.cards.showing div.card {
  cursor: pointer;
  opacity: 0.6;
  transform: scale(0.88);
}
.no-touch div.cards.showing div.card:hover {
  opacity: 0.94;
  transform: scale(0.92);
}
div.card.show {
  opacity: 1 !important;
  transform: scale(1) !important;
}
div.card.show div.card-title a.toggle-info {
  background: #ff6666 !important;
}
div.card.show div.card-title a.toggle-info span {
  top: 15px;
}
div.card.show div.card-title a.toggle-info span.left {
  right: 10px;
}
div.card.show div.card-title a.toggle-info span.right {
  left: 10px;
}
div.card.show div.card-flap {
  background: #ffffff;
  transform: rotateX(0deg);
}
div.card.show div.flap1 {
  transition: all 0.3s 0s ease-out;
}
div.card.show div.flap2 {
  transition: all 0.3s 0.2s ease-out;
}
</style>

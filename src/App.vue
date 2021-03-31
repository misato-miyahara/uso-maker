<template>
<!-- CSS設計めんどくさいみょーん -->
<!-- PRECSSとインラインCSSが混ざってますが許してちょんまげ -->
<div class="ly_wrapper">
  <div style="text-align: center;">
    <h1 class="el_rainbow">超絶面白いうそメーカーを作りました！！</h1>
  </div>
  <div class="bl_maker">
    <p style="
      font-size: 1.2rem;
      font-weight: bold;
    ">
      じつは私...
    </p>
    <ul class="bl_maker_slots" style="margin-bottom: 30px;">
      <li>
        <Slot :items="items[0]" />
      </li>
      <li>
        <Slot :items="items[1]" />
      </li>
      <li>
        <Slot :items="items[2]" />
      </li>
    </ul>
    <p style="
      text-align: right;
      font-size: 1.2rem;
      font-weight: bold;
    "
    >
      なんです！！
    </p>
  </div>
  <div class="bl_share">
    <a class="bl_share_link" @click="share">皆にも知らしめよう！</a>
  </div>
</div>
</template>

<script>
import Slot from './components/Slot.vue'

export default {
  name: 'App',
  components: {
    Slot
  },
  data () {
    return {
      twitter:'https://twitter.com/intent/tweet?url=https://yahoo.co.jp&text=ヤフーのサイト&hashtags=孫正義,ヤフー',
      items: [
        [
          '超絶可愛い',
          'ちょっと臭い',
          '最強で',
          'スキンヘッドで',
          'モヒカンで',
          '膝裏に興奮する'
        ],
        [
          '無人島住みの',
          '健気な',
          '頭のおかしな',
          '厨二病な',
          'パンツを被る',
          '泣き虫な',
          '厨二病な',
          '生きて腸に届く'
        ],
        [
          '女の子',
          '男の子',
          '男の娘',
          'サディスト',
          'ド変態',
          'エクソシスト',
          '殺人鬼',
          '長男',
          '末っ子長男',
          '童貞',
          '凡人',
          'ガキンチョ',
          '社長令嬢ですの',
          '主人公',
          'ビフィズス菌',
          '大腸菌'
        ]
      ]
    }
  },
  methods: {
    share () {
      location.href = 'https://twitter.com/intent/tweet?text=私は"うんち"です！！&url=https://misato-miyahara.github.io/uso-maker/'
    }
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@400;800&display=swap'
      }
    ]
  }
}
</script>

<style>
ul {
  list-style: none;
}
</style>

<style scoped>
html {
  font-size: 62.5%;
}
body {
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 1.4em;
}
.bl_maker_slots {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.el_rainbow {
  color: #FF8C00;
  background: -webkit-linear-gradient(0deg, #0051ff, #ff0095, #09ff00, #eeff00, #ff3232);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bl_share {
  text-align: center;
}
.bl_share_link {
  cursor: pointer;
  text-decoration: underline;
  color: rgb(0, 4, 255);
}
@media screen and (max-width: 800px) {
  .bl_maker_slots {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
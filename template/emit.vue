<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <child @child-event="handler($event, index)">
        {{ item.name }}
      </child>
    </div>
  </div>
</template>

<script>
import Child from './emit_child.vue'

export default {
  components: {
    Child,
  },
  data:function() {
    // body...
    return {
      items: [
        { name: 'たろう' },
        { name: 'はなこ' },
      ],
    }
  },
  methods: {
    handler(event, index) {
      //ボタンごとにメソットを追加しているから
      //読み込まれたメソットから返した値が要素ごとに追加される。
      //パラメータとして指定されたIndexでオブジェクトの索引が分かる。
      console.log('first '+event);
      console.log('second ' + index);
    },
  },
}
</script>
<!-- 参照：https://qiita.com/tsuka-rinorino/items/fef323e9e83260b1ae6f -->
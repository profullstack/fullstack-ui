<template>
  <div class="keywords">

    <form @submit.prevent="onSubmit">
      <h1>List name</h1>
      <div>
        <input type="text" v-model="name" placeholder="Enter name">
      </div>
      <h1>Keywords</h1>
      <div>
        <input type="text" v-model="keyword" placeholder="Enter keyword">
      </div>
      <div class="actions">
        <button>Add</button>
        <ul class="keywords">
          <li v-for="keyword in keywords"
              :key="keyword.id">
            {{keyword}}
            <a href="#" @click.prevent="deleteKeyword(keyword)">x</a>
          </li>
        </ul>
        <button @click.prevent="onSave">Save</button>
      </div>
    </form>

    <section class="lists">
      <h2>Lists</h2>
      <ul>
        <li v-for="item in list"
            :key="item.id">
          <h3>{{item.name}} <a href="#" @click.prevent="deleteItem(item)">x</a></h3>
          <ol>
            <li v-for="kw in item.keywords"
                :key="kw.id">{{kw}}</li>
          </ol>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import * as types from '../store/types';

export default {
  name: 'keywords',
  data() {
    return {
      keywords: [],
      keyword: '',
      name: '',
    };
  },

  computed: {
    ...mapGetters({
      item: types.KEYWORD_ITEM,
      list: types.KEYWORD_LIST,
    }),
  },

  created() {
    this.getAll();
  },

  watch: {
    $route: 'getAll',
  },

  methods: {
    ...mapActions({
      post: types.KEYWORDS_POST,
      put: types.KEYWORDS_PUT,
      delete: types.KEYWORDS_DELETE,
      get: types.KEYWORDS_GET,
      getAll: types.KEYWORDS_ALL,
    }),

    deleteKeyword(keyword) {
      this.keywords = this.keywords.filter(kw => kw !== keyword);
    },

    deleteItem(item) {
      this.delete(item)
        .then(this.getAll);
    },

    onSave() {
      this.post({
        keywords: this.keywords,
        name: this.name,
      })
        .then(this.getAll);
    },

    onSubmit() {
      this.keywords.push(this.keyword);
      this.keyword = '';
    },
  },
};
</script>

<style lang="scss" scoped>
  .lists {
    ul,
    ol {
      padding-left: 2rem;
    }
  }
</style>

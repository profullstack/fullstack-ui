<template>
  <div class="parse">

    <form @submit.prevent="onSubmit">
      <h1>Parse</h1>
      <div>
        <input type="text" v-model="keyword" placeholder="Enter keyword">
      </div>
      <div class="actions">
        <button>Add</button>
        <ul class="keywords">
          <li v-for="keyword in keywords"
              :key="keyword.id">{{keyword}}</li>
        </ul>
        <button @click.prevent="getData">Parse</button>
      </div>
    </form>

    <ol class="results">
      <li v-for="item in results"
          :key="item.id">
        <a :href="item.url" target="_new">{{item.title}}</a>
        <div class="meta">
          <div>
            <a href="#" @click.prevent="setModalItem(item)" class="secondary">data</a>
            <span class="source">{{item.source}}</span>
          </div>
          <div class="author">
            <div class="date">{{item.updatedAt}}</div>
            <div class="hostname">{{item.hostname.replace('www.', '')}}</div>
            <div v-if="item.og.authors">{{item.og.authors.join(', ')}}</div>
          </div>
          <div class="media-image" :style="{ backgroundImage:
          `url(${item.og.image || defaultImage})` }"></div>
        </div>
      </li>
    </ol>

    <modal v-if="showModal" @close="closeModal()">
      <h2 slot="header">data</h2>
      <code slot="body">
        <pre>{{modalItem}}</pre>
      </code>
    </modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import * as types from '../store/types';
import Modal from './Modal.vue';

export default {
  name: 'parse',
  components: { Modal },
  data() {
    return {
      user: '',
      keywords: [],
      keyword: '',
      defaultImage: '/static/icon-disabled.svg',
      modalItem: '',
    };
  },

  computed: {
    ...mapGetters({
      results: types.PARSE_RESULTS,
    }),

    showModal() {
      return this.$store.state.isModalOpen;
    },
  },

  methods: {
    ...mapActions({
      parse: types.PARSE_ALL,
    }),

    getData() {
      this.parse({
        queries: this.keywords,
      });
    },

    onSubmit() {
      this.keywords.push(this.keyword);
      this.keyword = '';
    },

    setModalItem(item) {
      this.modalItem = item;
      this.$store.commit('toggleModal', true);
    },

    closeModal() {
      this.$store.commit('toggleModal', false);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

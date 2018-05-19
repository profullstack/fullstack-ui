<template>
  <div class="search">

    <form @submit.prevent="onSubmit">
      <h1>Search</h1>
      <div>
        <input type="text" v-model="keyword" placeholder="Enter keyword">
      </div>
      <div class="actions">
        <button>Add</button>
        <ul class="keywords">
          <li v-for="keyword in keywords"
              :key="keyword.id">{{keyword}}</li>
        </ul>
        <button type="button" @click.prevent="getData">Search</button>
      </div>
    </form>


    <ol class="results">
      <li v-for="item in results" :key="item.id">
        <a :href="item.source.original" target="_new">{{item.title || item.text}}</a>
        <div class="meta">
          <div>
            <a href="#" @click.prevent="setModalItem(item)" class="secondary">data</a>
            <span class="source">{{item.source.provider}}/{{item.source.path}}</span>
          </div>
          <div class="author">
            <div class="date">{{item.createdAt}}</div>
          </div>
          <div class="media-image"
               :style="{ backgroundImage: `url(${item.media.images.length &&
               item.media.images[0] || defaultImage})` }"></div>
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
  name: 'search',
  components: { Modal },
  data() {
    return {
      user: '',
      keyword: '',
      keywords: [],
      defaultImage: '/static/icon-disabled.svg',
      modalItem: '',
    };
  },

  computed: {
    ...mapGetters({
      results: types.SEARCH_RESULTS,
    }),

    showModal() {
      return this.$store.state.isModalOpen;
    },
  },

  methods: {
    ...mapActions({
      search: types.SEARCH_ALL,
    }),

    getData() {
      this.search({
        query: this.keywords.shift(),
      });
    },

    onSubmit() {
      this.keywords = [this.keyword];
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

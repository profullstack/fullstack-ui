<template>
  <div id="modal-overlay">
    <div id="modal-content">
      <header>
        <slot name="header">
          <h2>header</h2>
        </slot>
      </header>
      <section>
        <slot name="body">
          body here
        </slot>
      </section>
      <footer>
        <slot name="footer">
          <button @click="$emit('close')">ok</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  #modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .6);;
    padding: 5rem;

    #modal-content {
      padding: 1rem;
      color: #000;
      background: #fff;
      border-radius: 1.2rem;

      header,
      footer {
        padding: 0 h2 {
          color: inherit;
          padding: 0;
          margin: 0;
        }
      }

      header {
        padding-bottom: 1rem;
      }

      footer {
        text-align: right;
        padding-top: 1rem;

        button {
          margin: 0;
        }
      }

      section {
        overflow: auto;
        height: 57vh;
      }
    }
  }
</style>

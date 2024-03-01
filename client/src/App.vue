<script>
  import Modal from './components/Modal.vue';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import ChatCard from './components/ChatCard.vue';
  
  export default {
    components: {
      Modal,
      Header,
      Footer,
      ChatCard,
    }
  }
</script>

<template>
  <div>
    <Modal />

    <div class="flex flex-col h-screen">   
      <Header />
      <main class="w-full flex-1 overflow-hidden">
        <div class="w-full flex flex-col justify-end gap-4 px-4 py-4">
          <div v-if="!messages" class="w-full p-4 flex items-center justify-center">
            <p class="text-zinc-400 text-sm">Sem mensagens para mostrar</p>
          </div>

          <ChatCard v-else v-for="message of messages" :key="message.id" />
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>
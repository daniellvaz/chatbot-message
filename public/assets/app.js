import Modal from "./components/modal.js";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import ChatCard from "./components/chat-card.js";

export default {
  data() {
    return {
      messages: null,
    };
  },
  components: {
    Modal,
    Header,
    Footer,
    ChatCard,
  },
  onMounted() {},
  template: `
    <Modal />
    <div class="flex flex-col h-screen">   
      <Header />
      <main class="w-full flex-1 overflow-hidden">
        <div class="w-full flex flex-col justify-end gap-4 px-4 py-4">
          <div v-if="!messages" class="w-full p-4 flex items-center justify-center">
            <p class="text-zinc-400 text-sm">Sem mensagens para mostrar</p>
          </div>

          <ChatCard v-else v-for="message of messages" />
        </div>
      </main>
      <Footer />
    </div>
  `,
};

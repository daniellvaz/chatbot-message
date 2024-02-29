const socket = io();

export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    async submit() {
      const data = {
        message: this.message,
      };

      socket.emit("message", JSON.stringify(data));
    },
  },
  template: `
    <footer class="border-t">
      <div class="container flex items-center justify-center gap-4 px-4 py-4">
        <input
          v-model="message"
          type="text"
          placeholder="Type a message"
          class="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-full flex-1"
        />
        <button
          @click="submit()"
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-zinc-50 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-950 text-primary-foreground hover:bg-zinc-950/90 h-10 w-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-5 h-5"
          >
            <path d="m22 2-7 20-4-9-9-4Z"></path>
            <path d="M22 2 11 13"></path>
          </svg>
        </button>
      </div>
    </footer>
  `,
};

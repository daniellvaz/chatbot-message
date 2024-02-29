export default {
  template: `
    <header class="border-b">
      <div class="container px-4 py-2 flex items-center gap-4">
        <div class="flex items-center gap-2">
          <span
            class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8"
          ></span>
          <h1 class="text-lg font-bold">Support</h1>
        </div>
        <button
          class="bg-zinc-950 text-zinc-50 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-zinc-950/90 transition-colors h-9 rounded-md px-3"
        >
          New chat
        </button>
      </div>
    </header>
  `,
};

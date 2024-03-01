<script>
export default {
  methods: {
    toggleModal() {
      console.log("teste");
    },
  },
  data() {
    return {};
  },
};
</script>
<template>
  <div
    class="w-full h-screen absolute top-0 left-0 bg-zinc-950/5 flex items-center justify-center"
  >
    <form class="w-full max-w-[600px] bg-zinc-50 rounded">
      <div class="w-full p-4 flex items-center justify-between">
        <div class="flex flex-col">
          <strong class="text-xl">Cadastro</strong>
          <small
            >Precisamos registar seu nome e seu e-mail para prosseguir!</small
          >
        </div>

        <button
          type="button"
          @click="toggleModal"
          class="px-2 py-1 bg-zinc-100 border border-zinc-200 text-zinc-500 text-xs rounded hover:bg-zinc-200 transition-colors"
        >
          X
        </button>
      </div>
      <div class="p-4">
        <div>
          <label class="mr-4" id="name" for="name">Nome</label>
          <input
            class="w-full max-w-[270px] p-2 bg-zinc-100 border border-zinc-200 rounded"
            id="name"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="mr-4" for="email">E-mail</label>
          <input
            class="w-full max-w-[270px] p-2 bg-zinc-100 border border-zinc-200 rounded"
            id="email"
            type="email"
          />
        </div>
      </div>
      <div class="p-4 flex gap-4 items-center justify-end">
        <button
          class="px-4 py-2 text-zinc-50 text-sm font-bold bg-zinc-950 rounded hover:bg-zinc-950/90 transition-colors"
        >
          Cadastrar
        </button>
      </div>
    </form>
  </div>
</template>

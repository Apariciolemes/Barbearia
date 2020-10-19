<template>
 <div class="container px-lg-5 px-2">
    <Panel class="py-5 px-4">
     <template #header>
        <h2 class="text-center">Acesso ao sistema</h2>
      </template>
    <form class="py-3 px-3">
      <div class="form-group text-center">
        <h3 class="mr-3">E-mail -</h3>
        <InputText type="email" placeholder="E-mail" />
      </div>
      <div class="form-group text-center">
         <h3 class="mr-3">Senha -</h3>
        <InputText type="password" placeholder="Senha" />
      </div>
      <div class="form-group text-center mt-4">
        <Button @click="AcessarAreaBarbeiro" class="px-5">Entrar</Button>
      </div>
    </form>
  </Panel>
 </div>
</template>

<script>
export default {
  methods: {
    AcessarAreaBarbeiro() {
     this.$router.push('/barberArea')
    },
  },
};
</script>

<style scoped>
.form-group{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
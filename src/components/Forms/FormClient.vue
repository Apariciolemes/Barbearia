<template>
  <div class="container  px-lg-5 px-2">
    <Panel class="py-5 px-4">
      <template #header>
        <h2 class="text-center">Marcar Horário</h2>
      </template>
      <form id="app" class="form-group" @submit.prevent="postNow">
        <div class="form-group">
          <h3>Insira o seu nome</h3>
          <InputText
            v-model="name"
            type="text"
            placeholder="Nome"
            id="name"
            name="name"
            required
          />
        </div>
        <div class="form-group ml-3">
          <h3>Insira o seu e-mail</h3>
          <InputText
            v-model="email"
            type="email"
            placeholder="E-mail"
            id="email"
            name="email"
            required
          />
        </div>
        <div class="form-group">
          <h3>Insira o seu telefone</h3>
          <InputMask
            mask="(99) 99999-9999"
            v-model="telefone"
            placeholder="(DD) XXXX-XXXX"
            id="telefone"
            name="telefone"
          />
        </div>
        <div class="form-group ml-3">
          <h3>Selecione a data</h3>
          <Calendar v-model="day" dateFormat="dd.mm.yy" :showIcon="false"/>
        </div>
        <div class="form-group">
          <h3>Selecione o seu barbeiro</h3>
          <Dropdown
            v-model="barbeiro"
            :options="info"
            optionLabel="nome"
            placeholder="Selecione um barbeiro"
          />
        </div>
        <div class="form-group ml-3">
          <h3>Selecione o seu horário</h3>
          <Dropdown
            v-model="horario"
            :options="horarios"
            placeholder="Selecione o horário"
          />
        </div>
        <div class="form-group ml-3">
          <Button class="px-5">Marcar</Button>
        </div>
      </form>
    </Panel>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      horarios: [
        "10:00 as 11:00",
        "11:00 as 12:00",
        "14:00 as 15:00",
        "16:00 as 17:00",
        "17:00 as 18:00",
        "18:00 as 19:00",
      ],
      info: null,
      name: "",
      email: "",
      telefone: "",
      barbeiro: "",
      horario: "",
    };
  },
  mounted() {
    axios
      .get("http://localhost:8080/rest/barbeiro/consultar")
      .then((response) => (this.info = response.data));
  },
  methods: {
    postNow() {
      axios
        .post("http://localhost:8080/rest/horario/inserir", {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
          nome: this.name,
          email: this.email,
          telefone: this.telefone,
          barbeiro: this.barbeiro,
          horario: this.horario,
        })
        .then(() => {
          this.showModal();
        })
        .catch(() => {
          console.log("Erro");
        });
    },
  },
};
</script>

<style scoped>
#fromCliente h2 {
  font-size: 50px;
  font-weight: 900;
  color: black;
  text-transform: uppercase;
  text-decoration: underline;
  padding: 20px 0;
}
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap row;
}
</style>
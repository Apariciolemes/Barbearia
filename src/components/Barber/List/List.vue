<template>
  <div class="list-barber">
    <DataTable :value="cars">
      <Column field="Nome" header="Nome"></Column>
      <Column field="E-mail" header="E-mail"></Column>
      <Column field="brand" header="Brand"></Column>
      <Column field="color" header="Color"></Column>
    </DataTable>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }

}
</script>
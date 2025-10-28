<script setup>
import {ref} from "vue";

const poke = ref("");
const data_fetch = ()=>{
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())        
    .then(data => {
      poke.value = data.name;                      
    })
    .catch(err => console.error("Error:", err));
};

let my_api = ref("");

const my_api_function = async () => {
  try {
    const res = await fetch("/api/hello");
    const data_api = await res.json();   // ✅ convert to JSON
    my_api.value = data_api.message;     // ✅ now works
  } catch (err) {
    console.error(err);
  }
};

</script>

<template>
  <div>
    <p class="highaf">{{ poke }}</p>
  </div>
  <button @click="data_fetch">Click to view Pokemon</button>
  <div>
    <p class="highaf">{{ my_api }}</p>
  </div>
  <button @click="my_api_function">Click to view My API</button>
</template>

<style scoped>
  .highaf{
    background-color: blue;
    color:white
  }
</style>

<template>
  <div class="container">
    <h1>Cadastro de Pacientes</h1>
    <div class="Card">
      <div class="Card--branco">
        <FormKit type="form" @submit="handleSubmit" :config="{ validateOnBlur: true }">
          <div class="formkit-wrapper">
            <div class="formkit-item">
              <FormKit type="text" name="nome" label="Nome Completo" validation="required" />
            </div>
            <div class="formkit-item">
              <FormKit type="text" name="idade" label="Idade" validation="required|integer" />
            </div>
            <div class="formkit-item">
              <FormKit type="text" name="cpf" label="CPF" validation="required|regex:/^\d{11}$/" v-mask="'###.###.###-##'" />
            </div>
            <div class="formkit-item">
              <FormKit type="text" name="telefone" label="Telefone" validation="required" v-mask="'(##) #####-####'" />
            </div>
            <div class="formkit-item">
              <FormKit type="text" name="endereco" label="Endereço" validation="required" />
            </div>
            <div class="formkit-item">
              <FormKit type="text" name="numero" label="Número" validation="required" />
            </div>
            <div class="formkit-item">
              <FormKit type="number" name="altura" label="Altura" validation="required|numeric" v-mask="'###.##'" />
            </div>
            <div class="formkit-item">
              <FormKit type="number" name="peso" label="Peso (em kg)" validation="required|numeric" v-mask="'###.##'" />
            </div>
            <div class="formkit-item">
              <FormKit type="textarea" name="sintomas" label="Sintomas" validation="required" />
            </div>
            <div class="formkit-item formkit--item">
              <FormKit type="select" name="opcao" label="Sexo" :options="options" validation="required" />
            </div>
          </div>
          <button type="submit" class="custom-submit-button">Enviar</button>
        </FormKit>
      </div>
    </div>
    <div class="Card--Tabela">
      <div class="Card--branco">
        <h2>Lista de Pacientes</h2>
        <table class="patient-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>CPF</th>
              <th>Endereço</th>
              <th>Número</th>
              <th>Altura</th>
              <th>Peso</th>
              <th>Sintomas</th>
              <th>Sexo</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(patient, index) in patients" :key="index">
              <td>{{ patient.nome }}</td>
              <td>{{ patient.idade }}</td>
              <td>{{ patient.cpf }}</td>
              <td>{{ patient.endereco }}</td>
              <td>{{ patient.numero }}</td>
              <td>{{ patient.altura }}</td>
              <td>{{ patient.peso }}</td>
              <td>{{ patient.sintomas }}</td>
              <td>{{ patient.opcao }}</td>
              <td>{{ patient.telefone }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FormKit } from '@formkit/vue'

const options = [
  { label: 'Selecione*', value: '' },
  { label: 'Masculino', value: 'Masculino' },
  { label: 'Feminino', value: 'Feminino' },
  { label: 'Outros', value: 'Outros' }
]

const patients = ref([]);

const handleSubmit = (formData) => {
  console.log('Dados do formulário:', formData);
  patients.value.push(formData);
}
</script>

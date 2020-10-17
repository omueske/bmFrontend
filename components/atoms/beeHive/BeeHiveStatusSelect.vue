<template>
  <div>
    <label :for="name">{{ name }}</label>
    <b-form-select
      v-model="inputVal"
      :id="name"
      :options="options"
      class="mb-3"
    >
      <!-- This slot appears above the options from 'options' prop -->
      <template v-slot:first>
        <b-form-select-option :value="null" disabled
          >-- Please select an option --</b-form-select-option
        >
      </template>
    </b-form-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: 'active', text: 'Aktiv' },
        { value: 'inactive', text: 'Inaktiv' }
      ]
    }
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.beeHive
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

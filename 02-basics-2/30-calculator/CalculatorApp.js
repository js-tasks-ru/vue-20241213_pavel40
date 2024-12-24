import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {

    const calc = ref({
      firstOperand: 0,
      secondOperand: 0,
      operator: null,
    })

    const output = computed(() => {
      switch (calc.value.operator) {
        case "sum":
          return calc.value.firstOperand + calc.value.secondOperand;
        case "subtract":
          return calc.value.firstOperand - calc.value.secondOperand;
        case "multiply":
          return calc.value.firstOperand * calc.value.secondOperand;
        case "divide":
          return calc.value.firstOperand / calc.value.secondOperand;
        default:
          return 0
      }
    })

    return {
      calc,
      output,
    }
  },

  template: `
    <div class="calculator">
      <input v-model="calc.firstOperand"  type="number" aria-label="First operand" />
      <div class="calculator__operators">
        <label><input v-model="calc.operator" type="radio" name="operator" value="sum"/>➕</label>
        <label><input v-model="calc.operator" type="radio" name="operator" value="subtract"/>➖</label>
        <label><input v-model="calc.operator" type="radio" name="operator" value="multiply"/>✖</label>
        <label><input v-model="calc.operator" type="radio" name="operator" value="divide"/>➗</label>
      </div>

      <input v-model="calc.secondOperand" type="number" aria-label="Second operand" />

      <div>=</div>

      <output>{{ output }}</output>
    </div>
  `,
})

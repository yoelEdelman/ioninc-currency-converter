<template>
    <form>
        <ion-item>
            <ion-label position="stacked">Amount</ion-label>
            <ion-input placeholder="EUR" :value="amount" @input="amount = $event.target.value"></ion-input>
        </ion-item>

        <ion-item>
            <ion-label>To</ion-label>
            <ion-select @ionChange="values = $event.target.value">
                <ion-select-option v-for="(currencyChoice, index) in currencyChoices" :key="index" :value="[currencyChoice, index]">{{ currencyChoice }} - {{ index }}</ion-select-option>
            </ion-select>
        </ion-item>

        <ion-button expand="block" @click.prevent="submitForm()">CONVERT</ion-button>

        <CurrencyConvertedResult v-if="formSubmited"
            :currencySelected="currencySelected"
            :currencyCodeSelected="currencyCodeSelected"
            :currencyResult="currencyResult"
            :amount="amount"
        />
    </form>
</template>

<script>
    import { integer, required } from 'vuelidate/lib/validators'
    import CurrencyConvertedResult from '../components/CurrencyCorvertedResult.vue'

    export default {
        name: "currency-form",
        components: {
          CurrencyConvertedResult
        },
        data() {
            return {
                currencyChoices: {},
                result: '',
                currencyResult: null,
                currencySelected: '',
                currencyCodeSelected: '',
                amount: null,
                formSubmited: false,
                values: ''
            }
        },
        validations: {
            amount: {
                required,
                integer
            }
        },
        mounted () {
            this.axios
                .get('http://data.fixer.io/api/symbols?access_key=a8b8e3b57e9b4dc7b9f1c0b4a1c2fdbd&format=1')
                .then((response) => {
                this.currencyChoices = response.data.symbols
            })
        },
        methods: {
            submitForm() {
                this.$v.$touch()
                if (this.$v.amount.$invalid ) {
                        this.$toastr('error', 'Please select an amount you want to convert ( The amount must be integer).', 'Error')
                }
                else if (!this.values ) {
                    this.$toastr('error', 'Please select a currency you want to convert', 'Error')
                }
                else {
                    this.$toastr('success', 'Your currency as ben converted with success', 'Success')

                    this.values = this.values.split(',')
                    this.currencyCodeSelected = this.values[1]
                    this.currencySelected = this.values[0]
                    this.formSubmited = true

                    this.axios
                        .get('http://data.fixer.io/api/latest?access_key=a8b8e3b57e9b4dc7b9f1c0b4a1c2fdbd')
                        .then((response) => {
                            this.result = response.data.rates

                            this.currencyResult = this.amount * this.result[this.currencyCodeSelected]

                        })
                }
            }
        }
    };
</script>

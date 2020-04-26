<template>
    <ion-card>
        <ion-card-header>
            <ion-card-title v-if="currencySelected">{{ currencySelected }}</ion-card-title>
            <ion-card-subtitle>{{ amount }} EUR to {{currencyCodeSelected}}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content v-if="currencyResult">
            {{ currencyResult }}
        </ion-card-content>
<!--        <div style="padding-bottom: 10px" v-if="postCode">Départements : <button @click="open = !open"> ▼ </button></div>-->
<!--        <div v-if="postCode" class="collapse" :class="{'open': open === true}">-->
<!--            <article style="margin: 4px">-->
<!--                <span style="margin: 5px" v-for="(code, index) in  postCode">-->
<!--                    {{ code }}-->
<!--                </span>-->
<!--            </article>-->
<!--        </div>-->

    </ion-card>
</template>

<style scoped>

    .collapse{
        height: 0px;
        overflow: hidden;
        transition: 0.5s linear ;
    }

    .open{
        height: auto;
    }

    button{
        outline: none;
        background: none;
    }

</style>
<script>
    export default {
        name: "currency-converted-result",
        props: {
            currencySelected: {
                type: String,
            },
            currencyCodeSelected: {
                type: String,
            },
            currencyResult :{
                type : String
            },
            amount :{
                type : Number
            },
        },
        data (){
            return{
                open : false
            }
        }
    }
</script>
<template>
    <li class="cards-list-item">
        <article class="card">
            <div class="card__picture">
                <img class="card__picture-img" :src="card.img" alt="">
                <button class="card__picture-showed">
                    Быстрый просмотр
                </button>
            </div>
            <div class="card__descr">
                <span class="card__descr-price">{{ card.price }}₽</span>
                <p class="card__descr-text">
                    {{ card.title }}
                </p>
                <div class="card__descr-invis">
                    <my-button>В корзину</my-button>
                </div>
            </div>
        </article>
    </li>
</template>

<script>
export default {
    name: "CardItem",
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
@import 'CardItem.module.scss';
</style>
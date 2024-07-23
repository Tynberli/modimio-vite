<template>
    <li class="catalog__content-cards-list-item">
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
                    <button class="card__descr-invis-button">
                        В корзину
                    </button>
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
$white: #ffffff;
$black: #333;
$aquamarine: #279fb9;
$grey: #f5f5f5;
$orange: #ffc020;

.card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    border-radius: 16px;
    max-width: 201px;
    //overflow: hidden;
    background-color: $white;
    -webkit-transition: 300ms;
    -o-transition: 300ms;
    transition: 300ms;

    & &__picture {
        height: 100%;
        max-height: 156px;
        position: relative;

        &-img {
            max-width: 100%;
            height: auto;
            border-radius: 16px 16px 0 0;
        }

        &-showed {
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 6px;
            padding: 8px;
            font-weight: 500;
            font-size: 12px;
            line-height: 133%;
            text-align: center;
            color: $black;
            white-space: nowrap;
            opacity: 0;
            -webkit-transition: 300ms;
            -o-transition: 300ms;
            transition: 300ms;
            font-family: inherit;
        }
    }

    & &__descr {
        padding: 8px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        gap: 8px;
        position: relative;

        &-price {
            font-weight: 500;
            font-size: 20px;
            line-height: 140%;
            color: $black;
        }

        &-text {
            font-weight: 400;
            font-size: 12px;
            line-height: 133%;
            color: $black;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
        }

        &-invis {
            background-color: $white;
            border-radius: 0 0 16px 16px;
            padding: 8px;
            position: absolute;
            bottom: -40px;
            left: 0;
            width: 100%;
            -webkit-transition: 300ms;
            -o-transition: 300ms;
            transition: 300ms;
            opacity: 0;
            display: none;
            z-index: 2;
            -webkit-box-shadow: 1px 9px 15px 0 rgba(0, 0, 0, 0.1);
            box-shadow: 1px 9px 15px 0 rgba(0, 0, 0, 0.1);

            &-button {
                background-color: $aquamarine;
                border-radius: 8px;
                padding: 8px 12px;
                font-weight: 500;
                font-size: 14px;
                line-height: 143%;
                text-align: center;
                color: $white;
                width: 100%;
                -webkit-transition: 300ms;
                -o-transition: 300ms;
                transition: 300ms;

                &:hover {
                    background-color: $orange;
                    color: $black;
                }
            }
        }

    }


    &:hover {
        -webkit-box-shadow: 1px 1px 15px 0 rgba(0, 0, 0, 0.1);
        box-shadow: 1px 1px 15px 0 rgba(0, 0, 0, 0.1);

        .card__descr-invis {
            display: block;
            opacity: 1;

        }

        .card__picture-showed {
            opacity: 1;
        }
    }
}
</style>

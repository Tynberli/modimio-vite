<template>
    <div class="pagination">
        <button class="pagination__button pagination__button--prev" @click="$emit('prev')"
            :disabled="currentPage === 1">
            <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.80474 11.1381C6.06509 10.8778 6.06509 10.4557 5.80474 10.1953L1.60947 6.00004L5.80474 1.80478C6.06509 1.54443 6.06509 1.12232 5.80474 0.861969C5.54439 0.60162 
                      5.12228 0.60162 4.86193 0.861969L0.666666 5.05723C0.145968 5.57793 0.145966 6.42215 0.666666 6.94285L4.86193 11.1381C5.12228 11.3985 5.54439 11.3985 5.80474 11.1381Z"
                    fill="#333333" />
            </svg>
            <span>Предыдущая</span>
        </button>

        <ul class="pagination__list">
            <li class="pagination__list-item">
                <button class="pagination__list-item-button" @click="$emit('setPage', 1)"
                    :class="{ active: currentPage === 1 }">1</button>
            </li>
            <li v-for="page in visiblePages" :key="page" class="pagination__list-item">
                <button class="pagination__list-item-button" @click="$emit('setPage', page)"
                    :class="{ active: currentPage === page }">{{ page }}</button>
            </li>
            <li class="pagination__list-item">
                <button class="pagination__list-item-button" @click="$emit('setPage', totalPages)"
                    :class="{ active: currentPage === totalPages }">{{ totalPages }}</button>
            </li>
        </ul>

        <button class="pagination__button pagination__button--next" @click="$emit('next')"
            :disabled="currentPage === totalPages">
            <span>Следующая</span>
            <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.195262 11.1381C-0.0650874 10.8778 -0.0650874 10.4557 0.195262 10.1953L4.39052 6.00004L0.195262 1.80478C-0.0650878 1.54443
                -0.0650878 1.12232 0.195262 0.86197C0.455611 0.601621 0.877721 0.601621 1.13807 0.86197L5.33333 5.05723C5.85403 5.57793 5.85403 6.42215 
                5.33333 6.94285L1.13807 11.1381C0.877722 11.3985 0.455612 11.3985 0.195262 11.1381Z" fill="#333333" />
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        totalPages: {
            type: Number,
            required: true
        }
    },
    computed: {
        visiblePages() {
            if (this.totalPages <= 5) {
                return Array.from({ length: this.totalPages - 2 }, (_, i) => i + 2);
            } else if (this.currentPage <= 3) {
                return [2, 3, 4];
            } else if (this.currentPage >= this.totalPages - 2) {
                return [this.totalPages - 3, this.totalPages - 2, this.totalPages - 1];
            } else {
                return [this.currentPage - 1, this.currentPage, this.currentPage + 1];
            }
        }
    }
}
</script>

<style scoped lang="scss">
$white: #ffffff;
$black: #333;
$aquamarine: #279fb9;
$grey: #f5f5f5;

.pagination {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    line-height: 150%;
    color: $black;
    margin-top: 52px;

    & &__button {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    & &__list {
        display: flex;
        align-items: center;
        gap: 4px;

        &-item {
            &-button {
                border-radius: 7px;
                padding: 4px 5px;
                transition: 300ms;
                min-width: 29px;
                text-align: center;

                &:hover {
                    background: $grey;
                }

                &.active {
                    color: $white;
                    background-color: $aquamarine;
                }
            }
        }
    }
}
</style>

<template>
    <div v-if="cards.length === 0">
        <h2 class="h1">Товаров нет</h2>
    </div>
    <div v-else class="wrap">
        <my-interractive style="justify-content: end; margin-bottom: 12px;" />
        <ul class="cards-list">
            <card-item v-for="card in paginatedCards" :key="card.id" :card="card" />
        </ul>
        <my-pagination v-if="shouldShowPagination" :currentPage="currentPage" :totalPages="totalPages" @prev="prevPage"
            @next="nextPage" @setPage="setPage" />
    </div>
</template>

<script>
import CardItem from '../../components/card/CardItem.vue';

export default {
    components: {
        CardItem,
    },
    props: {
        cards: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            currentPage: 1,
            itemsPerPage: 10,
        };
    },
    computed: {
        paginatedCards() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.cards.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.cards.length / this.itemsPerPage);
        },
        shouldShowPagination() {
            return this.cards.length > this.itemsPerPage;
        },
    },
    methods: {
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        setPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
    },
};
</script>

<style scoped lang="scss">
@import 'CardList.module.scss';
</style>

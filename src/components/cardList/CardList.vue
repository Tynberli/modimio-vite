<template>
    <div v-if="cards.length === 0" class="no-cards-message">
        <h2 class="h1">Товаров нет</h2><!-- если cards.length === 0 то выводим это-->
    </div>
    <div v-else class="wrap">
        <div class="catalog__content-cards-interractive">
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="5.29412" height="5.29" rx="1" fill="#279FB9" />
                    <rect x="9.35303" y="3" width="5.29412" height="5.29" rx="1" fill="#279FB9" />
                    <rect x="15.7058" y="3" width="5.29412" height="5.29" rx="1" fill="#279FB9" />
                    <rect x="3" y="9.35001" width="5.29412" height="5.29" rx="1" fill="#279FB9" />
                    <rect x="9.35303" y="9.35001" width="5.29412" height="5.29" rx="1" fill="#279FB9" />
                    <rect x="15.7058" y="9.35001" width="5.29412" height="5.29" rx="1" fill="#279FB9" />
                    <rect x="3" y="15.7" width="5.29412" height="5.29" rx="1" fill="#279FB9" />
                    <rect x="9.35303" y="15.7" width="5.29412" height="5.29" rx="1" fill="#279FB9" />
                    <rect x="15.7058" y="15.7" width="5.29412" height="5.29" rx="1" fill="#279FB9" />
                </svg>
            </button>
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="8" height="8" rx="2" fill="#E0E0E0" />
                    <rect x="3" y="13" width="8" height="8" rx="2" fill="#E0E0E0" />
                    <rect x="13" y="3" width="8" height="8" rx="2" fill="#E0E0E0" />
                    <rect x="13" y="13" width="8" height="8" rx="2" fill="#E0E0E0" />
                </svg>
            </button>
        </div>
        <ul class="catalog__content-cards-list">
            <card-item v-for="card in paginatedCards" :key="card.id" :card="card"></card-item>
        </ul>
        <my-pagination v-if="shouldShowPagination" :currentPage="currentPage" :totalPages="totalPages" @prev="prevPage"
            @next="nextPage" @setPage="setPage">
        </my-pagination>
    </div>
</template>



<script>
import CardItem from '../../components/card/CardItem.vue';
import MyPagination from '../../components/ui/MyPagination.vue';

export default {
    components: {
        CardItem,
        MyPagination
    },
    props: {
        cards: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            currentPage: 1,
            itemsPerPage: 5
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
        }
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
        }
    }
}
</script>



<style scoped>
.no-cards-message {}
</style>

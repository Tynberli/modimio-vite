<template>
    <section class="catalog">
        <div class="container">
            <div class="catalog__top">
                <h1 class="catalog__top-title">{{ selectedCategory ? selectedCategory.title : 'Каталог' }}</h1>
                <span class="catalog__top-item">{{ filteredCards.length }} {{ getDeclension(filteredCards.length) }}
                </span>
            </div>
            <div class="catalog__content">
                <div class="catalog__content-category">
                    <h4 class="catalog__content-category-title">Категории</h4>
                    <ul :class="{ 'catalog__content-category-list': true, category: selectedCategory }">
                        <li v-if="selectedCategory" class="catalog__content-category-list-item">
                            <button class="catalog__content-category-list-item-button subcategory"
                                @click="selectCategory(null)">
                                <svg width="6" height="12" viewBox="0 0 6 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.80474 11.1381C6.06509 10.8778 6.06509 10.4557 5.80474 10.1953L1.60947 6.00004L5.80474 1.80478C6.06509 1.54443 6.06509 1.12232 5.80474 0.861969C5.54439 0.60162 5.12228 0.60162 4.86193 0.861969L0.666666 5.05723C0.145968 5.57793 0.145966 6.42215 0.666666 6.94285L4.86193 11.1381C5.12228 11.3985 5.54439 11.3985 5.80474 11.1381Z"
                                        fill="#333333" />
                                </svg>
                                {{ selectedCategory.title }}
                            </button>
                        </li>
                        <li v-for="category in displayedCategories" :key="category.id"
                            class="catalog__content-category-list-item">
                            <button class="catalog__content-category-list-item-button"
                                @click="handleCategoryClick(category)">
                                {{ category.title }}
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="cards">
                    <card-list :cards="paginatedCards" />
                    <my-pagination v-if="shouldShowPagination" :currentPage="currentPage" :totalPages="totalPages"
                        @prev="prevPage" @next="nextPage" @setPage="setPage" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CardList from '../../components/cardList/CardList.vue';
import cardData from '../card/data';

export default {
    components: {
        CardList,
    },
    data() {
        return {
            categories: cardData,
            selectedCategory: null,
            selectedSubcategory: null,
            currentPage: 1,
            itemsPerPage: 10,/* значение отвечает за количество выводимых карточек. так же нужно менять в компоненте CardList для корректного отображение. установил 10 для наглядности */
        };
    },
    computed: {
        displayedCategories() {
            return this.selectedCategory && this.selectedCategory.children
                ? this.selectedCategory.children
                : this.categories;
        },
        filteredCards() {
            if (!this.selectedCategory) {
                return this.categories.flatMap(category =>
                    category.children.flatMap(subcategory => subcategory.children)
                );
            } else if (this.selectedSubcategory) {
                return this.selectedSubcategory.children;
            } else {
                return this.selectedCategory.children.flatMap(subcategory => subcategory.children);
            }
        },
        paginatedCards() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredCards.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.filteredCards.length / this.itemsPerPage);
        },
        shouldShowPagination() {
            return this.filteredCards.length > this.itemsPerPage;
        },
    },
    methods: {
        handleCategoryClick(category) {
            if (this.selectedCategory) {
                this.selectSubcategory(category);
            } else {
                this.selectCategory(category);
            }
        },
        selectCategory(category) {
            this.selectedCategory = category;
            this.selectedSubcategory = null;
            this.currentPage = 1;
        },
        selectSubcategory(subcategory) {
            this.selectedSubcategory = subcategory;
            this.currentPage = 1;
        },
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
        getDeclension(count) {
            const cases = [2, 0, 1, 1, 1, 2];
            const titles = ['товар', 'товара', 'товаров'];
            return titles[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[(count % 10 < 5) ? count % 10 : 5]];
        },
    },
};
</script>

<style scoped lang="scss">
@import 'Catalog.module.scss';
</style>
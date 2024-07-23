<template>
    <section class="catalog">
        <div class="container">
            <div class="catalog__top">
                <h1 class="catalog__top-title">{{ selectedCategory ? selectedCategory.title : 'Каталог' }}</h1>
                <span class="catalog__top-item">{{ filteredCards.length }} товара</span>
            </div>
            <div class="catalog__content">
                <div class="catalog__content-category">
                    <h4 class="catalog__content-category-title">Категории</h4>
                    <ul class="catalog__content-category-list">
                        <li v-if="selectedCategory" class="catalog__content-category-list-item">
                            <button class="catalog__content-category-list-item-button" @click="selectCategory(null)">
                                <span>назад</span> {{ selectedCategory.title }}
                            </button>
                        </li>
                        <li v-for="category in displayedCategories" :key="category.id"
                            class="catalog__content-category-list-item">
                            <button class="catalog__content-category-list-item-button" @click="handleCategoryClick(category)">
                                {{ category.title }}
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="catalog__content-cards">
                    <card-list :cards="paginatedCards"></card-list>
               
            
            <my-pagination v-if="shouldShowPagination" :currentPage="currentPage" :totalPages="totalPages" @prev="prevPage" @next="nextPage" @setPage="setPage"></my-pagination></div> </div>
        </div>
    </section>
</template>



<script>
import CardList from '../../components/cardList/CardList.vue';
import MyPagination from '../../components/ui/MyPagination.vue';
import cardData from '../card/data';

export default {
    components: {
        CardList,
        MyPagination
    },
    data() {
        return {
            categories: cardData,
            selectedCategory: null,
            selectedSubcategory: null,
            currentPage: 1,
            itemsPerPage: 5
        };
    },
    computed: {
        displayedCategories() {
            if (this.selectedCategory && this.selectedCategory.children) {
                return this.selectedCategory.children;
            }
            return this.categories;
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
        }
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
        }
    }
}
</script>


<style scoped></style>

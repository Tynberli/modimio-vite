<template>
    <div class="interractive">
        <button class="interractive__button interractive__button--grid">
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
        <button class="interractive__button interractive__button--square">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="8" height="8" rx="2" fill="#E0E0E0" />
                <rect x="3" y="13" width="8" height="8" rx="2" fill="#E0E0E0" />
                <rect x="13" y="3" width="8" height="8" rx="2" fill="#E0E0E0" />
                <rect x="13" y="13" width="8" height="8" rx="2" fill="#E0E0E0" />
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    name: 'my-interractive'
}
</script>

<style scoped lang="scss">
@import 'MyInterractive.module.scss';
</style>
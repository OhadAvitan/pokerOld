<template>
<div>
    <h2>-Virtual Deck-</h2>
    <div class="game-btns">
        <button @click="onNewTable">New Table</button>
        <button @click="onActiveTables">Active Tables</button>
    </div>
    <new-table v-show="isNewTableShown" />
    <active-tables v-show="!isNewTableShown" />
    <button class="go-flop" @click="goFlop">Go Flop</button>
</div>
</template>

<script>
import ActiveTables from '@/cmps/ActiveTables'
import NewTable from '@/cmps/NewTable'

export default {
    data() {
        return {
            tables: null,
            isNewTableShown: true,
        };
    },
    methods: {
        onNewTable() {
            this.isNewTableShown = true
            console.log('On New Table');
        },
        onActiveTables() {
            this.isNewTableShown = false
            console.log('On Active Tables');
        },
        goFlop() {
            this.$router.push('game')
        }
    },
    components: {
        ActiveTables,
        NewTable,
    },
};
</script>

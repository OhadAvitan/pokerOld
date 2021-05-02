'use strict';

import { httpService } from './httpService.js';
// import playerService from '@/services/playerService.js'

// const card = {id: num: 5 , suit: s}

const KEY = 'tables';

export default {
    // query,
    add,
    insert,
    get,
    remove,
    save,
    getEmptyTable,
    dealDeckToPlayers,
    createDemoTables
}

async function createDemoTables() {
    var tables = [{
        id: 't101',
        owner: 'Ohad',
        mode: 'Omaha',
        deck: {},
        players: [
            { id: 5001, hand: ['2', '4', '5', '5'] },
            { id: 5002, hand: ['2', '8', '8', '10'] },
            { id: 5003, hand: ['A', 'K', 'A', '7'] }]
    },
    {
        id: 't102',
        owner: 'Josh',
        mode: 'Poker',
        deck: {},
        players: [
            { id: 1001, hand: ['2', '4', '5', '5'] },
            { id: 1002, hand: ['2', '8', '8', '10'] },
            { id: 1003, hand: ['2', '8', '8', '10'] },
            { id: 1004, hand: ['2', '8', '8', '10'] }]
    },
    {
        id: 't103',
        owner: 'Avi',
        mode: 'Omaha',
        deck: {},
        players: [
            { id: 2001, hand: ['2', '4', '5', '5'] },
            { id: 2002, hand: ['2', '7', '8', '10'] },
            { id: 2003, hand: ['2', '7', '5', 'K'] },
            { id: 2004, hand: ['2', '7', '8', '10'] },
            { id: 2005, hand: ['2', '7', '8', '10'] },
            { id: 2006, hand: ['2', 'Q', 'J', '10'] }]
    },
    {
        id: 't104',
        owner: 'Sher',
        mode: 'Poker',
        deck: {},
        players: [
            { id: 5001, hand: ['2', '4', '5', '5'] },
            { id: 5002, hand: ['2', '8', '8', '10'] },
            { id: 5003, hand: ['2', '8', '8', '10'] },
            { id: 5004, hand: ['A', 'K', 'A', '7'] }]
    },
    {
        id: 't105',
        owner: 'Shirel',
        mode: 'Poker',
        deck: {},
        players: [
            { id: 5001, hand: ['2', '4', '5', '5'] },
            { id: 5002, hand: ['2', '8', '8', '10'] },
            { id: 5003, hand: ['A', 'K', 'A', '7'] }]
    },
    {
        id: 't106',
        owner: 'Zion',
        mode: 'Omaha',
        deck: {},
        players: [
            { id: 5001, hand: ['2', '4', '5', '5'] },
            { id: 5002, hand: ['2', '8', '8', '10'] },
            { id: 5003, hand: ['2', '8', '8', '10'] },
            { id: 5004, hand: ['2', '8', '8', '10'] },
            { id: 5005, hand: ['2', '8', '8', '10'] },
            { id: 5006, hand: ['J', '8', '8', 'K'] },
            { id: 5007, hand: ['A', 'K', 'A', '7'] }]
    }]
    return tables;
}

function dealDeckToPlayers(table) {
    //const
    var loops = table.mode === 'Poker' ? 2 : 4;
    loops = 4;
    for (let i = 0; i < loops; i++) {
        for (let j = 0; j < table.players; j++) {
            table.players[j].hand.push(table.deck.shift)
        }
    }
    console.log('table after deal', table);
    // playerService.newPlayer 
}

// async function query() {
//     var tables = await dbService.query(KEY);
//     if (!tables || !tables.length) {
//         tables = _createDefaultTables();
//         await dbService.insert(KEY, tables);
//     }
//     return tables;
// }
function add(table) {
    console.log('orderService: (ADD)')
    return httpService.post(`order/`, table)
}

function save(table) {
    if (table._id) return httpService.put(KEY, table);
    else return httpService.post(KEY, table)
}

function insert(id) {
    return httpService.get(KEY, id);
}

function get(id) {
    return httpService.get(KEY, id);
}

function remove(id) {
    return httpService.delete(KEY, id);
}


function getEmptyTable() {
    return {
        vendor: '',
        speed: 0,
        isManual: false
    }
}

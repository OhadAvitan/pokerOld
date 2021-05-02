'use strict';

import utilsService from '@/services/utilsService.js'
export default {
    newPlayer
}

function newPlayer(name) {
    return {
        id: utilsService.getRandomId(),
        name: name,
        hand: []
    }
}
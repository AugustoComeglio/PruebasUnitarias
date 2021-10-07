const { it } = require('@jest/globals');
const { test } = require('picomatch');
const sum = require('../src/codigo.js');

describe('Pruebas para sumas', () => {
    it('1 + 2 es 3', () => {
        expect(sum(1,2)).toBe(3);    
    });
    it('1 + 5 es 6', () => {
        expect(sum(1,5)).toBe(6);    
    });
})
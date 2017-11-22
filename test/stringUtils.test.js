'use strict';

const chai = require('chai');
const expect = chai.expect; // eslint-disable-line no-unused-vars

const stringUtils = require('../src/stringUtils');

describe('StringUtils.getFirstWord', () => {

    it('should return a string for an empty string', () => {
        let word = stringUtils.getFirstWord('');
        expect(word).to.be.a('string');
    });

    it('should return a string for a non-empty string', () => {
        let word = stringUtils.getFirstWord('The sky is blue.');
        expect(word).to.be.a('string');
    });

    it('should throw an error if the parameter is null', () => {
        let func = () => stringUtils.getFirstWord(null);
        expect(func).to.throw(Error, 'string parameter is null.');
    });

    it('should return the first word for a complente sentence', () => {
        let word = stringUtils.getFirstWord('The sky is blue.');
        expect(word).to.equal('The');
    });

    it('should return the complete string for a one word string', () => {
        let word = stringUtils.getFirstWord('The');
        expect(word).to.equal('The');
    });

});

describe('StringUtils.replaceAllOccurrences', () => {

    it('should throw an error if the string parameter is null', () => {
        let func = () => stringUtils.replaceAllOccurrences(null, 'test', 'test');
        expect(func).to.throw(Error, 'string parameter is null.');
    });

    it('should throw an error if the searchValue parameter is null', () => {
        let func = () => stringUtils.replaceAllOccurrences('test', null, 'test');
        expect(func).to.throw(Error, 'searchValue parameter is null.');
    });

    it('should throw an error if the newValue parameter is null', () => {
        let func = () => stringUtils.replaceAllOccurrences('test', 'test', null);
        expect(func).to.throw(Error, 'newValue parameter is null.');
    });

    it('should replace all the occurences in an string containing multiple occurrences', () => {
        let string = stringUtils.replaceAllOccurrences('The sun is @color. The ocean is also @color.', '@color', 'blue');
        expect(string).to.equal('The sun is blue. The ocean is also blue.');
    });

    it('should replace the occurence in an string containing one occurrence', () => {
        let string = stringUtils.replaceAllOccurrences('The sun is @color.', '@color', 'blue');
        expect(string).to.equal('The sun is blue.');
    });

    it('should replace nothing in an string containing no occurrence', () => {
        let string = stringUtils.replaceAllOccurrences('The sun is @color.', '@colors', 'blue');
        expect(string).to.equal('The sun is @color.');
    });

});
const main = require('../main/main');

describe('main()', () => {
    it('0A0B', function() {
        var result = main('1234', '5678');
        expect(result).toEqual('0A0B');
    })
    it('0A1B', function() {
        var result = main('1234', '3678');
        expect(result).toEqual('0A1B');
    })
    it('0A2B', function() {
        var result = main('1234', '3478');
        expect(result).toEqual('0A2B');
    })
    it('0A3B', function() {
        var result = main('1234', '3428');
        expect(result).toEqual('0A3B');
    })
    it('0A4B', function() {
        var result = main('1234', '4321');
        expect(result).toEqual('0A4B');
    })
    it('1A0B', function() {
        var result = main('1234', '1678');
        expect(result).toEqual('1A0B');
    })
    it('2A0B', function() {
        var result = main('1234', '1278');
        expect(result).toEqual('2A0B');
    })
    it('3A0B', function() {
        var result = main('1234', '1238');
        expect(result).toEqual('3A0B');
    })
    it('4A0B', function() {
        var result = main('1234', '1234');
        expect(result).toEqual('4A0B');
    })
    it('1A1B', function() {
        var result = main('1234', '1378');
        expect(result).toEqual('1A1B');
    })
    it('1A2B', function() {
        var result = main('1234', '1328');
        expect(result).toEqual('1A2B');
    })
    it('1A3B', function() {
        var result = main('1234', '1423');
        expect(result).toEqual('1A3B');
    })
    it('2A1B', function() {
        var result = main('1234', '1245');
        expect(result).toEqual('2A1B');
    })
    it('2A2B', function() {
        var result = main('1234', '1243');
        expect(result).toEqual('2A2B');
    })
});
import {currency} from'../../utils/money.js';
    describe('test suite:currency',()=>{
        it('converts centss to dollers',()=>{
            expect(currency(7000)).toEqual('70.00');
        });
        it('work with zero',()=>{
            expect(currency(0)).toEqual('0.00');
        });
    })


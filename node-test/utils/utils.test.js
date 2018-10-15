const expect = require('expect');

const utils = require('./utils');

describe('Utils' ,() => {
    describe('#Add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
        
            expect(res).toBe(44).toBeA('number');
            // if(res !==44){
            //     throw new Error(`Expected 44, but got ${res}`);
            // }
        });
    });
    
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
     
    
    it('should square a numbera', () => {
        var res = utils.square(3);
    
        expect(res).toBe(9).toBeA('number');
        // if(res !==9){
        //     throw new Error(`Expected 9, but got ${res}`);
        // }
    });
    
    it('should async square a number', (done) => {
        utils.asyncSquare(4, (square) => {
            expect(square).toBe(16).toBeA('number');
            done();
        });
    });
    
    //should verify firstName and Last Name are set
    it('should verify firstName and Last Name are set', () =>{
        var user = {
            location: 'Pune',
            age: 26
        }
        var res = utils.setName(user, 'Udayaditya Singh');
        expect(res).toInclude({
            firstName:'Udayaditya',
            lastName:'Singh'
        });
    });
});



// it('should expect some value', () => {
//     expect(12).toNotBe(11)
//     expect({name:'uday'}).toBe({name:'uday'});//Error
//     expect({name:'Uday'}).toNotEqual({name:'uday'});
//     expect([2,3,4]).toInclude(3);
//     expect([2,3,4]).toExclude(2);
//     expect({
//         name: 'uday',
//         age: '26',
//         location: 'Pune'
//     })
//         .toInclude({
//             age: 26
//         });

//     expect({
//         name: 'uday',
//         age: '26',
//         location: 'Pune'
//     })
//         .toExclude({
//             age: 25
//         });
// });
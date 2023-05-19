// Description: This file tests the calcDistance function
const calcDistance = require('./index')
 
it('should calculate the distance between two points', () => {
    const distance = calcDistance(32.9697, -96.80322, 29.46786, -98.53506)
    expect(distance).toEqual('422km')
    }   
)

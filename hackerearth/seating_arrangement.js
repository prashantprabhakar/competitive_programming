
function findOppositeSeat(n) {
  n = n-1
  let rem = n%12
  let skippped = Math.floor(n/12)
  let expectedSeat = 12-rem + (12*skippped)
  let position = seatPosition(rem+1)

  console.log(`${expectedSeat} ${position}`)
}

const seatPosition = (no) => {
  if(no === 1 ||  no === 12 || no === 6 || no === 7) return 'WS'
  if(no === 2 || no === 11 || no === 5 || no === 8) return 'MS'
  if(no === 3 || no === 10 || no === 4|| no === 9 ) return 'AS'
}



// findOppositeSeat( 19)
// findOppositeSeat( 29)
//findOppositeSeat(12)
// findOppositeSeat( 33)
// findOppositeSeat( 24)
// findOppositeSeat( 38)
// findOppositeSeat( 66)
// findOppositeSeat( 47)
// findOppositeSeat( 12)
// findOppositeSeat( 4)
for(let i=1; i<=12; i++) {
  (findOppositeSeat(i))
}
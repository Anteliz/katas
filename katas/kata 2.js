let arr = [true,  true,  true,  false,
          true,  true,  true,  true ,
          true,  false, true,  false,
          true,  false, false, true ,
          true,  true,  true,  true ,
          false, false, true,  true ]

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let total = arrayOfSheep.filter(sheep => sheep === true)

  return total.length
}
countSheeps(arr)
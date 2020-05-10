export default function calculatePizzasNeeded(
    numberOfChild,
    numberOfParent,
    slicesPerChild,
    slicesPerParent,
    slicesPerPizza = 6,
  ) {
     
    return Math.ceil(numberOfChild * slicesPerChild / slicesPerPizza)+Math.ceil(numberOfParent * slicesPerParent / slicesPerPizza)
    
  }
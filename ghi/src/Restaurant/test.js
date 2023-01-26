function filterTest(){
let dietRestrictEntries = [['id', 8],['vegan', false],['vegetarian', true],['halal', false],['account_id', 48]]
let dietRestrictions = dietRestrictEntries.filter((entry) =>  entry[1] === true)
}

filterTest()

function solution(nums) {
    const set = new Set(nums)
    const pokemonLength = [...set].length
    const count = nums.length / 2
    if(count < pokemonLength) return parseInt(count)
    else return parseInt(pokemonLength)
}
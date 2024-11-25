function solution(clothes) {
    const clothes_count = clothes.reduce((acc, cloth) => {
        const type = cloth[1];
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});
    const combinations = Object.values(clothes_count)
        .reduce((acc, count) => acc * (count + 1), 1);
    return combinations - 1;
}
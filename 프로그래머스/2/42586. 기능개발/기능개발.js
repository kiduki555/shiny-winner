function solution(progresses, speeds) {
    const days = progresses.map((progress, index) =>
        Math.ceil((100 - progress) / speeds[index])
    );
    const result = [];
    let maxDay = days[0];
    let count = 0;

    for (let day of days) {
        if (day <= maxDay) {
            count++;
        } else {
            result.push(count);
            count = 1;
            maxDay = day;
        }
    }
    result.push(count);

    return result;
}

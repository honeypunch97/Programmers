function solution(fees, records) {
  const parking = {};
  const maxTime = 1439;

  for (const record of records) {
    const [time, id, status] = record.split(" ");
    const [hour, minute] = time.split(":").map(Number);
    const replaceTime = hour * 60 + minute;

    if (!parking[id]) {
      parking[id] = { time: 0, lastInTime: 0, status: '' };
    }

    if (status === "IN") {
      parking[id].lastInTime = replaceTime;
    } else {
      parking[id].time += replaceTime - parking[id].lastInTime;
    }

    parking[id].status = status;
  }

  const result = [];
  for (const id in parking) {
    const car = parking[id];
    if (car.status === "IN") {
      car.time += maxTime - car.lastInTime;
    }
    let fee = fees[1];
    if (car.time > fees[0]) {
      fee += Math.ceil((car.time - fees[0]) / fees[2]) * fees[3];
    }
    result.push([id, fee]);
  }

  return result.sort((a, b) => a[0].localeCompare(b[0])).map(v => v[1]);
}
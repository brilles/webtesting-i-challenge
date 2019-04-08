module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement === 20) {
    return { ...item };
  } else {
    const enhancementPlus1 = item.enhancement + 1;
    return { ...item, enhancement: enhancementPlus1 };
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    const durabilityMinus5 = item.durability - 5;
    return { ...item, durability: durabilityMinus5 };
  } else {
    if (item.enhancement > 15) {
      if (item.enhancement === 16) {
        const durabilityMinus10 = item.durability - 10;
        return {
          ...item,
          durability: durabilityMinus10
        };
      } else {
        const enhancementMinus1 = item.enhancement - 1;
        const durabilityMinus10 = item.durability - 10;
        return {
          ...item,
          durability: durabilityMinus10,
          enhancement: enhancementMinus1
        };
      }
    }
  }
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  if (item.enhancement > 0) {
    return { ...item, name: `[+${item.enhancement}] ${item.name}` };
  } else {
    return { ...item };
  }
}

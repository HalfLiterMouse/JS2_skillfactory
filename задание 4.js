function intUser(start, stop) {
  let i = setInterval(() => {
    console.log(start++);
    if (start > stop) clearInterval(i);
  }, 1000)
}

intUser(5, 15);
function APISim(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.toLowerCase() === "party") {
        resolve("Event has been created");
      } else {
        reject(new Error("Failed to create an event"));
      }
    }, 50);
  });
}

export default APISim;

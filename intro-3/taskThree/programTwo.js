const listMobil = (types) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        { name: "Toyota fortuner", type: "SUV" },
        { name: "Mitsubishi pajero", type: "SUV" },
        { name: "Honda civic", type: "Sedan" },
        { name: "Toyota camry", type: "Sedan" },
      ];
      let cek = data.filter((item) => {
        return item.type == types;
      });

      if (cek) {
        resolve(cek);
      } else {
        reject("Data not found");
      }
    }, 2000);
  });
};

const result = async () => {
  try {
    const wait = await listMobil("hfhs");
    console.log(wait);
  } catch (err) {
    console.log(err);
  }
};

result();

const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const dateDay = [
          "senin",
          "selasa",
          "rabu",
          "kamis",
          "jumat",
          "Jum'at",
          "Sabtu",
        ];
        let cek = dateDay.find((item) => {
          return item === day;
        });
        if (cek) {
          resolve(cek);
        } else {
          reject(new Error("Hari ini bukan hari kerja"));
        }
      } catch (err) {
        return err;
      }
    }, 3000);
  });
};

cekHariKerja("sabtu")
  .then((res) => console.log(`${res} : Hari ini anda kerja`))
  .catch((err) => console.log(`${err} : Anda libur`));

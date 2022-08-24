const getMonth = (callback) => {
  setTimeout(() => {
    let err = true;
    let month = [
      "January",
      "February",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (!err) {
      return callback(null, month);
    } else {
      return callback(new Error("Sory data not found"));
    }
  }, 2000);
};

const hasil = (err, month) => {
  if (month) {
    month.map((item) => {
      console.log(item);
    });
  } else {
    console.log(err);
  }
};
getMonth(hasil);

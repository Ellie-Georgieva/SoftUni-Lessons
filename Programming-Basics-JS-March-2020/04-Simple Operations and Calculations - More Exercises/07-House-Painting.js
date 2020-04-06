function housePainting(x, y, h) {
    x = Number(x);
    y = Number(y);
    h = Number(h);
    let prednaZadna = (x * x) + (x * x) - (2 * 1.2);
    let stranichniSteni = (x * y) + (x * y) - (2 * (1.5 * 1.5));
    let zelenaBoq = (prednaZadna + stranichniSteni) / 3.4;
    let pokrivPrav = (x * y) * 2;
    let pokrivTriugulnik = (x * (h / 2)) * 2;
    let chervenaBoq = (pokrivPrav + pokrivTriugulnik) / 4.3;
    console.log(zelenaBoq.toFixed(2));
    console.log(chervenaBoq.toFixed(2));
  }
housePainting(6, 10, 5.2);
housePainting(10.25, 15.45, 8.88);


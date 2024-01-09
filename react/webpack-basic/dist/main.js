(() => {
  "use strict";
  console.log(
    ((o = 21) =>
      crypto
        .getRandomValues(new Uint8Array(o))
        .reduce(
          (o, e) =>
            o +
            ((e &= 63) < 36
              ? e.toString(36)
              : e < 62
              ? (e - 26).toString(36).toUpperCase()
              : e > 62
              ? "-"
              : "_"),
          ""
        ))()
  ),
    console.log("서울"());
})();

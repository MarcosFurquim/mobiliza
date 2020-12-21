window.jQuery = window.$ = require("jquery");
require("bootstrap");
import Splide from "@splidejs/splide";

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 2,
  perMove: 1,
  gap: "30px",
  pagination: false,
  //   padding: {
  //     right: "5rem",
  //     left: "5rem",
  //   },
}).mount();
splide.on("mounted", function () {
  // This won't be executed.
});

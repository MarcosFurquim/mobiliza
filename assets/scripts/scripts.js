window.jQuery = window.$ = require("jquery");
require("bootstrap");
import Splide from "@splidejs/splide";

new Splide(".splide", {
  type: "loop",
  perPage: 2,
}).mount();

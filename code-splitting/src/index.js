// Enrty points, Prevent-Duplication에서 사용.
// import _ from "lodash";

// console.log(_.join(["index.js", "lodash module", "loaded!"], " "));

// dynamic Import에서 사용.
const dynamicImport = async () => {
  const { default: _ } = await import("lodash");

  const root = document.getElementById("root");
  const element = document.createElement("div");

  element.innerHTML = _.join(["Dynamic", "Import"], " ");

  root.appendChild(element);
};

dynamicImport();

export function save(src) {
  if (!sessionStorage.getItem("asset")) {
    sessionStorage.setItem("asset", "[]");
  }

  let assets = sessionStorage.getItem("asset");

  assets = JSON.parse(assets);
  assets.unshift(src);
  assets = JSON.stringify(assets);
  sessionStorage.setItem("asset", assets);
}

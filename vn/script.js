// [!] This code hasn't been tested yet.
// It may work or may not!
// TODO: Find testers

const defaultLocale = "vn-Vietnamese";

const locale =
  navigator.language ||
  (navigator.languages && navigator.languages[0]) ||
  defaultLocale;

if (locale.startsWith("vi")) {
  window.location.href = "/vn"; // vietnamese version
} else if (locale === "id-ID") {
  window.location.href = "/id"; // indonesian version
}

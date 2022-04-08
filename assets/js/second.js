const currentUrl = new URL(window.Location.href)
console.log(currentUrl);
const getId = currentUrl.searchParams.getId('id');
console.log(getId);
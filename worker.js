export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.hostname = "morad.pages.dev";
    return fetch(new Request(url.toString(), request));
  },
};

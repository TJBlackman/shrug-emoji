Deno.serve(() => {
  return new Response(Deno.readFileSync("./index.html"), {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
});

Deno.serve(() => {
  return new Response(
    `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SHRUG EMOJI</title>
    </head>
    <body>
      <h1>¯\\_(ツ)_/¯</h1>
    </body>
  </html>
  `,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    }
  );
});

const p = Deno.run({
  args: ["ls", "-la"]
});

await p.status();

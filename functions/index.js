export async function onRequestGet (context) {
  const asset = await context.env.ASSETS.fetch(context.request)

  let html = await asset.text()

  const response = await fetch('https://catfact.ninja/fact')
  const data = await response.json()
  const catFact = await data.fact

  html = html + `<p>${catFact}</p>`

  return new Response(html, asset)
}

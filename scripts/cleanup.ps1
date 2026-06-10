$toDelete = @(
  'BerbacoaDeChivo.png',
  'barbacoa-de-res.png',
  'breackfast-tacos.png',
  'burrito (2).png',
  'burrito (3).png',
  'cafe-de-olla.png',
  'huevito en salasa.png',
  'huevos-rancheros.png',
  'logo.png',
  'menudo.png',
  'mi-zacazonapan.png',
  'quesabirria.png',
  'quesadilla (2).png',
  'seccion-final.jpg',
  'servido-de-chivo.png',
  'sopes (2).png',
  'tacos (2).png',
  'tacos-portada.png',
  'torta-cubana.png',
  'vegetariano.png',
  'aguas-frescas.jpeg',
  'zacazonapan Logo_Mesa de trabajo 1.png',
  'zacazonapan Logo_Mesa de trabajo 1.webp',
  'chilaquiles.webp',
  'chilaquiles (2).webp'
)
$dir = 'public\images'
foreach ($f in $toDelete) {
  $p = Join-Path $dir $f
  if (Test-Path $p) {
    Remove-Item $p -Force
    Write-Host "Deleted: $f"
  } else {
    Write-Host "Not found: $f"
  }
}
Write-Host 'Done.'

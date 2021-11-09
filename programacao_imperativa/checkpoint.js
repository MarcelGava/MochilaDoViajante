function microondas(prato, tempo) {
  if (prato == 1 && tempo == 10) {
    console.log('Prato pronto, bom apetite!!!')
  } else if (prato == 1 && tempo < 10) {
    console.log('Tempo insuficiente')
  } else if (prato == 1 && tempo >= 20 && tempo < 30) {
    console.log('A comida queimou')
  } else if (prato == 1 && tempo >= 30) {
    console.log('Kabummm!!')
  } else {
    console.log('Prato inexistente')
  }
  if (prato == 2 && tempo == 8) {
    console.log('Prato pronto, bom apetite!!!')
  } else if (prato == 2 && tempo < 8) {
    console.log('Tempo insuficiente')
  } else if (prato == 2 && tempo >= 16 && tempo < 24) {
    console.log('A comida queimou')
  } else if (prato == 2 && tempo >= 24) {
    console.log('Kabummm!!')
  } else {
    console.log('Prato inexistente')
  }
  if (prato == 3 && tempo == 15) {
    console.log('Prato pronto, bom apetite!!!')
  } else if (prato == 3 && tempo < 15) {
    console.log('Tempo insuficiente')
  } else if (prato == 3 && tempo >= 30 && tempo < 45) {
    console.log('A comida queimou')
  } else if (prato == 3 && tempo >= 45) {
    console.log('Kabummm!!')
  } else {
    console.log('Prato inexistente')
  }
  if (prato == 4 && tempo == 12) {
    console.log('Prato pronto, bom apetite!!!')
  } else if (prato == 4 && tempo < 12) {
    console.log('Tempo insuficiente')
  } else if (prato == 4 && tempo >= 24 && tempo < 36) {
    console.log('A comida queimou')
  } else if (prato == 4 && tempo >= 36) {
    console.log('Kabummm!!')
  } else {
    console.log('Prato inexistente')
  }
  if (prato == 5 && tempo == 8) {
    console.log('Prato pronto, bom apetite!!!')
  } else if (prato == 5 && tempo < 8) {
    console.log('Tempo insuficiente')
  } else if (prato == 5 && tempo >= 16 && tempo < 24) {
    console.log('A comida queimou')
  } else if (prato == 5 && tempo >= 24) {
    console.log('Kabummm!!')
  } else {
    console.log('Prato inexistente')
  }
}

console.log(microondas(1, 8))

const resultUser = (data) => {
  const novoArray = data.map(item => {
    const novoObjeto = {
      id: item.id,
      propertie: item.propertie,
      value: item.value
    };

    if (item.value < 3) {
      novoObjeto.result = item.result_1;
    } else {
      novoObjeto.result = item.result_2;
    }

    return novoObjeto;
  })

  return novoArray
}

export { resultUser }
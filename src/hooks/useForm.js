import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) { // chave pode ser titulo, descricao e cor
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handlerChange(infosDoEvento) {
    const { name, value } = infosDoEvento.target;
    setValue(
      name,
      value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handlerChange,
    clearForm,
  };
}

export default useForm;

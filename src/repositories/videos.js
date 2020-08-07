import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Não foi possível cadastrar o novo vídeo :(');
    });
}

export default {
  create,
};

import axios from 'axios'
import { CatalogsLoadError, CatalogsLoading, CatalogsLoadSucces } from '../actions/CatalogsActions'

export const getCatalogo = (id) => (dispatch) => {
  dispatch(CatalogsLoading())

  const options = {
    method: 'GET',
    url: 'http://localhost:8080/api/catalogo/{id}'
  }

  axios.request(options).then(function (response) {
    dispatch(CatalogsLoadSucces(response.data))
  }).catch(function (error) {
    dispatch(CatalogsLoadError(error))
  })
}

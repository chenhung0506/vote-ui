const PROTO_HOST = document.location.protocol + '//' + window.location.host
const axios = require('axios')

var api = {
  getRecordDetail (data) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    return this.$reqPost(PROTO_HOST + '/api/v2/stats/records/query', data, config)
      .then(res => res.data)
  },
  getRecordDetail2 () {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Appid': ''
      }
    }
    return axios.get(PROTO_HOST + '/customized/getChatRecords', config, {
    })
      .then(function (response) {
        console.log(response)
      })
  },
  getRecordDetail3 (callID) {
    const axios = require('axios')
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return axios.post(PROTO_HOST + '/customized/chat', {'callID': callID}, config).then(resp => resp.data.data)
  },
  getTag (callID) {
    const axios = require('axios')
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return axios.post(PROTO_HOST + '/customized/tag', {'callID': callID}, config).then(resp => resp.data.data)
  },
  getEnterCCbotUrl (callID) {
    const axios = require('axios')
    return axios.post(PROTO_HOST + '/customized/getEnterCCbotUrl', {
      jsonData: JSON.stringify({
        session_id: callID
      })
    }, {}).then(resp => resp.data.data)
  },
  getOptions () {
    const axios = require('axios')
    console.log(PROTO_HOST)
    return axios.post(PROTO_HOST + '/vote/getOptions', {
      jsonData: JSON.stringify({
        session_id: 'test'
      })
    }, {}).then(resp => resp.data.data)
  }
}

export default api

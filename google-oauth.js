function validateOauthMethods (vnode) {
  if (!vnode.context.onGoogleAuthSuccess) {
    throw new Error(`Method onGoogleAuthSuccess must be defined on ${vnode.context._name} component`)
  }

  if (!vnode.context.onGoogleAuthError) {
    throw new Error(`Method onGoogleAuthError must be defined on ${vnode.context._name} component`)
  }
}

function loadOauthScript (vnode, clientId) {
  const scriptEl = document.createElement('script')

  scriptEl.setAttribute('src', 'https://apis.google.com/js/platform.js')
  scriptEl.setAttribute('async', true)
  scriptEl.setAttribute('defer', true)
  document.head.appendChild(scriptEl)
  scriptEl.onload = initScript

  function initScript () {
    gapi.load('auth2', function gapiLoad () {
      const params = {
        client_id: clientId,
        cookiepolicy: 'single_host_origin'
      }

      gapi.auth2.init(params)
        .then(res => vnode.context.onGoogleAuthSuccess(res))
        .catch(err => vnode.context.onGoogleAuthError(err))
    })
  }
}

const googleOauth = {
  bind: function (el, binding, vnode) {
    validateOauthMethods(vnode)

    el.addEventListener('click', function googleSignBtnClicked (e) {
      e.preventDefault()
      loadOauthScript(vnode, binding.value)
    })
  }
}

module.exports = googleOauth

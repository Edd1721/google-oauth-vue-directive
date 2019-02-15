# google-oauth-vue-directive

Straightforward Vue.js directive to get, in 4 steps, [Google sigIn](https://developers.google.com/identity/sign-in/web/sign-in) into your website.

# Steps

1.  Install it

```javascript
  npm install --save google-oauth-vue-directive
```

2.  Import the directive into your Vue component.

```html
<template>
  {...}
</template>
<script>
  import { googleOauth } from 'google-oauth-vue-directive'

  export default {
    ...,
    directives: {
      googleOauth
    },
    ...
  }
</script>
```

If you are using [Nuxt](https://nuxtjs.org/), use it as follow in your `nuxt.config.js`

```javascript
{
  modules: [
    'google-oauth-vue-directive'
  ]
}
```

3.  Create method **onGoogleAuthSuccess** and **onGoogleAuthError**.

```html
  <template>
    {...}
  </template>
  <script>
    import { googleOauth } from 'google-oauth-vue-directive'

    export default {
      ...,
      directives: {
        googleOauth
      },
      methods: {
        onGoogleAuthSuccess (googleAuth) {
          const isSigned = googleAuth.isSignedIn.get()
          // you can do stuff here with googleAuth object. Read google docs
        }
        onGoogleAuthError (err) {
          console.log(':oauth-error:', error)
          // you can do stuff here with the received error.
        }
      }
      ...
    }
  </script>
```

4.  Use the directive **v-google-oauth="clientId"** in your HTML tag.

```html
 <template>
   ...
   <button  v-google-oauth="clientId"  class="button">SigIn with Google</button>
   ...
 </template>
 <script>
   import { googleOauth } from 'google-oauth-vue-directive'

   export default {
     ...,
     directives: {
       googleOauth
     },
     data () {
       return  {
         clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com'
       }
     },
     ...
   }
 </script>
```

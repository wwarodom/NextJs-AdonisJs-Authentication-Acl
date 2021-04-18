'use strict'

require('./auth')

require('./admin')

require('./client')

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.get('/', () => console.log('Hello Adonis') )
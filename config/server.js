module.exports = ( { env } ) => {
  if ( env( 'NODE_ENV' ) === 'development' ) {
    return {
      host: env( 'HOST', '0.0.0.0' ),
      port: env.int( 'PORT', 1337 ),
      app: {
        keys: env.array( 'APP_KEYS' ),
      },
      webhooks: {
        populateRelations: env.bool( 'WEBHOOKS_POPULATE_RELATIONS', false ),
      },
    }
  } else {
    return {
      host: env( 'HOST', '0.0.0.0' ),
      port: env.int( 'PORT', 1337 ),
      url: 'https://justben.uk/cp/admin',
      app: {
        keys: env.array( 'APP_KEYS' ),
      },
      webhooks: {
        populateRelations: env.bool( 'WEBHOOKS_POPULATE_RELATIONS', false ),
      },
    }
  }
};

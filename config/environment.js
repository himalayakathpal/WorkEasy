

const production =  {
    name: 'production',
    asset_path: process.env.WORKEASY_ASSET_PATH,
    session_cookie_key: process.env.WORKEASY_SESSION_COOKIE_KEY,
    db: process.env.WORKEASY_DB,
    google_client_id: process.env.WORKEASY_GOOGLE_CLIENT_ID,
    google_client_secret: process.env.WORKEASY_GOOGLE_CLIENT_SECRET,
    google_call_back_url: process.env.WORKEASY_GOOGLE_CALLBACK_RURL,
    jwt_secret: process.env.WORKEASY_JWT_SECRET,
}


module.exports =eval(process.env.WORKEASY_ENVIRONMENT);
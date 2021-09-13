#!/bin/bash

cd /app/
if [ "$IS_DEV" = "true" ] ; then 
    echo Dev mode; 
    npm run dev; 
else echo Server mode; 
    npm run build && npm run start ;
fi

exec "$@"
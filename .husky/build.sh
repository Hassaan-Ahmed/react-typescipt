FILE=".env"
if [[ -s $FILE ]]; then

export $(grep -v '^#' $FILE  | tr -d ' ' | xargs)

case "${NODE_ENV,,}" in prod*) npm run build;; esac

fi
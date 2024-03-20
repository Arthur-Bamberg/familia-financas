Comando para tirar exportdo banco dentro do container: `docker exec {container_name} pg_dump -U {user}  -F t {db_name} > database_export.tar`

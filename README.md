Comando para tirar export do banco dentro do container: `docker exec {container} pg_dump -U {user} -F t {db_name} --inserts > backup.sql`

Export mais atualizado estará no Google Drive com a data da última contabilização (dd-mm-yyyy.sql)
headzoo.io
==========

## Requirements

* Ubuntu 14.04
* PHP 7.0
* Nginx 1.10.0

## Installing

Clone the repo, install and build the assets, and set the permissions and ownership.

```bash
mkdir -f /var/www
cd /var/www
git clone git@github.com:headzoo/headzooio.git headzoo.io
cd headzoo.io

composer install
npm install
npm run build

HTTPDUSER=$(ps axo user,comm | grep -E '[a]pache|[h]ttpd|[_]www|[w]ww-data|[n]ginx' | grep -v root | head -1 | cut -d\  -f1)
sudo setfacl -dR -m u:"$HTTPDUSER":rwX -m u:$(whoami):rwX var uploads
sudo setfacl -R -m u:"$HTTPDUSER":rwX -m u:$(whoami):rwX var uploads

sudo chown -R www-data:www-data /var/www/headzoo.io
```

Install Nginx and PHP.

```bash
sudo apt-get update
sudo apt-get install nginx php7.0-fpm php7.0-json php7.0-mysql php7.0-xml php7.0-mbstring
```

Save the Nginx configuration as _/etc/nginx/sites-available/headzoo.io_.

```nginx
server {
        listen 80;
        server_name headzoo.io;
        return 301 https://$host$request_uri;
}

server {
        listen 80;
        listen 443;
        server_name headzoo.io;
        root /var/www/headzoo.io/web;

        set $app app.php;
        index $app;
        try_files $uri /$app?$query_string;

        error_log /var/log/nginx/headzoo.io-error.log;
        access_log /var/log/nginx/headzoo.io.log;

        gzip on;
        gzip_min_length 1000;
        gzip_types application/x-javascript application/javascript text/css application/json application/xml text/yaml;

        ssl_certificate /etc/letsencrypt/live/headzoo.io/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/headzoo.io/privkey.pem;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';

        location ~* \.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc)$ {
                expires 1M;
                access_log off;
                add_header Cache-Control "public";
        }

        location ~* \.(?:css|js)$ {
                expires 1y;
                access_log off;
                add_header Cache-Control "public";
        }

        location ~ \.php$ {
                fastcgi_split_path_info ^(.+\.php)(/.+)$;
                fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
                fastcgi_index $app;
                include fastcgi_params;
                fastcgi_param SCRIPT_FILENAME $document_root/$fastcgi_script_name;
        }
}
```

Enable the site and restart the web server.

```bash
sudo ln -s /etc/nginx/sites-available/headzoo.io /etc/nginx/sites-enabled/headzoo.io
sudo service nginx restart
```

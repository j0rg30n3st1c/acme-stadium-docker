#!/usr/bin/sh
apt update
apt install -y mkcert libnss3 openssl

# Determine if certificate exist
if ! [ -e cert_data/_wildcard.onestic.dev+3.pem ]
then
  mkdir -p cert_data/
  mkcert -install
  mkcert -cert-file cert_data/_wildcard.onestic.dev+3.pem -key-file cert_data/_wildcard.onestic.dev+3-key.pem "*.onestic.dev" localhost 127.0.0.1 ::1
fi

# Determine if the expiration day of certificate is under 1 week
if ! openssl x509 -checkend 604800 -noout -in cert_data/_wildcard.onestic.dev+3.pem
then
  mkcert -install
  mkcert -cert-file cert_data/_wildcard.onestic.dev+3.pem -key-file cert_data/_wildcard.onestic.dev+3-key.pem "*.onestic.dev" localhost 127.0.0.1 ::1
fi
